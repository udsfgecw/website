import { MATHS_MODULE_1_PATH, MATHS_PATH } from "@/features/notes/maths-module-1/path";
import { MATHS_MODULE_2_PATH } from "@/features/notes/maths-module-2/path";
import { MATHS_MODULE_3_PATH } from "@/features/notes/maths-module-3/path";
import { MATHS_MODULE_4_PATH } from "@/features/notes/maths-module-4/path";
import { PHYSICS_MODULE_1_PATH, PHYSICS_PATH } from "@/features/notes/physics-module-1/path";
import { PHYSICS_MODULE_2_PATH } from "@/features/notes/physics-module-2/path";
import { PHYSICS_MODULE_3_PATH } from "@/features/notes/physics-module-3/path";
import { PHYSICS_MODULE_4_PATH } from "@/features/notes/physics-module-4/path";

export interface ModuleNotes {
  /** e.g. "Module 1" */
  name: string;
  /** what the module covers */
  detail: string;
  href: string;
}

export interface SubjectNotes {
  name: string;
  course: string;
  code: string;
  /** page listing the subject's modules */
  href: string;
  modules: ModuleNotes[];
}

export interface Semester {
  /** used in the semester's URL, e.g. /notes/cse/s1 */
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

/** URL of the page listing a department's semesters */
export const branchPath = (branch: Branch) => `/notes/${branch.id}`;

/** URL of the page listing a semester's subjects; each subject's own page is its `href` */
export const semesterPath = (branch: Branch, semester: Semester) => `${branchPath(branch)}/${semester.id}`;

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
          href: MATHS_PATH,
          modules: [
            { name: "Module 1", detail: "Limits to concavity", href: MATHS_MODULE_1_PATH },
            { name: "Module 2", detail: "Partial derivatives to level curves", href: MATHS_MODULE_2_PATH },
            { name: "Module 3", detail: "Three-variable chain rule to directional derivatives", href: MATHS_MODULE_3_PATH },
            { name: "Module 4", detail: "Lagrange multipliers to linear programming", href: MATHS_MODULE_4_PATH },
          ],
        },
        {
          name: "Physics",
          course: "Physics for Information Science",
          code: "GAPHT121",
          href: PHYSICS_PATH,
          modules: [
            { name: "Module 1", detail: "Electrical conductivity to superconductivity", href: PHYSICS_MODULE_1_PATH },
            { name: "Module 2", detail: "Matter waves to quantum tunnelling", href: PHYSICS_MODULE_2_PATH },
            { name: "Module 3", detail: "Intrinsic semiconductors to the p-n junction", href: PHYSICS_MODULE_3_PATH },
            { name: "Module 4", detail: "Rectifiers to solar cells and lasers", href: PHYSICS_MODULE_4_PATH },
          ],
        },
      ]),
      ...[2, 3, 4, 5, 6, 7, 8].map((n) => semester(n)),
    ],
  },
];
