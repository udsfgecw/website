import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import { type Branch, NOTES_CATALOGUE, type Semester, semesterPath } from "@/data/notes";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import NotFoundPage from "@/pages/NotFoundPage";
import Breadcrumb from "./Breadcrumb";

const card = "flex h-full flex-col rounded-2xl border p-6";

function SemesterNumber({ semester, live }: { semester: Semester; live: boolean }) {
  return (
    <>
      <span
        className={cn(
          "text-[2.75rem] leading-none font-semibold tracking-[-0.05em]",
          live ? "bg-[linear-gradient(120deg,var(--color-green),var(--color-blue))] bg-clip-text text-transparent" : "text-ink/25",
        )}
      >
        {semester.id.toUpperCase()}
      </span>
      <span className={cn("label mt-3", live ? "text-ink-2" : "text-ink-2/60")}>{semester.name}</span>
    </>
  );
}

/* A semester with notes links to the page listing its subjects. */
function SemesterCard({ branch, semester }: { branch: Branch; semester: Semester }) {
  const { subjects } = semester;

  if (subjects.length === 0)
    return (
      <div className={cn(card, "border-dashed border-line")}>
        <SemesterNumber semester={semester} live={false} />
        <p className="mt-auto pt-6 text-[0.9rem] text-ink-2/70 sm:pt-10">No notes yet</p>
      </div>
    );

  return (
    <Link to={semesterPath(branch, semester)} className={cn(card, "group border-line bg-white transition-colors hover:border-ink")}>
      <SemesterNumber semester={semester} live />
      <span className="mt-auto pt-10 text-[1.1rem] font-semibold tracking-[-0.02em]">
        {subjects.length} {subjects.length === 1 ? "subject" : "subjects"}
      </span>
      <span className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">{subjects.map((subject) => subject.name).join(", ")}</span>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-medium">
        View subjects <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}

/* The semesters of one department, reached by clicking the department on the notes shelf. */
export default function BranchPage() {
  const { branch: branchId } = useParams();
  const branch = NOTES_CATALOGUE.find((b) => b.id === branchId);

  usePageMeta(
    branch
      ? {
          title: pageTitle(`${branch.short} notes`),
          description: `Study notes for ${branch.name}, semester by semester, shared by UDSF for students at Government Engineering College Wayanad.`,
        }
      : { title: pageTitle("Page not found"), description: "This page doesn’t exist on the UDSF GECW website." },
  );

  if (!branch) return <NotFoundPage />;

  return (
    <SiteLayout>
      <main className="wrap pb-[clamp(5rem,11vw,9rem)]">
        <header className="pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3rem,6vw,5rem)]">
          <Breadcrumb trail={[{ label: "NOTES", href: "/notes" }, { label: branch.short }]} />
          <h1 className="mt-6 text-[length:clamp(2.2rem,5vw,4.2rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-balance">
            {branch.name}. <span className="text-ink/30">Pick a semester.</span>
          </h1>
        </header>

        <section aria-labelledby="semesters-title" className="border-t border-line pt-10">
          <Label>
            <span id="semesters-title">Semesters</span>
          </Label>
          {/* on phones, semesters with notes take the full width and empty ones pair up */}
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {branch.semesters.map((semester) => (
              <li key={semester.id} className={cn(semester.subjects.length > 0 && "max-sm:col-span-2")}>
                <SemesterCard branch={branch} semester={semester} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
}
