# KTU 2024 Syllabus and Notes Coverage Audit

**Scope:** Semester 1 subjects currently represented in the notes catalog for CSE (Group A), ECE/EEE (Group B), and Civil/Mechanical (Group C).

**Review method:** Gemini (`gemini-4-argon`) compared the downloaded KTU 2024 first-year syllabus sections, the mapped note outlines, the branch catalog, and the site's syllabus-reader definitions. I also downloaded the 2024 curriculum and used its branch tables to check Group C course assignments. I checked the reported mismatches against the source PDFs and repository content before including them below. This is an audit only; note content was not changed.

## Summary

| Area | Finding | Priority |
| --- | --- | --- |
| Civil/Mechanical catalog | Several Group A/B courses are listed in the Group C catalog; the required Group C engineering courses are missing. Python is listed with no module links. | Critical |
| Civil/Mechanical Mathematics | The requested catalog removal conflicts with the Group C syllabus, which includes GYMAT101. The notes and syllabus data still exist but the branch catalog hides them. | High |
| Physics for Electrical Science | ECE/EEE notes omit the entire superconductivity portion of Module 3, and the syllabus reader has no GBPHT121 entry. | High |
| Electrical and Electronics Engineering | Notes provide only three modules for a four-module course; Module 4 coverage is incomplete. | High |
| Algorithmic Thinking with Python | Module 3 notes omit the required recursion unit; the app syllabus reader places Module 3 topics under Module 2. | High |
| Engineering Graphics | Notes omit CAD theory and include excluded reverse-section exercises; the reader has an incorrect ESE pattern. | Medium |
| Chemistry | Group B notes omit the environmental waste/climate topics; the Group C reader is absent and a couple of Group C topics need adding. | Medium |

The Group A mathematics and physics notes and the Group B mathematics notes align well. The remaining findings are detailed below.

## Confirmed findings

### Group A — CSE

1. **GXEST104 notes are incomplete.** The official course has four modules. The CSE catalog links only Modules 1–3, and there is no separate Module 4 note. The end of `electrical-module-3` starts some modern-electronics material, but it does not cover the full communication and instrumentation syllabus. The syllabus reader does define four modules, so the problem is in the notes and catalog links, not that reader. Source: Group A PDF pp. 27–29; `src/data/notes.ts` CSE GXEST104 entry; `src/features/notes/electrical-module-3/notes.md`.

2. **UCEST105 Module 3 is missing required content.** The official Module 3 includes decomposition demonstrated with merge sort and top-three selection, functions with multiple return values, and recursion including the call stack, avoiding circularity, and worked recursive problems. The current Module 3 notes cover selection, iteration, collections, and functions, but have no recursion unit. Merge sort appears in Module 4 instead of the Module 3 decomposition sequence. The syllabus reader also puts selection, iteration, and collections under Module 2, though the official syllabus assigns them to Module 3. Source: Group A PDF pp. 34–35; `src/features/notes/python-module-3/notes.md`; `src/features/notes/python-module-4/notes.md`; `src/features/syllabi/cse.ts:152–176`.

3. **GMEST103 notes omit CAD theory and include excluded exercises.** Module 4 notes cover isometric projection but not the CAD introduction, role, or advantages listed in the official syllabus. Module 3 includes reverse-section problems that start from a given true shape, while the syllabus explicitly excludes those problems. The syllabus reader includes the CAD topics, so the CAD gap is in the notes. Its ESE data is also wrong: it describes a Part A/Part B pattern, while the official graphics exam has eight questions worth 15 marks each, one choice from each module. Source: Group A PDF pp. 24–25; `src/features/notes/graphics-m3/notes.md`, `src/features/notes/graphics-m4/notes.md`, and `src/features/syllabi/generated/GMEST103.json:102–105`.

4. **GXCYT122 syllabus reader has small omissions and a generic title.** The reader does not call out the number of vibrational modes or the sewage-treatment flow diagram. The catalog calls the course “Engineering Chemistry”; the Group A syllabus title is “Chemistry for Information Science and Electrical Science.” The module outline otherwise tracks the official syllabus. Source: Group A PDF pp. 15–18; `src/features/syllabi/cse.ts:100–124`; `src/data/notes.ts` CSE chemistry entry.

### Group B — ECE and EEE

1. **GBPHT121 Module 3 notes omit superconductivity.** The official Module 3 contains superconductivity and dielectrics. `physics-ece-module-3` covers dielectrics only; the superconductivity topics have no matching note section. Also, the Physics catalog entry has no `syllabusHref`, and `GBPHT121` is absent from the syllabus-reader course map, so the in-app syllabus cannot be opened for this course. Source: Group B PDF pp. 8–10; `src/features/notes/physics-ece-module-3/notes.md`; `src/data/notes.ts:121–131`; `src/features/syllabi/cse.ts`.

2. **GXCYT122 Module 4 notes stop before required waste and climate topics.** The official syllabus includes solid-waste disposal, greenhouse gases, ozone depletion, and sustainable-development topics. The current Group B Module 4 notes end after sewage treatment. The syllabus reader includes the omitted topics. Source: Group B PDF pp. 17–18; `src/features/notes/chemistry-ece-module-4/notes.md`; `src/features/syllabi/cse.ts:118–121`.

3. **GMEST103 has the same note and ESE issues as Group A.** The notes omit CAD theory in Module 4 and include excluded reverse-section exercises in Module 3. The generated syllabus reader has an incorrect ESE pattern. See Group A finding 3; these note files are shared.

4. **GXEST104 notes are materially incomplete.** The official course has four modules, but the catalog links only three and the repository has no separate Module 4 notes. Existing notes omit required transistor configuration comparisons, biasing/load line, transistor-switch and RC-coupled-amplifier material, along with much of the communication and instrumentation module. The syllabus reader contains all four modules. Source: Group B PDF pp. 27–29; `src/features/notes/electrical-module-3/notes.md`; `src/data/notes.ts:108–120`; `src/features/syllabi/cse.ts:126–150`.

5. **UCEST105 has the same Module 3 coverage and syllabus-reader boundary problems as Group A.** The notes are shared across branches. ECE/EEE catalog descriptions for Python Modules 2–4 are also generic descriptions that do not match the KTU module topics. Source: Group B PDF pp. 34–36; `src/data/notes.ts:132–145`.

### Group C — Civil and Mechanical

1. **The branch catalog lists the wrong S1 engineering courses.** Group C S1 includes GCEST103 Engineering Mechanics and GCEST104 Introduction to Mechanical Engineering and Civil Engineering. The shared catalog instead lists GMEST103 Engineering Graphics and GXEST104 Introduction to Electrical and Electronics Engineering, both with empty module lists. Group C Engineering Graphics (GCEST203) and Basic Electrical and Electronics Engineering (GZEST204) are S2 courses. Source: Group C PDF pp. 26, 30–32, 95, and 99; `src/data/notes.ts:94–120`.

2. **Group C physics has no Civil/Mechanical catalog entry or notes mapping.** The official Group C course set includes GZPHT121 Physics for Physical Science and Life Science. Its syllabus is marked S1/S2, so the official documents do not identify which term each individual Civil/Mechanical program uses. If either branch takes it in S1, it needs a catalog entry, notes mapping, and reader definition. Source: Group C PDF pp. 8–10 and 2024 curriculum p. 3; `src/data/notes.ts:121–131`; `src/features/syllabi/cse.ts`.

3. **The Mathematics removal hides a required Group C course.** The official syllabus lists GYMAT101 for Groups B and C, with four modules. The notes and reader data exist under `electrical-maths-module-1..4` and `GYMAT101`, but the branch catalog now includes Mathematics only for ECE/EEE. This reflects the requested removal, but it means Civil/Mechanical no longer match the KTU 2024 syllabus. Source: Group C PDF pp. 3–6; `src/data/notes.ts:68–81`; `src/features/syllabi/cse.ts:16–46`.

4. **GCCYT122 has notes but no syllabus reader.** The Group C Chemistry course is “Chemistry for Physical Science.” The catalog disables its syllabus link, and the reader map defines GXCYT122 but not GCCYT122. In the notes, the solid-lubricants topic from Module 1 and chemical-composition analysis of exhaust gases from Module 3 are not present. Source: Group C PDF pp. 17–19; `src/data/notes.ts:82–93`; `src/features/syllabi/cse.ts:100–125`; `src/features/notes/chemistry-civil-mech-module-1/notes.md`; `src/features/notes/chemistry-civil-mech-module-3/notes.md`.

5. **Civil/Mechanical Python modules are hidden.** UCEST105 is common to all branches, but the catalog sets its `modules` to an empty array for Civil and Mechanical. The shared Python notes exist, but students in those branches cannot reach them through the catalog. Source: Group C PDF pp. 37–39; `src/data/notes.ts:132–145`.

## Items needing a branch-specific timetable check

The 2024 curriculum places Physics and Chemistry in a shared `S1/S2` slot for Groups A, B, and C. The site currently displays both CSE subjects and both ECE/EEE subject variants under Semester 1; it displays only Group C Chemistry for Civil/Mechanical. The curriculum table alone does not say which of the pair each specific program takes in S1 versus S2. Confirm the term assignment against the college timetable before changing these catalog placements.

## Gemini suggestions not promoted to confirmed findings

I discarded several heading-based suggestions after checking the full notes. In particular, the Group C chemistry notes do include the Nernst equation, Beer–Lambert law, conjugation, and DTA of calcium oxalate. I also rejected the Gemini claim that Group B Mathematics should use code `GBMAT101`: the downloaded KTU syllabus explicitly gives `GYMAT101` for Groups B and C.

## Downloaded source files

The PDFs are copies of KTU's B.Tech 2024 first-year group syllabi and curriculum, downloaded from institutional mirrors. Their cover pages identify APJ Abdul Kalam Technological University. Text extractions are kept beside each PDF for search and page-level checking.

- Group A: `data/syllabus/ktu-btech-2024-first-year-group-a.pdf` and `.txt`
- Group B: `data/syllabus/ktu-btech-2024-first-year-group-b.pdf` and `.txt`
- Group C: `data/syllabus/ktu-btech-2024-first-year-s1-s2.pdf` and `.txt`
- 2024 branch curriculum: `data/syllabus/ktu-btech-curriculum-2024.pdf` and `.txt`

The university's [2024 B.Tech curriculum page](https://ktu.edu.in/academics/branchcurriculum/hardcoded-btech) is the official curriculum reference. The copies used for this audit came from [Marian College's Group A PDF](https://www.marian.ac.in/public/images/uploads/B.%20Tech_2024_1st%20Year%20Syllabus_Group-A%20%281%29.pdf), [Vidya Academy's Group B PDF](https://vidyaacademy.ac.in/admin/upload/pdf/3337914881STYEARSYLLABUSKTUGROUPB.pdf), [TKM Institute's Group C PDF](https://tkmit.ac.in/uploads/2025/02/2024-SCHEME-KTU-FIRST-YEAR-SYLLABUS.pdf), and [NSS College's 2024 curriculum PDF](https://www.nssce.ac.in/pdf/KTU_B.%20Tech_%20Curriculum_%202024.pdf).

Gemini's machine-readable outputs are preserved in `data/syllabus/gemini-audit-all-groups.json` and the per-group JSON files. The readable findings above reflect the manual source checks; unverified suggestions in the raw Gemini output should not be treated as confirmed.
