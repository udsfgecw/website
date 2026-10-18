import { MATHS_MODULE_1_PATH } from "@/features/notes/maths-module-1/path";

export interface SubjectNotes {
  name: string;
  course: string;
  code: string;
  detail: string;
  href: string;
}

export interface Semester {
  /** used in anchors such as /notes#cse-s1 */
  id: string;
  name: string;
  subjects: SubjectNotes[];
}

export interface Branch {
  id: string;
  name: string;
  short: string;
  semesters: Semester[];
}

const semester = (n: number, subjects: SubjectNotes[] = []): Semester => ({ id: `s${n}`, name: `Semester ${n}`, subjects });

/* What the notes shelf lists. Add a subject to a semester here once its notes are online. */
export const NOTES_CATALOGUE: readonly Branch[] = [
  {
    id: "cse",
    name: "Computer Science and Engineering",
    short: "CSE",
    semesters: [
      semester(1, [
        {
          name: "Mathematics",
          course: "Mathematics for Information Science 1",
          code: "GAMAT101",
          detail: "Module 1 · Limits to concavity",
          href: MATHS_MODULE_1_PATH,
        },
      ]),
      ...[2, 3, 4, 5, 6, 7, 8].map((n) => semester(n)),
    ],
  },
];
