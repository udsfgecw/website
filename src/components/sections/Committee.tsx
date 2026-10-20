import OfficerCard from "@/components/contact/OfficerCard";
import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { COMMITTEE, type CommitteeMember } from "@/data/committee";

const [UNIT, ...ORGANISATIONS] = COMMITTEE;
const OFFICERS = ORGANISATIONS.flatMap((group): readonly CommitteeMember[] => group.members);

/* The UDSF Execom, with the other members as a face pile linking to the contact page. */
export default function Committee() {
  return (
    <Section
      id="committee"
      className="pt-0"
      label="Executive committee"
      title="UDSF Execom."
      intro="Three people leading the KSU and MSF alliance at GEC Wayanad. Call or message any of them directly."
    >
      <ul className="grid gap-3 md:grid-cols-3">
        {UNIT.members.map((member) => <OfficerCard key={member.name} member={member} />)}
      </ul>
      <div className="mt-3 flex flex-col gap-5 rounded-2xl bg-paper p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <ul className="flex shrink-0 -space-x-2.5" aria-label="Committee members">
            {OFFICERS.map((member) => (
              <li key={member.name}>
                <img
                  src={member.portrait}
                  alt={member.name}
                  title={`${member.name}, ${member.role}`}
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="size-9 rounded-full object-cover ring-2 ring-paper"
                />
              </li>
            ))}
          </ul>
          <p className="text-[0.92rem] leading-[1.45] text-ink-2">
            <span className="font-semibold text-ink">Plus {OFFICERS.length} more members</span>
          </p>
        </div>
        <CtaLink to="/contact" className="self-start sm:self-auto">
          Meet the full committee
        </CtaLink>
      </div>
    </Section>
  );
}
