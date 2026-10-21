#!/usr/bin/env python3
"""Search and verify unfinished ECE/EEE Chemistry figures, updating live status."""
import json, os, re, subprocess, sys, threading, time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PIPELINE = Path('/home/adhil/projects/stem-notes-pipeline')
OUT = PIPELINE / 'out'
STATUS = PIPELINE / 'tools/chemistry-figure-status.json'
AGENT = ROOT / 'scripts/image-agent.mjs'
MANIFEST = ROOT / 'data/image-agent/search-chemistry'
WORKERS = 2
lock = threading.RLock()


def save_status(s):
    with lock:
        s['generated'] = sum(m['generated'] for m in s['modules'])
        s['total'] = sum(m['total'] for m in s['modules'])
        s['activity'] = s['activity'][-30:]
        temp = STATUS.with_suffix('.json.tmp')
        temp.write_text(json.dumps(s, indent=2) + '\n')
        temp.replace(STATUS)


def collect(module):
    d = OUT / f'chem-ece-m{module}'
    result = []
    for p in sorted((d / 'state/pages').glob('*.json')):
        page = json.loads(p.read_text())
        for f in page.get('figures', []):
            if f.get('hidden') or f.get('render'):
                continue
            asset = f.get('asset')
            if asset and (d / asset).exists():
                continue
            result.append(f)
    return result


def add_source_credit(note, image_id, source):
    lines = note.read_text().splitlines()
    for i, line in enumerate(lines):
        if image_id + '.webp' not in line or not line.startswith('!['):
            continue
        credit = f"> Source: [{source.get('title') or 'Image'}]({source['pageUrl']}) — {source.get('license') or 'license shown on source page'}"
        if source.get('author'):
            credit += f", {source['author']}"
        j = i + 1
        while j < len(lines) and lines[j].startswith('>'):
            j += 1
        lines.insert(j, credit)
        note.write_text('\n'.join(lines) + '\n')
        return True
    return False


def set_image_source(note, image_id, image_url):
    lines = note.read_text().splitlines()
    pattern = re.compile(rf'^(\!\[[^\]]*\])\([^)]*{re.escape(image_id)}\.webp\)$')
    for i, line in enumerate(lines):
        m = pattern.match(line)
        if m:
            lines[i] = f'{m.group(1)}({image_url})'
            note.write_text('\n'.join(lines) + '\n')
            return True
    return False


def log_activity(status, message):
    with lock:
        status['activity'].append(message)
        save_status(status)


def run_task(status, task, index, total_tasks, env):
    module, fig = task
    ident = fig['id']
    desc = fig.get('description') or fig.get('alt') or ident
    entry = next(m for m in status['modules'] if m['module'] == module)
    active = status.setdefault('_active', {3: [], 4: []})
    label = f'{ident}: searching + checking match/license'
    with lock:
        active[module].append(label)
        entry['state'] = 'Searching'
        entry['current'] = ' | '.join(active[module])
        status['activity'].append(f'M{module}: Searching {ident} ({index}/{total_tasks}) · {fig.get("alt", "")}')
        save_status(status)

    target_dir = MANIFEST / f'module-{module}' / ident
    cmd = ['node', str(AGENT), desc, '--out', str(target_dir), '--count', '1', '--min-score', '8', '--max-candidates', '20', '--model', 'gemini-3.5-flash-lite']
    proc = subprocess.Popen(cmd, cwd=ROOT, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
    assert proc.stdout is not None
    for raw in proc.stdout:
        line = raw.rstrip()
        if not line:
            continue
        with lock:
            entry['current'] = ' | '.join(active[module]) + f' · {ident}: {line[:120]}'
            status['activity'].append(f'M{module}: {ident}: {line[:180]}')
            save_status(status)
        print(f'M{module} {ident}: {line}', flush=True)
    code = proc.wait()
    sidecars = sorted(target_dir.glob('*.json'), key=lambda p: p.stat().st_mtime, reverse=True) if target_dir.exists() else []
    result = {'module': module, 'id': ident, 'result': 'no-match', 'description': desc, 'status': code}
    if sidecars:
        meta = json.loads(sidecars[0].read_text())
        if meta.get('review', {}).get('match') and meta.get('imageUrl') and meta.get('pageUrl'):
            note = ROOT / f'src/features/notes/chemistry-ece-module-{module}/notes.md'
            if add_source_credit(note, ident, meta) and set_image_source(note, ident, meta['imageUrl']):
                result.update(result='matched', source=meta, imageUrl=meta['imageUrl'])
                with lock:
                    entry['generated'] += 1
                    status['activity'].append(f'M{module}: {ident} matched ({meta.get("license") or "license unspecified"}); linked in notes.')
            else:
                result.update(result='not-linked', source=meta)
                with lock:
                    entry.setdefault('errors', 0); entry['errors'] += 1
                    status['activity'].append(f'M{module}: {ident} passed review but its notes image slot was not found.')
    else:
        with lock:
            status['activity'].append(f'M{module}: {ident} had no verified reusable match; existing figure reference retained.')
    result['completedAt'] = time.strftime('%Y-%m-%dT%H:%M:%S%z')
    with lock:
        entry['processed'] = entry.get('processed', 0) + 1
        status['searchResults'].append(result)
        active[module].remove(label)
        entry['current'] = ' | '.join(active[module])
        save_status(status)
    return result


def main():
    status = json.loads(STATUS.read_text())
    status.update(state='Searching for remaining figures', model='gemini-3.5-flash-lite · Wikimedia Commons + Openverse (2 workers)', project='edbarb', region='global')
    status.setdefault('searchResults', [])
    status['review'] = {'state': 'In progress', 'method': 'Image agent visually checks each candidate with gemini-3.5-flash-lite'}
    status['_active'] = {3: [], 4: []}
    figures = {m: collect(m) for m in (3, 4)}
    completed = [r for r in status['searchResults'] if r.get('result') in ('matched', 'no-match', 'not-linked')]
    completed_ids = {(r['module'], r['id']) for r in completed}
    for module in (3, 4):
        entry = next(m for m in status['modules'] if m['module'] == module)
        already = sum(r['module'] == module for r in completed)
        # generated includes previous matches; processed also includes earlier no-match results.
        baseline = max(0, entry['generated'] - sum(r['module'] == module and r['result'] == 'matched' for r in completed))
        entry['processed'] = baseline + already
        entry['state'] = 'Searching'
        entry['current'] = ''
    tasks = [(m, f) for m in (3, 4) for f in figures[m] if (m, f['id']) not in completed_ids]
    total_tasks = len(tasks)
    status['activity'].append(f'Image search running with {WORKERS} workers: {total_tasks} remaining figures (M3 + M4).')
    save_status(status)

    env = os.environ.copy()
    env.update(GOOGLE_APPLICATION_CREDENTIALS='/home/adhil/keys/admin-2.json', GOOGLE_CLOUD_PROJECT='edbarb', GOOGLE_CLOUD_LOCATION='global', GOOGLE_GENAI_USE_VERTEXAI='1')
    if tasks:
        with ThreadPoolExecutor(max_workers=WORKERS) as pool:
            futures = [pool.submit(run_task, status, task, index, total_tasks, env) for index, task in enumerate(tasks, 1)]
            for future in as_completed(futures):
                try:
                    future.result()
                except Exception as e:
                    with lock:
                        status['activity'].append(f'Worker error: {type(e).__name__}: {str(e)[:180]}')
                        status.setdefault('workerErrors', 0); status['workerErrors'] += 1
                        save_status(status)
                    print(f'Worker error: {e}', file=sys.stderr, flush=True)

    for module in (3, 4):
        entry = next(m for m in status['modules'] if m['module'] == module)
        entry['current'] = ''
        entry['state'] = 'Complete' if entry.get('processed', 0) >= entry['total'] else 'Needs retry'
    status['state'] = 'Image search complete' if all(next(m for m in status['modules'] if m['module'] == n).get('state') == 'Complete' for n in (3, 4)) else 'Image search needs retry'
    status['review'] = {'state': 'complete', 'flagged': sum(r['result'] != 'matched' for r in status['searchResults']), 'method': 'Gemini 3.5 Flash-Lite visually checked candidates; unverified replacements were not used'}
    status['activity'].append('Image search run finished. Review Needs retry entries for figures without verified reusable matches.')
    save_status(status)
    print('Image search run finished.', flush=True)

if __name__ == '__main__':
    main()
