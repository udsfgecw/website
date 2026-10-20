import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import OfficerCard from "@/components/contact/OfficerCard";
import SiteLayout from "@/components/layout/SiteLayout";
import { H2, Label } from "@/components/ui/section";
import { INSTAGRAM, absoluteUrl, pageTitle } from "@/config";
import { ORGANISATIONS } from "@/data/alliance";
import { COMMITTEE } from "@/data/committee";
import { usePageMeta } from "@/lib/meta";
import { breadcrumbLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const MAPS = "https://www.google.com/maps/search/?api=1&query=Government+Engineering+College+Wayanad";

/* A compact way to reach the union: icon tile, label and detail, and an arrow knob that turns on hover. */
function Channel({ href, icon: Icon, label, title, dark = false }: { href: string; icon: typeof MapPin; label: string; title: string; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-4 rounded-2xl p-4 pr-3 transition-colors duration-200",
        dark ? "bg-[linear-gradient(120deg,var(--color-green-deep),var(--color-blue-deep))] text-white" : "border border-line hover:border-ink/30",
      )}
    >
      <span className={cn("grid size-11 shrink-0 place-items-center rounded-xl", dark ? "bg-white/15" : "bg-green-tint text-green-ink")}>
        <Icon aria-hidden className="size-5" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={cn("label block", dark ? "text-white/75" : "text-ink-2")}>{label}</span>
        <span className="mt-1 block truncate text-[1.05rem] leading-tight font-semibold tracking-[-0.02em]">{title}</span>
      </span>
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45", dark ? "bg-white text-ink" : "bg-ink text-white")}>
        <ArrowUpRight aria-hidden className="size-4" />
      </span>
    </a>
  );
}

export default function ContactPage() {
  usePageMeta({
    title: pageTitle("Contact"),
    description: "Meet the UDSF GECW unit committee for 2026–27, including the KSU and MSF representatives. Get in touch with the union at Government Engineering College Wayanad.",
    jsonLd: [
      { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact UDSF GECW", url: absoluteUrl("/contact"), mainEntity: { "@id": `${absoluteUrl("/")}#organization` } },
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
    ],
  });
  const [unit, ...organisations] = COMMITTEE;

  return (
    <SiteLayout>
      <main id="top">
        <section
          className="wrap grid grid-cols-1 gap-10 pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(3rem,6vw,4.5rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-16"
          aria-labelledby="contact-title"
        >
          <div className="flex flex-col">
            <Label>Contact</Label>
            <h1
              id="contact-title"
              className="mt-5 max-w-[13ch] text-[length:clamp(2.6rem,5.6vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-balance text-ink"
            >
              Talk to us<span className="text-green">.</span> <span className="text-ink/30">We're right here on campus.</span>
            </h1>
            <p className="mt-6 max-w-[42ch] text-[length:clamp(1rem,1.3vw,1.1rem)] leading-[1.6] text-ink-2">
              A campus concern, a new idea, or a place to begin. Send us a message, find us at college, or call any of your
              representatives directly.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-auto lg:grid-cols-1 lg:pt-10">
              <Channel href={INSTAGRAM} icon={MessageCircle} label="Instagram" title="@udsf_gecw" dark />
              <Channel href={MAPS} icon={MapPin} label="On campus · Mananthavady" title="GEC Wayanad" />
            </div>
          </div>
          <ContactForm />
        </section>

        <section id="committee" aria-labelledby="committee-title" className="border-t border-line bg-paper">
          <div className="wrap py-[clamp(3rem,6vw,5rem)]">
            <header className="grid gap-x-12 gap-y-4 md:grid-cols-2 md:items-end">
              <div>
                <Label>Unit committee</Label>
                <H2 id="committee-title" className="mt-4 max-w-[16ch]">The people you can turn to.</H2>
              </div>
              <p className="max-w-[40ch] text-[0.95rem] leading-[1.6] text-ink-2 md:justify-self-end">
                The UDSF unit committee leads the KSU and MSF alliance at GEC Wayanad. Call or message them directly.
              </p>
            </header>

            <ul className="mt-[clamp(2rem,4vw,3rem)] grid gap-3 md:grid-cols-3">
              {unit.members.map((member) => <OfficerCard key={member.name} member={member} />)}
            </ul>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {organisations.map((group) => {
                const background = ORGANISATIONS.find((o) => o.short === group.name)?.background;
                return (
                  <section key={group.id} aria-labelledby={`${group.id}-title`} className={cn("rounded-2xl p-[clamp(1.5rem,3vw,2.25rem)] text-white", background)}>
                    <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
                      <h3 id={`${group.id}-title`} className="text-[length:clamp(2.25rem,4vw,3rem)] leading-none font-extrabold tracking-[-0.06em]">
                        {group.name}
                      </h3>
                      <p className="label text-white/75">{group.detail}</p>
                    </header>
                    <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-white/20 pt-5 min-[420px]:grid-cols-2">
                      {group.members.map((member) => (
                        <li key={member.name} className="flex items-center gap-3.5">
                          <img
                            src={member.portrait}
                            alt={member.name}
                            width={52}
                            height={52}
                            loading="lazy"
                            decoding="async"
                            className="size-13 shrink-0 rounded-xl object-cover ring-1 ring-white/25"
                          />
                          <div className="min-w-0">
                            <p className="label text-white/70">{member.role}</p>
                            <p className="mt-1 text-[1.05rem] leading-tight font-semibold tracking-[-0.02em]">{member.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
