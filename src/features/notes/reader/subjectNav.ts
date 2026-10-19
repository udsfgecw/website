import { NOTES_CATALOGUE, type Branch, type ModuleNotes, type Semester, type SubjectNotes } from "@/data/notes";
import type { NotesModule } from "../types";

export interface CourseNavInfo {
  subject: SubjectNotes;
  branch?: Branch;
  semester?: Semester;
  currentModuleIndex: number;
  prevModule: ModuleNotes | null;
  nextModule: ModuleNotes | null;
  isSyllabus: boolean;
}

export function findSubjectNav(notes: NotesModule): CourseNavInfo | null {
  let matchedSubject: SubjectNotes | null = null;
  let matchedBranch: Branch | undefined;
  let matchedSemester: Semester | undefined;

  for (const branch of NOTES_CATALOGUE) {
    for (const semester of branch.semesters) {
      for (const subject of semester.subjects) {
        if (
          subject.modules.some((m) => m.href === notes.basePath) ||
          subject.syllabusHref === notes.basePath
        ) {
          matchedSubject = subject;
          matchedBranch = branch;
          matchedSemester = semester;
          break;
        }
      }
      if (matchedSubject) break;
    }
    if (matchedSubject) break;
  }

  if (!matchedSubject) {
    const subjectTrail = [...notes.trail].reverse().find((step) => step.href?.startsWith("/notes/"));
    if (subjectTrail?.href) {
      for (const branch of NOTES_CATALOGUE) {
        for (const semester of branch.semesters) {
          for (const subject of semester.subjects) {
            if (subject.href === subjectTrail.href) {
              matchedSubject = subject;
              matchedBranch = branch;
              matchedSemester = semester;
              break;
            }
          }
          if (matchedSubject) break;
        }
        if (matchedSubject) break;
      }
    }
  }

  if (!matchedSubject) return null;

  const isSyllabus = notes.basePath === matchedSubject.syllabusHref;
  const currentModuleIndex = matchedSubject.modules.findIndex((m) => m.href === notes.basePath);

  let prevModule: ModuleNotes | null = null;
  let nextModule: ModuleNotes | null = null;

  if (isSyllabus) {
    nextModule = matchedSubject.modules[0] ?? null;
  } else if (currentModuleIndex >= 0) {
    prevModule = currentModuleIndex > 0 ? matchedSubject.modules[currentModuleIndex - 1] : null;
    nextModule =
      currentModuleIndex < matchedSubject.modules.length - 1
        ? matchedSubject.modules[currentModuleIndex + 1]
        : null;
  }

  return {
    subject: matchedSubject,
    branch: matchedBranch,
    semester: matchedSemester,
    currentModuleIndex,
    prevModule,
    nextModule,
    isSyllabus,
  };
}
