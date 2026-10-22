import { useId, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FORM_URL = "https://dropgram.anokhagecw.workers.dev/f/fk_sEhI19VCYrbhNuTNaiunUQ";

const TOPICS = ["A concern", "An idea", "Joining UDSF", "Something else"] as const;

export const field =
  "w-full rounded-xl border border-line bg-white px-4 text-[0.95rem] text-ink placeholder:text-ink-2/60 transition-colors duration-200 hover:border-ink/25 focus:border-ink/60 focus-visible:outline-none";

type Status = "idle" | "sending" | "sent" | "error";

/* Contact form, delivered to the union inbox by Dropgram. */
export default function ContactForm() {
  const id = useId();
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>(TOPICS[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!String(data.get("email")).trim() && !String(data.get("phone")).trim()) {
      setError("Add an email or a phone number so we can reply.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) throw new Error(`Dropgram responded ${res.status}`);
      form.reset();
      setTopic(TOPICS[0]);
      setStatus("sent");
    } catch {
      setError("Your message didn't go through. Try again, or message us on Instagram.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start justify-center rounded-[1.75rem] bg-paper p-[clamp(1.5rem,4vw,3rem)]" role="status">
        <span className="grid size-12 place-items-center rounded-full bg-[linear-gradient(120deg,var(--color-green-deep),var(--color-blue-deep))] text-white">
          <Check aria-hidden className="size-5" />
        </span>
        <h2 className="mt-6 text-[length:clamp(1.6rem,3vw,2.1rem)] leading-tight font-semibold tracking-[-0.04em] text-ink">
          Message sent<span className="text-green">.</span> <span className="text-ink/30">We'll get back to you soon.</span>
        </h2>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 cursor-pointer text-[0.9rem] font-medium text-ink underline decoration-line underline-offset-[6px] transition-[text-decoration-color] hover:decoration-current"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-paper p-[clamp(1.25rem,3vw,2.25rem)]" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-[1.5rem] leading-tight font-semibold tracking-[-0.035em] text-ink">
        Send us a message
      </h2>
      <p className="mt-1.5 text-[0.9rem] leading-[1.5] text-ink-2">It goes straight to the committee. We'll reply by email.</p>

      <fieldset className="mt-6">
        <legend className="label text-ink-2">What's it about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} className="peer sr-only" />
              <span className="inline-flex h-9 items-center rounded-full border border-line bg-white px-4 text-[0.85rem] font-medium text-ink-2 transition-colors duration-200 hover:border-ink/30 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="label text-ink-2">Your name</label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={cn(field, "mt-2 h-12")} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="label text-ink-2">Email</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={cn(field, "mt-2 h-12")} />
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-phone`} className="label text-ink-2">Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={cn(field, "mt-2 h-12")} />
        </div>
        <div>
          <label htmlFor={`${id}-dept`} className="label text-ink-2">
            Branch &amp; year <span className="tracking-normal normal-case text-ink-2/60">(optional)</span>
          </label>
          <input id={`${id}-dept`} name="branch_and_year" placeholder="e.g. CSE, S3" className={cn(field, "mt-2 h-12")} />
        </div>
      </div>
      <p className="mt-2 text-[0.8rem] text-ink-2/60">Give us an email, a phone number, or both.</p>

      <div className="mt-3">
        <label htmlFor={`${id}-message`} className="label text-ink-2">Message</label>
        <textarea id={`${id}-message`} name="message" required rows={5} className={cn(field, "mt-2 block min-h-32 resize-y py-3 leading-[1.55]")} />
      </div>

      {/* spam trap: Dropgram drops submissions that fill it in */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-12 cursor-pointer items-center gap-3 rounded-full bg-ink pr-1.5 pl-5 text-[0.88rem] font-semibold tracking-[-0.01em] text-white transition-colors duration-200 hover:bg-green-deep disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <span className="grid size-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
            {status === "sending" ? <LoaderCircle aria-hidden className="size-4 animate-spin" /> : <ArrowUpRight aria-hidden className="size-4" />}
          </span>
        </button>
        <p className="text-[0.85rem] text-red-700" role="alert">
          {status === "error" && error}
        </p>
      </div>
    </form>
  );
}
