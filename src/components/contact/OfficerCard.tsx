import { MessageCircle, Phone } from "lucide-react";
import type { CommitteeMember } from "@/data/committee";

/* +918848431913 → +91 88484 31913 */
const formatPhone = (phone: string) => phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2");

/* A unit committee officer: portrait, role and name, then their number with call and WhatsApp buttons. */
export default function OfficerCard({ member }: { member: CommitteeMember & { phone: string } }) {
  return (
    <li className="rounded-2xl bg-white p-5 ring-1 ring-line">
      <div className="flex items-center gap-4">
        <img
          src={member.portrait}
          alt={member.name}
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
          className="size-16 shrink-0 rounded-xl object-cover sm:size-20"
        />
        <div className="min-w-0">
          <p className="label text-green-ink">{member.role}</p>
          <h3 className="mt-1.5 text-[1.4rem] leading-tight font-semibold tracking-[-0.035em] text-ink">{member.name}</h3>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <a href={`tel:${member.phone}`} className="text-[0.95rem] font-medium tabular-nums tracking-[-0.01em] text-ink transition-colors hover:text-green-ink">
          {formatPhone(member.phone)}
        </a>
        <div className="flex gap-2">
          <a
            href={`tel:${member.phone}`}
            aria-label={`Call ${member.name}`}
            className="grid size-10 place-items-center rounded-full bg-ink text-white transition-colors duration-200 hover:bg-green-deep"
          >
            <Phone aria-hidden className="size-4" />
          </a>
          <a
            href={`https://wa.me/${member.phone.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message ${member.name} on WhatsApp`}
            className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-200 hover:border-ink/40"
          >
            <MessageCircle aria-hidden className="size-4" />
          </a>
        </div>
      </div>
    </li>
  );
}
