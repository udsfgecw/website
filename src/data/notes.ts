import { MATHS_MODULE_1_PATH, MATHS_PATH } from "@/features/notes/maths-module-1/path";
import { MATHS_MODULE_2_PATH } from "@/features/notes/maths-module-2/path";
import { MATHS_MODULE_3_PATH } from "@/features/notes/maths-module-3/path";
import { MATHS_MODULE_4_PATH } from "@/features/notes/maths-module-4/path";
import { PHYSICS_MODULE_1_PATH, PHYSICS_PATH } from "@/features/notes/physics-module-1/path";
import { PHYSICS_MODULE_2_PATH } from "@/features/notes/physics-module-2/path";
import { PHYSICS_MODULE_3_PATH } from "@/features/notes/physics-module-3/path";
import { PHYSICS_MODULE_4_PATH } from "@/features/notes/physics-module-4/path";

import { CHEMISTRY_MODULE_1_PATH } from "@/features/notes/chemistry-module-1/path";
import { CHEMISTRY_MODULE_2_PATH } from "@/features/notes/chemistry-module-2/path";
import { CHEMISTRY_MODULE_3_PATH } from "@/features/notes/chemistry-module-3/path";
import { CHEMISTRY_MODULE_4_PATH } from "@/features/notes/chemistry-module-4/path";
import { GRAPHICS_M1_PATH } from "@/features/notes/graphics-m1/path";
import { GRAPHICS_M2_PATH } from "@/features/notes/graphics-m2/path";
import { GRAPHICS_M3_PATH } from "@/features/notes/graphics-m3/path";
import { GRAPHICS_M4_PATH } from "@/features/notes/graphics-m4/path";
import { ELECTRICAL_MODULE_1_PATH } from "@/features/notes/electrical-module-1/path";
import { ELECTRICAL_MODULE_4_PATH } from "@/features/notes/electrical-module-4/path";
import { ELECTRICAL_MODULE_2_PATH } from "@/features/notes/electrical-module-2/path";
import { ELECTRICAL_MODULE_3_PATH } from "@/features/notes/electrical-module-3/path";
import { PYTHON_MODULE_1_PATH, PYTHON_MODULE_1_SUMMARY } from "@/features/notes/python-module-1/path";
import { PYTHON_MODULE_2_PATH, PYTHON_MODULE_2_SUMMARY } from "@/features/notes/python-module-2/path";
import { PYTHON_MODULE_3_PATH, PYTHON_MODULE_3_SUMMARY } from "@/features/notes/python-module-3/path";
import { PYTHON_MODULE_4_PATH, PYTHON_MODULE_4_SUMMARY } from "@/features/notes/python-module-4/path";
import {
  GAMAT101_QP_PATH,
  GAPHT121_QP_PATH,
  GMEST103_QP_PATH,
  GXEST104_QP_PATH,
  UCEST105_QP_PATH,
} from "@/features/notes/question-papers/path";

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
  /** In-page syllabus reader route, when a syllabus is available. */
  syllabusHref?: string;
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

const sharedS1Subjects = (branchId: string): SubjectNotes[] => [
  ...(branchId === "ece" || branchId === "eee" ? [{
    name: "Mathematics",
    course: "Mathematics for Electrical Science and Physical Science 1",
    code: "GYMAT101",
    syllabusHref: `/notes/${branchId}/s1/maths/syllabus`,
    href: `/notes/${branchId}/s1/maths`,
    modules: branchId !== "ece" && branchId !== "eee" ? [] : [
      { name: "Module 1", detail: "Linear systems, matrix rank, eigenvalues and diagonalization", href: `/notes/${branchId}/s1/maths/module-1` },
      { name: "Module 2", detail: "Second-order linear ODEs: homogeneous, undetermined coefficients, variation of parameters", href: `/notes/${branchId}/s1/maths/module-2` },
      { name: "Module 3", detail: "Laplace transforms, inverse transforms and solving initial value problems", href: `/notes/${branchId}/s1/maths/module-3` },
      { name: "Module 4", detail: "Taylor and Maclaurin series, Fourier series and half-range expansions", href: `/notes/${branchId}/s1/maths/module-4` },
    ],
  }] : []),
  {
    name: "Chemistry",
    course: "Engineering Chemistry",
    code: branchId === "civil" || branchId === "me" ? "GCCYT122" : "GXCYT122",
    syllabusHref: branchId === "civil" || branchId === "me" ? undefined : `/notes/${branchId}/s1/chemistry/syllabus`,
    href: `/notes/${branchId}/s1/chemistry`,
    modules: [1, 2, 3, 4].map((n) => ({
      name: `Module ${n}`,
      detail: `Engineering Chemistry · Module ${n}`,
      href: `/notes/${branchId}/s1/chemistry/module-${n}`,
    })),
  },
  ...(branchId === "civil" || branchId === "me" ? [] : [{
    name: "Engineering Graphics",
    course: "Engineering Graphics and Computer Aided Drawing",
    code: "GMEST103",
    syllabusHref: `/notes/${branchId}/s1/graphics/syllabus`,
    href: `/notes/${branchId}/s1/graphics`,
    modules: branchId === "ece" || branchId === "eee" ? [
      { name: "Module 1", detail: "Introduction, projection of points and lines", href: `/notes/${branchId}/s1/graphics/m1` },
      { name: "Module 2", detail: "Projection of solids", href: `/notes/${branchId}/s1/graphics/m2` },
      { name: "Module 3", detail: "Sections of solids and development of surfaces", href: `/notes/${branchId}/s1/graphics/m3` },
      { name: "Module 4", detail: "Isometric projection", href: `/notes/${branchId}/s1/graphics/m4` },
      { name: "Question Papers", detail: "2024 and 2025 regular end-semester papers", href: `/notes/${branchId}/s1/graphics/question-papers` },
    ] : [],
  }]),
  ...(branchId === "civil" || branchId === "me" ? [] : [{
    name: "Electrical and Electronics Engineering",
    course: "Introduction to Electrical and Electronics Engineering",
    code: "GXEST104",
    syllabusHref: `/notes/${branchId}/s1/electrical/syllabus`,
    href: `/notes/${branchId}/s1/electrical`,
    modules: branchId === "ece" || branchId === "eee" ? [
      { name: "Module 1", detail: "Introduction to Electrical and Electronics Engineering", href: `/notes/${branchId}/s1/electrical/module-1` },
      { name: "Module 2", detail: "Electromagnetic induction to three-phase AC systems", href: `/notes/${branchId}/s1/electrical/module-2` },
      { name: "Module 3", detail: "Electronic devices", href: `/notes/${branchId}/s1/electrical/module-3` },
      { name: "Module 4", detail: "Communication, instrumentation and modern electronics", href: `/notes/${branchId}/s1/electrical/module-4` },
      { name: "Question Papers", detail: "2024 and 2025 regular end-semester papers", href: `/notes/${branchId}/s1/electrical/question-papers` },
    ] : [],
  }]),
  ...(branchId === "ece" || branchId === "eee" ? [{
    name: "Physics",
    course: "Engineering Physics",
    code: "GBPHT121",
    syllabusHref: `/notes/${branchId}/s1/physics/syllabus`,
    href: `/notes/${branchId}/s1/physics`,
    modules: [1, 2, 3, 4].map((n) => ({
      name: `Module ${n}`,
      detail: `Engineering Physics · Module ${n}`,
      href: `/notes/${branchId}/s1/physics/module-${n}`,
    })),
  }] : []),
  {
    name: "Algorithmic Thinking with Python",
    course: "Algorithmic Thinking with Python",
    code: "UCEST105",
    syllabusHref: `/notes/${branchId}/s1/python/syllabus`,
    href: `/notes/${branchId}/s1/python`,
    modules: [
      { name: "Module 1", detail: "Introduction to algorithms and Python", href: `/notes/${branchId}/s1/python/module-1` },
      { name: "Module 2", detail: "Data structures and modular programming", href: `/notes/${branchId}/s1/python/module-2` },
      { name: "Module 3", detail: "Object-oriented and file-based programming", href: `/notes/${branchId}/s1/python/module-3` },
      { name: "Module 4", detail: "Algorithms and data analysis", href: `/notes/${branchId}/s1/python/module-4` },
      { name: "Question Papers", detail: "2024 regular end-semester paper", href: `/notes/${branchId}/s1/python/question-papers` },
    ],
  },
];

const sharedBranch = (
  id: "ece" | "eee" | "me" | "civil",
  name: string,
  short: "ECE" | "EEE" | "ME" | "CIVIL",
): Branch => ({
  id,
  name,
  short,
  semesters: [semester(1, sharedS1Subjects(id)), ...[2, 3, 4, 5, 6, 7, 8].map((n) => semester(n))],
});

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
          syllabusHref: "/notes/cse/s1/maths/syllabus",
          href: MATHS_PATH,
          modules: [
            { name: "Module 1", detail: "Limits to concavity", href: MATHS_MODULE_1_PATH },
            { name: "Module 2", detail: "Partial derivatives to level curves", href: MATHS_MODULE_2_PATH },
            { name: "Module 3", detail: "Three-variable chain rule to directional derivatives", href: MATHS_MODULE_3_PATH },
            { name: "Module 4", detail: "Lagrange multipliers to linear programming", href: MATHS_MODULE_4_PATH },
            { name: "Question Papers", detail: "2024 and 2025 regular end-semester papers", href: GAMAT101_QP_PATH },
          ],
        },
        {
          name: "Chemistry", course: "Engineering Chemistry", code: "GXCYT122", syllabusHref: "/notes/cse/s1/chemistry/syllabus", href: "/notes/cse/s1/chemistry",
          modules: [1, 2, 3, 4].map((n) => ({ name: `Module ${n}`, detail: `Engineering Chemistry · Module ${n}`, href: [CHEMISTRY_MODULE_1_PATH, CHEMISTRY_MODULE_2_PATH, CHEMISTRY_MODULE_3_PATH, CHEMISTRY_MODULE_4_PATH][n - 1] })),
        },
        {
          name: "Engineering Graphics", course: "Engineering Graphics and Computer Aided Drawing", code: "GMEST103", syllabusHref: "/notes/cse/s1/graphics/syllabus", href: "/notes/cse/s1/graphics",
          modules: [
            { name: "Module 1", detail: "Introduction, projection of points and lines", href: GRAPHICS_M1_PATH },
            { name: "Module 2", detail: "Projection of solids", href: GRAPHICS_M2_PATH },
            { name: "Module 3", detail: "Sections of solids and development of surfaces", href: GRAPHICS_M3_PATH },
            { name: "Module 4", detail: "Isometric projection", href: GRAPHICS_M4_PATH },
            { name: "Question Papers", detail: "2024 and 2025 regular end-semester papers", href: GMEST103_QP_PATH },
          ],
        },
        {
          name: "Electrical and Electronics Engineering", course: "Introduction to Electrical and Electronics Engineering", code: "GXEST104", syllabusHref: "/notes/cse/s1/electrical/syllabus", href: "/notes/cse/s1/electrical",
          modules: [
            { name: "Module 1", detail: "Introduction to Electrical and Electronics Engineering", href: ELECTRICAL_MODULE_1_PATH },
            { name: "Module 2", detail: "Electromagnetic induction to three-phase AC systems", href: ELECTRICAL_MODULE_2_PATH },
            { name: "Module 3", detail: "Electronic devices", href: ELECTRICAL_MODULE_3_PATH },
            { name: "Module 4", detail: "Communication, instrumentation and modern electronics", href: ELECTRICAL_MODULE_4_PATH },
            { name: "Question Papers", detail: "2024 and 2025 regular end-semester papers", href: GXEST104_QP_PATH },
          ],
        },
        {
          name: "Algorithmic Thinking with Python", course: "Algorithmic Thinking with Python", code: "UCEST105", syllabusHref: "/notes/cse/s1/python/syllabus", href: "/notes/cse/s1/python",
          modules: [
            { href: PYTHON_MODULE_1_PATH, detail: PYTHON_MODULE_1_SUMMARY },
            { href: PYTHON_MODULE_2_PATH, detail: PYTHON_MODULE_2_SUMMARY },
            { href: PYTHON_MODULE_3_PATH, detail: PYTHON_MODULE_3_SUMMARY },
            { href: PYTHON_MODULE_4_PATH, detail: PYTHON_MODULE_4_SUMMARY },
          ].map((module, i) => ({ name: `Module ${i + 1}`, ...module })).concat([
            { name: "Question Papers", detail: "2024 regular end-semester paper", href: UCEST105_QP_PATH },
          ]),
        },
        {
          name: "Physics",
          course: "Physics for Information Science",
          code: "GAPHT121",
          syllabusHref: "/notes/cse/s1/physics/syllabus",
          href: PHYSICS_PATH,
          modules: [
            { name: "Module 1", detail: "Electrical conductivity to superconductivity", href: PHYSICS_MODULE_1_PATH },
            { name: "Module 2", detail: "Matter waves to quantum tunnelling", href: PHYSICS_MODULE_2_PATH },
            { name: "Module 3", detail: "Intrinsic semiconductors to the p-n junction", href: PHYSICS_MODULE_3_PATH },
            { name: "Module 4", detail: "Rectifiers to solar cells and lasers", href: PHYSICS_MODULE_4_PATH },
            { name: "Question Papers", detail: "2024 and 2025 regular end-semester papers", href: GAPHT121_QP_PATH },
          ],
        },
      ]),
      ...[2, 3, 4, 5, 6, 7, 8].map((n) => semester(n)),
    ],
  },
  sharedBranch("ece", "Electronics and Communication Engineering", "ECE"),
  sharedBranch("me", "Mechanical Engineering", "ME"),
  sharedBranch("civil", "Civil Engineering", "CIVIL"),
  sharedBranch("eee", "Electrical and Electronics Engineering", "EEE"),
];
