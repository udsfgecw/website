import { ArrowRight, FileText } from "lucide-react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import { branchPath, NOTES_CATALOGUE, semesterPath } from "@/data/notes";
import { notFoundMeta, usePageMeta } from "@/lib/meta";
import { breadcrumbLd, collectionPageLd } from "@/lib/seo";
import NotFoundPage from "@/pages/NotFoundPage";
import Breadcrumb from "./Breadcrumb";

/* The modules of one subject, reached by clicking the subject on its semester page. */
export default function SubjectPage() {
  const { branch: branchId, semester: semesterId, subject: subjectId } = useParams();
  const { hash } = useLocation();
  const branch = NOTES_CATALOGUE.find((b) => b.id === branchId);
  const semester = branch?.semesters.find((s) => s.id === semesterId);
  const subject = semester?.subjects.find((s) => s.href === `/notes/${branchId}/${semesterId}/${subjectId}`);

  usePageMeta(
    subject
      ? {
          title: pageTitle(`${subject.name} notes · ${branch!.short} ${semester!.name}`),
          description: `${subject.course} (${subject.code}): module-wise study notes for ${branch!.short} ${semester!.name}, shared by UDSF for students at Government Engineering College Wayanad.`,
          jsonLd: [
            collectionPageLd(`${subject.name} notes`, `${subject.course} (${subject.code}) study notes for ${branch!.short} ${semester!.name}.`, subject.href),
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Notes", path: "/notes" },
              { name: branch!.short, path: branchPath(branch!) },
              { name: semester!.name, path: semesterPath(branch!, semester!) },
              { name: subject.name, path: subject.href },
            ]),
          ],
        }
      : notFoundMeta(),
  );

  if (!branch || !semester || !subject) return <NotFoundPage />;

  // The reader used to live at this URL; its #page-N links now belong to the first module.
  if (hash.startsWith("#page-") && subject.modules.length > 0) return <Navigate to={`${subject.modules[0].href}${hash}`} replace />;

  return (
    <SiteLayout>
      <main className="wrap pb-[clamp(5rem,11vw,9rem)]">
        <header className="pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3rem,6vw,5rem)]">
          <Breadcrumb
            trail={[
              { label: "NOTES", href: "/notes" },
              { label: branch.short, href: branchPath(branch) },
              { label: semester.id.toUpperCase(), href: semesterPath(branch, semester) },
              { label: subject.name.toUpperCase() },
            ]}
          />
          <h1 className="mt-6 text-[length:clamp(2.2rem,5vw,4.2rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-balance">
            {subject.name}. <span className="text-ink/30">{subject.course}</span>
          </h1>
          <p className="label mt-4 text-ink-2">{subject.code}</p>
        </header>

        {subject.syllabusHref && (
          <section aria-labelledby="syllabus-title" className="mb-10 rounded-2xl border border-line bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Label><span id="syllabus-title">Official syllabus</span></Label>
                <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
                  Browse the KTU course topics, modules, outcomes and assessment details in the syllabus reader.
                </p>
              </div>
              <Link to={subject.syllabusHref} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-[0.9rem] font-medium transition-colors hover:border-ink">
                <FileText size={17} aria-hidden="true" /> Read syllabus <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {subject.modules.length > 0 && (
          <section aria-labelledby="modules-title" className="border-t border-line pt-10">
            <Label>
              <span id="modules-title">Modules</span>
            </Label>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {subject.modules.map((module) => (
                <li key={module.href}>
                  <Link to={module.href} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink">
                    <span className="text-[1.25rem] font-semibold tracking-[-0.025em]">{module.name}</span>
                    <span className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">{module.detail}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[0.9rem] font-medium">
                      Open notes <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </SiteLayout>
  );
}
