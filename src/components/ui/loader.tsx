import { MEDIA_BASE } from "@/lib/media";

type LoaderProps = {
  label?: string;
  /** "page" fills the viewport area; "inline" sits inside a card or figure. */
  variant?: "page" | "inline";
};

export function Loader({ label = "Loading", variant = "page" }: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`loader loader-${variant}`}
    >
      <span className="loader-ring" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <circle className="loader-track" cx="50" cy="50" r="46" />
          <circle className="loader-arc" cx="50" cy="50" r="46" pathLength={100} />
        </svg>
        <img src={`${MEDIA_BASE}/assets/logo-96.webp`} alt="" width={48} height={48} />
      </span>
      <span className="loader-label">{label}</span>
      {variant === "page" && <span className="loader-bar" aria-hidden="true" />}
    </div>
  );
}
