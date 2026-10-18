import { Link } from "react-router-dom";

/* The way back up the notes shelf; the last step is the current page and has no link. */
export default function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label flex flex-wrap gap-x-2 text-ink-2">
      {trail.map((step, i) => (
        <span key={step.label} className="flex gap-x-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {step.href ? (
            <Link to={step.href} className="hover:text-ink">
              {step.label}
            </Link>
          ) : (
            <span aria-current="page">{step.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
