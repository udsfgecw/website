#!/usr/bin/env python3
"""Replace the Engineering Graphics figure placeholders with crops of the original drawings.

pdf-to-notes left every graphics figure it could not draw from data as a text placeholder
("> **Figure: alt**" followed by a description). Its page renders and per-figure records are
still in ../pdf-to-notes/out/<run>/, so this script crops each figure from its source page:

1. Split the page into panels at the navy separator bars the KTUNOTES sheets use.
2. Pick the figure's panel: by step label ("156.4") when a page has one labelled figure per
   panel, otherwise by the model's sourceBox (tried in both axis orders, since the model mixed
   [l, t, r, b] with [t, l, b, r] and 0-1 with 0-1000).
3. Trim the panel to its dark ink, dropping the small branding clusters in the side strips
   (author line, channel box, logo) and ignoring the light watermark.

Crops are written as WebP under public/notes/cse/s1/graphics/module-N/assets/ (ignored by git,
served from R2), placeholders become Markdown images, sizes go to
src/data/graphics-figure-dimensions.ts and the files are added to the media manifest.

    python3 scripts/crop-graphics-figures.py            # crop, rewrite notes, write review sheets
    python3 scripts/crop-graphics-figures.py --dry-run  # mapping report and review sheets only
"""
import argparse, hashlib, json, re
from collections import defaultdict
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
PIPELINE = ROOT.parent / "pdf-to-notes" / "out"
MEDIA_BASE = "https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev"
MODULES = [("m1v2", 1), ("m2", 2), ("m3", 3), ("m4", 4)]
PLACEHOLDER = re.compile(r"^> \*\*Figure: (?P<alt>.*?)\*\*\n>\n(?P<body>(?:> .*\n?)+)", re.M)
LABEL = re.compile(r"\b(\d{1,3}\.\d)\b")
HELPER = re.compile(r"given|dimensions box|scale|helper|reference|construction diagram", re.I)

# Page geometry of the KTUNOTES graphics sheets (fractions of the 1350x1800 render).
SIDE_LEFT, SIDE_RIGHT = 0.115, 0.845  # author line on the left, channel box and logo on the right
SIDE_WIDTH = 0.09  # a cluster this narrow inside a side strip is branding, not drawing
PAGE_TOP, PAGE_BOTTOM = 0.035, 0.955  # date stamp above, download line and page numbers below
QUESTION_HEADING = 0.09  # question number and heading above a title band
BAR_MARGIN = 3  # keep clear of the separator bars (their soft edges are masked as navy below)
CELL, REACH = 8, 3  # clustering grid (px) and how many cells apart ink still joins one cluster
PAD = 14


def separator_bars(rgb):
    r, g, b = (rgb[..., i].astype(int) for i in range(3))
    navy = (b > 70) & (b < 150) & (r < 70) & (g < 90) & (b - r > 30)
    rows = np.where(navy.mean(axis=1) > 0.5)[0]
    bars = []
    for y in rows:  # merge bars closer than 40px (the M3 title bands)
        if bars and y - bars[-1][1] <= 40:
            bars[-1][1] = y
        else:
            bars.append([y, y])
    return bars


def panels(rgb):
    """(top, bottom, is_text) for each panel. A question starts with a tall title band (the merged
    navy title bars): the question number and heading sit just above it, the question text below
    it. Neither is a drawing, though the end of the previous problem can share the panel above."""
    h = rgb.shape[0]
    bars = separator_bars(rgb)
    edges = [int(PAGE_TOP * h)]
    for top, bottom in bars:
        edges += [top - BAR_MARGIN, bottom + 1 + BAR_MARGIN]
    edges.append(int(PAGE_BOTTOM * h))
    title = [bottom - top >= 40 for top, bottom in bars]
    spans = []
    for i in range(len(bars) + 1):
        top, bottom = edges[2 * i], edges[2 * i + 1]
        if i > 0 and title[i - 1]:
            spans.append((top, bottom, True))  # question text
        elif i < len(bars) and title[i]:
            spans.append((top, bottom - int(QUESTION_HEADING * h), False))  # drawing above a heading
        else:
            spans.append((top, bottom, False))
    return [span for span in spans if span[1] - span[0] > 0.08 * h]


def clusters(mask):
    """Bounding boxes (in grid cells) of the 8-connected clusters of a small boolean grid."""
    seen = np.zeros_like(mask, dtype=bool)
    rows, cols = mask.shape
    boxes = []
    for y0, x0 in zip(*np.nonzero(mask)):
        if seen[y0, x0]:
            continue
        stack, box = [(y0, x0)], [x0, y0, x0, y0]
        seen[y0, x0] = True
        while stack:
            y, x = stack.pop()
            box = [min(box[0], x), min(box[1], y), max(box[2], x), max(box[3], y)]
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < rows and 0 <= nx < cols and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        stack.append((ny, nx))
        boxes.append(box)
    return boxes


def ink_box(rgb, top, bottom):
    """Tight box around the drawing in a panel, without the branding in the side strips."""
    h, w, _ = rgb.shape
    region = rgb[top:bottom].astype(int)
    gray = region.mean(axis=2)
    spread = region.max(axis=2) - region.min(axis=2)
    navy = region[..., 2] - region[..., 0] > 30  # separator bar edges, the blue watermark
    # dark lines and labels, plus the light neutral-gray construction lines; the watermark is tinted
    ink = ((gray < 150) | ((gray < 215) & (spread < 20))) & ~navy
    rows, cols = ink.shape[0] // CELL, w // CELL
    grid = ink[:rows * CELL, :cols * CELL].reshape(rows, CELL, cols, CELL).any(axis=(1, 3))
    padded = np.pad(grid, REACH)
    joined = np.zeros_like(grid)
    for dy in range(2 * REACH + 1):
        for dx in range(2 * REACH + 1):
            joined |= padded[dy:dy + rows, dx:dx + cols]
    kept = []
    for x0, y0, x1, y1 in clusters(joined):
        cells = grid[y0:y1 + 1, x0:x1 + 1]
        if cells.sum() < 4:
            continue  # specks
        ys, xs = np.nonzero(cells)
        box = (x0 + xs.min(), y0 + ys.min(), x0 + xs.max() + 1, y0 + ys.max() + 1)
        left, right = box[0] * CELL / w, box[2] * CELL / w
        if right - left < SIDE_WIDTH and (right <= SIDE_LEFT or left >= SIDE_RIGHT):
            continue  # author line, logo or channel box
        kept.append(box)
    if not kept:
        return None
    x0, y0 = min(k[0] for k in kept) * CELL, min(k[1] for k in kept) * CELL
    x1, y1 = max(k[2] for k in kept) * CELL, max(k[3] for k in kept) * CELL
    return (max(0, x0 - PAD), max(0, top + y0 - PAD), min(w, x1 + PAD), min(h, top + y1 + PAD))


def box_candidates(box):
    """Plausible [l, t, r, b] fractions for a model box in any of the formats it used."""
    if not box:
        return []
    if all(x > 1 for x in box):
        v = [x / 1000 for x in box]  # the model's native 0-1000 scale
    else:  # a fraction that lost its "0.": 53 -> 0.53, 532 -> 0.532
        v = [x / 10 ** len(str(int(x))) if x > 1 else x for x in box]
    out = []
    for l, t, r, b in (v, [v[1], v[0], v[3], v[2]]):
        if all(0 <= x <= 1 for x in (l, t, r, b)):
            out.append((min(l, r), min(t, b), max(l, r), max(t, b)))
    return out


def panel_by_box(fig, spans, candidates, height):
    best, best_score = None, 0.0
    for _, t, _, b in box_candidates(fig.get("sourceBox")):
        if b - t < 0.02:
            continue
        for i in candidates:
            top, bottom, _ = spans[i]
            inside = max(0.0, min(b, bottom / height) - max(t, top / height)) / (b - t)
            if inside > best_score:
                best, best_score = i, inside
    return best if best_score >= 0.5 else None


def label_of(fig):
    found = LABEL.search(fig["alt"]) or LABEL.search(fig.get("description", ""))
    return found.group(1) if found else None


def assign_panels(figures, spans, height):
    """Panel index for each figure on one page, choosing among the drawing panels only."""
    candidates = [i for i, span in enumerate(spans) if not span[2]]
    labels = [label_of(f) for f in figures]
    distinct = sorted({l for l in labels if l}, key=lambda s: tuple(map(int, s.split("."))))
    if None not in labels and len(distinct) == len(candidates):
        return {f["id"]: candidates[distinct.index(l)] for f, l in zip(figures, labels)}, "label"
    result = {f["id"]: panel_by_box(f, spans, candidates, height) for f in figures}
    if len(candidates) == 1:  # one drawing on the page: every figure is part of it
        return {f["id"]: candidates[0] for f in figures}, "single"
    if all(v is None for v in result.values()) and len(figures) == len(candidates):
        return {f["id"]: i for f, i in zip(figures, candidates)}, "order"
    return result, "box"


def load_figures(run):
    figures = []
    for file in sorted((PIPELINE / run / "state" / "pages").glob("*.json")):
        figures += json.loads(file.read_text()).get("figures") or []
    return figures


def match_placeholder(alt, body, by_alt):
    candidates = by_alt.get(alt.strip(), [])
    if len(candidates) == 1:
        return candidates[0]
    text = re.sub(r"\s+", " ", " ".join(line[2:] for line in body.splitlines()))
    for fig in candidates:  # repeated alts: the placeholder body starts with the description
        if re.sub(r"\s+", " ", fig["description"])[:120] in text:
            return fig
    return candidates[0] if candidates else None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    review = ROOT / "data" / "curation" / "graphics-figure-review"
    review.mkdir(parents=True, exist_ok=True)
    dimensions, manifest_files, report = {}, [], {}

    for run, number in MODULES:
        notes_file = ROOT / "src" / "features" / "notes" / f"graphics-m{number}" / "notes.md"
        notes = notes_file.read_text()
        figures = load_figures(run)
        by_alt, by_page = defaultdict(list), defaultdict(list)
        for f in figures:
            by_alt[f["alt"].strip()].append(f)
            by_page[f["page"]].append(f)

        placeholders = list(PLACEHOLDER.finditer(notes))
        wanted = {}
        for m in placeholders:
            fig = match_placeholder(m.group("alt"), m.group("body"), by_alt)
            wanted[m.start()] = fig

        crops, methods, unplaced, question_text = {}, defaultdict(int), [], []
        for page in sorted({f["page"] for f in wanted.values() if f}):
            image = Image.open(PIPELINE / run / "pages" / f"{page:03d}.jpg").convert("RGB")
            rgb = np.asarray(image)
            spans = panels(rgb)
            mapping, method = assign_panels(by_page[page], spans, rgb.shape[0])
            methods[method] += 1
            for fig in by_page[page]:
                index = mapping.get(fig["id"])
                if index is not None and spans[index][2]:
                    question_text.append(fig["id"])  # question number, title or text, not a drawing
                    continue
                box = ink_box(rgb, *spans[index][:2]) if index is not None else None
                if box is None:
                    unplaced.append(fig["id"])
                    continue
                crops[fig["id"]] = (page, index, box)

        # One image per panel, placed at the panel's main figure. The model often split a panel
        # into parts (views, an isometric scale, the given-dimensions box); their placeholders are
        # dropped, since the panel crop already shows them.
        out_dir = ROOT / "public" / "notes" / "cse" / "s1" / "graphics" / f"module-{number}" / "assets"
        out_dir.mkdir(parents=True, exist_ok=True)
        by_panel = defaultdict(list)
        for m in placeholders:
            fig = wanted[m.start()]
            if fig and fig["id"] in crops:
                by_panel[crops[fig["id"]][:2]].append(m)
        main = {min(group, key=lambda m: (bool(HELPER.search(m.group("alt"))), m.start())).start() for group in by_panel.values()}
        replacements, dropped, kept_text = [], 0, 0
        sheet = []
        for m in placeholders:
            fig = wanted[m.start()]
            crop = crops.get(fig["id"]) if fig else None
            if not crop:
                kept_text += 1
                continue
            page, index, box = crop
            if m.start() not in main:
                replacements.append((m.start(), m.end(), ""))
                dropped += 1
                continue
            name = f"page-{page:03d}-panel-{index + 1}.webp"
            key = f"notes/cse/s1/graphics/module-{number}/assets/{name}"
            image = Image.open(PIPELINE / run / "pages" / f"{page:03d}.jpg").convert("RGB").crop(box)
            sheet.append((name, image))
            if not args.dry_run:
                path = out_dir / name
                image.save(path, "WEBP", quality=88, method=6)
                data = path.read_bytes()
                dimensions[f"/{key}"] = {"width": image.width, "height": image.height}
                manifest_files.append({"key": key, "localPath": str(path.relative_to(ROOT)), "contentType": "image/webp",
                                       "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest()})
            alt = m.group("alt").strip().replace("[", "(").replace("]", ")")
            ending = "\n" if m.group(0).endswith("\n") else ""
            replacements.append((m.start(), m.end(), f"![{alt}]({MEDIA_BASE}/{key})\n{ending}"))

        for start, end, text in sorted(replacements, reverse=True):
            notes = notes[:start] + text + notes[end:]
        notes = re.sub(r"\n{3,}", "\n\n", notes)
        if not args.dry_run:
            notes_file.write_text(notes)

        # contact sheets for a visual check of every crop
        for old in review.glob(f"module-{number}-*.jpg"):
            old.unlink()
        for s in range(0, len(sheet), 20):
            tiles = sheet[s:s + 20]
            canvas = Image.new("RGB", (4 * 350, 5 * 270), "white")
            draw = ImageDraw.Draw(canvas)
            for i, (name, image) in enumerate(tiles):
                thumb = image.copy()
                thumb.thumbnail((340, 240))
                x, y = (i % 4) * 350 + 5, (i // 4) * 270 + 22
                canvas.paste(thumb, (x, y))
                draw.rectangle([x, y, x + thumb.width, y + thumb.height], outline=(220, 0, 0))
                draw.text((x, y - 16), name, fill=(0, 0, 0))
            canvas.save(review / f"module-{number}-{s // 20 + 1:02d}.jpg", quality=80)

        report[f"module-{number}"] = {"placeholders": len(placeholders), "images": len(sheet), "dropped_same_panel": dropped,
                                      "kept_as_text": kept_text, "pages_by": dict(methods),
                                      "unplaced_figures": unplaced, "question_text_figures": question_text}

    if not args.dry_run:
        dims = ROOT / "src" / "data" / "graphics-figure-dimensions.ts"
        dims.write_text("// Generated by scripts/crop-graphics-figures.py.\n"
                        "export const GRAPHICS_FIGURE_DIMENSIONS: Record<string, { width: number; height: number }> = "
                        + json.dumps(dimensions, indent=2) + ";\n")
        manifest_path = ROOT / "data" / "cloudflare-media-manifest.json"
        manifest = json.loads(manifest_path.read_text())
        keys = {f["key"] for f in manifest_files}
        manifest["files"] = [f for f in manifest["files"] if f["key"] not in keys] + manifest_files
        manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
