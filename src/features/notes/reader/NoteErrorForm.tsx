import { useId, useState } from "react";
import { ArrowUpRight, Check, Flag, LoaderCircle } from "lucide-react";
import { field } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { WEB3FORMS_KEY } from "@/config";
import { cn } from "@/lib/utils";

const KINDS = ["Wrong text or spelling", "Wrong number or formula", "Diagram or image problem", "Something else"] as const;

type Status = "idle" | "sending" | "sent" | "error";

interface Props {
  /** module title, e.g. "Chemistry, module 1" */
  title: string;
  /** the section or page the reader is on */
  unitLabel: string;
  unit: number;
  /** topic heading of that section */
  topic: string;
}

/* Lets a reader report a mistake in the notes. Delivered to the union inbox by Web3Forms, like the contact form. */
export default function NoteErrorForm({ title, unitLabel, unit, topic }: Props) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<(typeof KINDS)[number]>(KINDS[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const where = `${title}, ${unitLabel} ${unit} (${topic})`;

  function onOpenChange(next: boolean) {
    setOpen(next);
    // a fresh form for the next report
    if (!next) setStatus((s) => (s === "sent" ? "idle" : s));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("access_key", WEB3FORMS_KEY);
    data.set("subject", `UDSF GECW notes error: ${kind} in ${title}, ${unitLabel} ${unit}`);
    data.set("from_name", "UDSF GECW notes");
    data.set("where", where);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: data });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);
      form.reset();
      setKind(KINDS[0]);
      setStatus("sent");
    } catch {
      setError("Your report didn't go through. Try again, or message us on Instagram.");
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="print:hidden inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[0.85rem] font-medium text-ink shadow-2xs transition-colors hover:border-ink hover:bg-paper"
        >
          <Flag size={15} aria-hidden="true" />
          Report a mistake
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[calc(100svh-2rem)] overflow-y-auto rounded-[1.75rem] border-line bg-paper p-[clamp(1.25rem,3vw,2rem)] sm:max-w-lg">
        {status === "sent" ? (
          <div className="flex flex-col items-start gap-5" role="status">
            <span className="grid size-12 place-items-center rounded-full bg-[linear-gradient(120deg,var(--color-green-deep),var(--color-blue-deep))] text-white">
              <Check aria-hidden className="size-5" />
            </span>
            <DialogTitle className="text-[1.6rem] leading-tight font-semibold tracking-[-0.04em] text-ink">
              Thanks<span className="text-green">.</span> <span className="text-ink/30">We'll check and fix it.</span>
            </DialogTitle>
            <DialogDescription className="text-[0.95rem] leading-[1.5] text-ink-2">Your report is with the notes team.</DialogDescription>
            <Button type="button" variant="outline" className="h-11 rounded-full px-5" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col">
            <DialogTitle className="text-[1.5rem] leading-tight font-semibold tracking-[-0.035em] text-ink">Report a mistake</DialogTitle>
            <DialogDescription className="mt-1.5 text-[0.9rem] leading-[1.5] text-ink-2">
              Tell us what's wrong in <span className="font-medium text-ink">{where}</span>.
            </DialogDescription>

            <fieldset className="mt-6">
              <legend className="label text-ink-2">What kind of mistake?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {KINDS.map((k) => (
                  <label key={k} className="cursor-pointer">
                    <input type="radio" name="kind" value={k} checked={kind === k} onChange={() => setKind(k)} className="peer sr-only" />
                    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-[0.85rem] font-medium text-ink-2 transition-colors duration-200 hover:border-ink/30 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink sm:h-9 sm:min-h-0">
                      {k}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <label htmlFor={`${id}-what`} className="label text-ink-2">What's wrong</label>
              <textarea id={`${id}-what`} name="message" required rows={4} placeholder="e.g. Step 3 should divide by 2, not 4." className={cn(field, "mt-2 block min-h-28 resize-y py-3 leading-[1.55]")} />
            </div>

            <div className="mt-3">
              <label htmlFor={`${id}-fix`} className="label text-ink-2">
                Correct version <span className="tracking-normal normal-case text-ink-2/60">(optional)</span>
              </label>
              <textarea id={`${id}-fix`} name="suggested_fix" rows={2} className={cn(field, "mt-2 block resize-y py-3 leading-[1.55]")} />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-name`} className="label text-ink-2">
                  Your name <span className="tracking-normal normal-case text-ink-2/60">(optional)</span>
                </label>
                <input id={`${id}-name`} name="name" autoComplete="name" className={cn(field, "mt-2 h-12")} />
              </div>
              <div>
                <label htmlFor={`${id}-email`} className="label text-ink-2">
                  Email <span className="tracking-normal normal-case text-ink-2/60">(optional)</span>
                </label>
                <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={cn(field, "mt-2 h-12")} />
              </div>
            </div>

            {/* spam trap: Web3Forms drops submissions that tick it */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 cursor-pointer items-center gap-3 rounded-full bg-ink pr-1.5 pl-5 text-[0.88rem] font-semibold tracking-[-0.01em] text-white transition-colors duration-200 hover:bg-green-deep disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send report"}
                <span className="grid size-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                  {status === "sending" ? <LoaderCircle aria-hidden className="size-4 animate-spin" /> : <ArrowUpRight aria-hidden className="size-4" />}
                </span>
              </button>
              <p className="text-[0.85rem] text-red-700" role="alert">
                {status === "error" && error}
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
