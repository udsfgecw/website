import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/section";

export default function NotesTeaser() {
  return (
    <section id="notes" aria-labelledby="notes-title" className="wrap pb-[clamp(4rem,8vw,7rem)]">
      <div className="flex flex-col gap-8 rounded-[2rem] border border-line p-[clamp(1.75rem,5vw,4rem)] md:flex-row md:items-end md:justify-between">
        <div>
          <Label>Notes</Label>
          <h2 id="notes-title" className="mt-4 max-w-[22ch] text-[length:clamp(1.8rem,3.6vw,2.9rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance">
            Study notes, free for every student.{" "}
            <span className="text-ink/30">Starting with S1 Computer Science and Engineering.</span>
          </h2>
        </div>
        <Button asChild className="h-12 shrink-0 self-start px-6 md:self-end">
          <Link to="/notes">
            Open the notes shelf <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
