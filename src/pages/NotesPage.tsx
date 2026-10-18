import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import { type Branch, branchPath, NOTES_CATALOGUE } from "@/data/notes";
import { usePageMeta } from "@/lib/meta";

/* A department links to the page listing its semesters. */
function BranchCard({ branch }: { branch: Branch }) {
  const withNotes = branch.semesters.filter((semester) => semester.subjects.length > 0).length;

  return (
    <Link to={branchPath(branch)} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink">
      <span className="bg-[linear-gradient(120deg,var(--color-green),var(--color-blue))] bg-clip-text text-[2.75rem] leading-none font-semibold tracking-[-0.05em] text-transparent">
        {branch.short}
      </span>
      <span className="mt-auto pt-10 text-[1.1rem] font-semibold tracking-[-0.02em]">{branch.name}</span>
      <span className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">
        {withNotes} of {branch.semesters.length} semesters with notes
      </span>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-medium">
        View semesters <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function NotesPage() {
  usePageMeta({
    title: pageTitle("Notes"),
    description: "Free study notes for students at Government Engineering College Wayanad, shared by UDSF, semester by semester.",
  });

  return (
    <SiteLayout>
      <main className="wrap pb-[clamp(5rem,11vw,9rem)]">
        <header className="pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3rem,6vw,5rem)]">
          <Label>Notes</Label>
          <h1 className="mt-6 max-w-[24ch] text-[length:clamp(2.2rem,5vw,4.2rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-balance">
            The notes shelf. <span className="text-ink/30">Study notes shared by UDSF, free for every student at GEC Wayanad.</span>
          </h1>
        </header>

        <section aria-labelledby="departments-title" className="border-t border-line pt-10">
          <Label>
            <span id="departments-title">Departments</span>
          </Label>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {NOTES_CATALOGUE.map((branch) => (
              <li key={branch.id}>
                <BranchCard branch={branch} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
}
