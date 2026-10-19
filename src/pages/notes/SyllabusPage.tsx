import { useParams } from "react-router-dom";
import Reader from "@/features/notes/reader/Reader";
import { cseSyllabusModule } from "@/features/syllabi/cse";
import { NOTES_CATALOGUE } from "@/data/notes";
import NotFoundPage from "@/pages/NotFoundPage";

export default function SyllabusPage() {
  const { branch: branchId, semester: semesterId, subject: subjectId } = useParams();
  const branch = NOTES_CATALOGUE.find((item) => item.id === branchId);
  const semester = branch?.semesters.find((item) => item.id === semesterId);
  const subject = semester?.subjects.find((item) => item.href === `/notes/${branchId}/${semesterId}/${subjectId}`);

  if (!branch || !semester || !subject?.syllabusHref) return <NotFoundPage />;
  return <Reader notes={cseSyllabusModule(subject, branch, semester)} />;
}
