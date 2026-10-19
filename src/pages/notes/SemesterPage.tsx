import { ArrowRight, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import { branchPath, NOTES_CATALOGUE } from "@/data/notes";
import { usePageMeta } from "@/lib/meta";
import NotFoundPage from "@/pages/NotFoundPage";
import Breadcrumb from "./Breadcrumb";

/* The subjects of one semester, reached by clicking the semester on the notes shelf. */
export default function SemesterPage() {
  const params = useParams();
  const branch = NOTES_CATALOGUE.find((b) => b.id === params.branch);
  const semester = branch?.semesters.find((s) => s.id === params.semester);
  const found = branch && semester && semester.subjects.length > 0;

  usePageMeta(
    found
      ? {
          title: pageTitle(`${branch.short} ${semester.name} notes`),
          description: `Study notes for ${semester.name} of ${branch.name} at Government Engineering College Wayanad, shared by UDSF.`,
        }
      : { title: pageTitle("Page not found"), description: "This page doesn’t exist on the UDSF GECW website." },
  );

  if (!found) return <NotFoundPage />;

  return (
    <SiteLayout>
      <main className="wrap pb-[clamp(5rem,11vw,9rem)]">
        <header className="pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3rem,6vw,5rem)]">
          <Breadcrumb
            trail={[{ label: "NOTES", href: "/notes" }, { label: branch.short, href: branchPath(branch) }, { label: semester.id.toUpperCase() }]}
          />
          <h1 className="mt-6 text-[length:clamp(2.2rem,5vw,4.2rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-balance">
            {semester.name}. <span className="text-ink/30">{branch.name}</span>
          </h1>
        </header>

        <section aria-labelledby="subjects-title" className="border-t border-line pt-10">
          <Label>
            <span id="subjects-title">Subjects</span>
          </Label>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {semester.subjects.map((subject) => (
              <li key={subject.href}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink">
                  <Link to={subject.href} className="group flex flex-1 flex-col">
                    <span className="label text-ink-2">{subject.code}</span>
                    <span className="mt-6 text-[1.25rem] font-semibold tracking-[-0.025em]">{subject.name}</span>
                    <span className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">{subject.course}</span>
                    {subject.modules.length > 0 && (
                      <span className="text-[0.85rem] leading-[1.5] text-ink-2">
                        {subject.modules.length} {subject.modules.length === 1 ? "module" : "modules"}
                      </span>
                    )}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.9rem] font-medium">
                      {subject.modules.length > 0 ? "View subject notes" : "Subject details"} <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                  {subject.syllabusHref && (
                    <Link to={subject.syllabusHref} className="mt-3 inline-flex items-center gap-2 border-t border-line pt-4 text-[0.9rem] font-medium text-ink-2 hover:text-ink">
                      <FileText size={16} aria-hidden="true" /> Read syllabus
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
}
