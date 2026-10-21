import json
from collections import Counter
from datetime import datetime
from pathlib import Path

root = Path(__file__).resolve().parents[2]
processing = root / "data/syllabus/processing"
inventory = json.loads((processing / "s1-subject-verification.json").read_text())
audit = json.loads((processing / "topic-report.json").read_text())
postfix_path = processing / "topic-report-postfix.json"
postfix_audit = json.loads(postfix_path.read_text()) if postfix_path.exists() else None
manifest_path = processing / "input/image-manifest.json"
image_status = Counter(item["status"].split(":", 1)[0] for item in json.loads(manifest_path.read_text()))

lines = [
    "# KTU 2024 first-year S1 syllabus and notes audit",
    "",
    f"Generated: {datetime.now().astimezone().isoformat(timespec='minutes')}",
    f"Gemini model: `{audit.get('model', 'unknown')}` via Google ADK and Vertex AI.",
    f"Course audits complete: {audit.get('completed', len(audit.get('results', [])))}/{audit.get('total', '?')} group/course entries.",
    "",
    "## Department and S1 subject verification",
    "",
    "The official first-year syllabi group departments as A (CSE), B (ECE/EEE), and C (Civil/Mechanical). Subject codes are preserved as printed. Courses labeled S1/S2 in the source remain ambiguous until the college timetable confirms their local term.",
    "",
]

for department in inventory["departments"]:
    catalog = set(department["currentlyListedInNotesCatalog"])
    official = department["officialSyllabusCodes"]
    lines += [
        f"### {department['name']} (`{department['id']}`, Group {department['group']})",
        "",
        f"- Official syllabus entries: {', '.join(f'`{code}`' for code in official)}.",
        f"- Currently listed S1 notes: {', '.join(f'`{code}`' for code in department['currentlyListedInNotesCatalog']) or 'none'}.",
        f"- Official entries not listed in the notes catalogue: {', '.join(f'`{code}`' for code in official if code not in catalog) or 'none'}.",
        f"- S1/S2 schedule clarification needed: {'yes' if department['termAssignmentNeedsLocalScheduleCheck'] else 'no'}.",
        "",
    ]

lines += [
    "The Civil/Mechanical Mathematics catalogue decision is intentionally deferred, as requested. `GYMAT101` remains in the official Group C S1 syllabus and is currently absent from those two notes catalogues.",
    "",
    "## Image input snapshot",
    "",
    f"The corpus includes {sum(image_status.values())} unique image references: {image_status.get('downloaded', 0)} downloaded, {image_status.get('copied', 0)} copied from local public files, {image_status.get('already-present', 0)} already present from an earlier snapshot pass, and {image_status.get('missing-reference', 0)} links returning 404. The 404 references are recorded in `data/syllabus/processing/input/image-manifest.json` and were not passed off as available evidence.",
    "",
    "This is the Gemini baseline snapshot captured before the targeted refinements below were applied. The coverage findings describe what the agent saw in the original notes; the remediation summary records the changes made afterward.",
    "",
    "## Targeted refinements applied after the baseline audit",
    "",
    "- **GBPHT121 (ECE/EEE):** added superconductivity, transition temperature, temperature-dependent critical field, Meissner effect, Type I/II comparison, and applications. Added the missing four-module syllabus reader and its catalogue link; also added the valence-band hole-density derivation and explicit photodetector applications.",
    "- **GMEST103 Graphics:** added CAD introduction, design role, advantages, command examples, and a dimensioned 2D drawing workflow for internal evaluation. Removed the excluded reverse-section exercises and corrected the exam reader to state eight 15-mark questions, two per module, with one answered from each module (60 marks total; no Part A/Part B split).",
    "- **UCEST105 Python:** moved selection, iteration, and collection topics in the syllabus reader from Module 2 to Module 3. Removed Python programming and collection pages plus duplicate Module 1 examples from the Module 2 notes; added syllabus-aligned pseudocode exercises, decomposition and multiple-return examples, and a full Module 3 recursion section with call-stack tracing and the listed sample problems. Added Module 4 password-guessing and greedy task-scheduling examples. Registered the shared question-paper page across the common Python branches.",
    "- **GXEST104 Electrical and Electronics (CSE/ECE/EEE):** created a separate Module 4 note set and catalogue links; moved communication and instrumentation out of Module 3. Added fiber-optic and GSM block diagrams, AM/FM waveforms, wired/wireless comparison, mobile-generation details, DMM/function-generator/CRO notes, Lissajous measurement, and IoT case studies. Expanded Module 3 with CB/CE/CC comparison, load-line biasing, a BJT switch circuit, RC-coupled amplifier response, and P-channel MOSFET operation; added explicit capacitor and inductor V-I relations.",
    "- **Deferred:** the Civil/Mechanical GYMAT101 catalogue decision remains for the final review, as requested. The raw audit below preserves the official Group C syllabus entry and baseline absence.",
    "",
    "## Module-by-module coverage (baseline)",
    "",
]

status_totals = Counter()
for result in audit.get("results", []):
    status_totals.update(item.get("status", "unknown") for item in result.get("coverage", []))
lines += [f"Coverage status totals: {', '.join(f'{status} {count}' for status, count in sorted(status_totals.items())) or 'no topic results returned yet'}.", ""]

if postfix_audit:
    refreshed_keys = {"A:GMEST103", "B:GBPHT121", "A:GXEST104", "B:GXEST104", "A:UCEST105", "B:UCEST105", "C:UCEST105"}
    refreshed = [item for item in postfix_audit.get("results", []) if f"{item['group']}:{item['code']}" in refreshed_keys]
    lines += [
        "## Gemini recheck after targeted refinements",
        "",
        f"The following entries were re-audited against the refreshed note corpus on {postfix_audit.get('generatedAt', 'an unknown date')}. This section is post-change; the full topic-by-topic section below remains the original 27-entry baseline.",
        "",
    ]
    for result in sorted(refreshed, key=lambda item: (item["group"], item["code"])):
        issues = [item for item in result.get("coverage", []) if item.get("status") in {"missing", "partial", "misfiled"}]
        boundaries = result.get("module_boundary_issues", [])
        lines += [
            f"### Group {result['group']} · {result.get('course_name', result['code'])} (`{result['code']}`)",
            "",
            f"- Confidence: {result.get('confidence', 'not returned')}; coverage findings still marked missing/partial/misfiled: {len(issues)}; module-boundary findings: {len(boundaries)}.",
        ]
        for item in issues:
            found = f" Found in: {item.get('found_in_module')}." if item.get("found_in_module") else ""
            action = f" Action: {item.get('needed_fix')}" if item.get("needed_fix") else ""
            lines.append(f"- **{item.get('status', 'unknown')}** — Module {item.get('official_module')}: {item.get('topic')}.{found}{action}")
        for item in boundaries:
            lines.append(f"- **Misfiled topic** — {item.get('topic')}: official Module {item.get('official_module')}, found in {item.get('found_in_module')}. {item.get('needed_fix', '')}")
        lines.append("")

for result in sorted(audit.get("results", []), key=lambda item: (item["group"], item["code"])):
    branches = ", ".join(result.get("departments", []))
    lines += [
        f"### Group {result['group']} · {result.get('course_name', result['code'])} (`{result['code']}`) — {branches}",
        "",
        f"- Official term label: {result.get('official_term_label', 'not returned')}.",
        f"- Notes available: {'no' if result.get('notes_absent') else 'yes'}.",
        f"- Notes sources: {', '.join(f'`{source}`' for source in result.get('note_sources', [])) or 'none'}.",
        f"- Confidence: {result.get('confidence', 'not returned')}.",
        "",
    ]
    for module in result.get("official_modules", []):
        module_id = module.get("module", "?")
        lines += [f"#### Official Module {module_id}", ""]
        for topic in module.get("topics", []):
            lines.append(f"- {topic}")
        lines.append("")
        coverage = [item for item in result.get("coverage", []) if str(item.get("official_module")) == str(module_id)]
        if coverage:
            lines += ["Coverage findings:", ""]
            for item in coverage:
                evidence = f" Evidence: {item['evidence']}" if item.get("evidence") else ""
                found = f" Found in: {item['found_in_module']}." if item.get("found_in_module") else ""
                fix = f" Action: {item['needed_fix']}" if item.get("needed_fix") else ""
                lines.append(f"- **{item.get('status', 'unknown')}** — {item.get('topic', '')}.{found}{evidence}{fix}")
            lines.append("")
    if result.get("notes_absent"):
        lines += [
            "No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.",
            "",
        ]
    if result.get("module_boundary_issues"):
        lines += ["Module boundary and misplaced-topic findings:", ""]
        for item in result["module_boundary_issues"]:
            lines.append(f"- {item.get('topic')}: official Module {item.get('official_module')}, found in Module {item.get('found_in_module')}. {item.get('needed_fix', '')}")
        lines.append("")
    if result.get("reader_issues"):
        lines += ["Syllabus reader findings:", ""] + [f"- {item}" for item in result["reader_issues"]] + [""]
    if result.get("uncertainties"):
        lines += ["Uncertainties:", ""] + [f"- {item}" for item in result["uncertainties"]] + [""]

lines += [
    "## Source files",
    "",
    "- `data/syllabus/ktu-btech-2024-first-year-group-a.pdf` (Group A, CSE)",
    "- `data/syllabus/ktu-btech-2024-first-year-group-b.pdf` (Group B, ECE/EEE)",
    "- `data/syllabus/ktu-btech-2024-first-year-s1-s2.pdf` (Group C, Civil/Mechanical)",
    "- `data/syllabus/ktu-btech-curriculum-2024.pdf` (2024 curriculum)",
    "- `data/syllabus/processing/s1-subject-verification.json` (script-generated department map)",
    "- `data/syllabus/processing/topic-report.json` (raw per-course Gemini audit output)",
    "",
]

out = root / "docs/ktu-2024-syllabus-coverage-audit.md"
out.write_text("\n".join(lines))
print(f"Wrote {out}")
