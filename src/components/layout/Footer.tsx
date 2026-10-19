import { Link } from "react-router-dom";
import { INSTAGRAM } from "@/config";

export default function Footer() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <Link className="inline-flex items-center gap-2.5" to="/" aria-label="UDSF GECW home">
          <img className="size-6 rounded-[5px]" src={`${import.meta.env.BASE_URL}assets/logo-96.webp`} alt="" width={24} height={24} loading="lazy" />
          <span className="label text-ink">UDSF GECW</span>
        </Link>
        <p className="label text-ink-2">Government Engineering College Wayanad, Mananthavady</p>
        <div className="label flex items-center gap-6 text-ink-2">
          <a className="transition-colors hover:text-ink" href={INSTAGRAM} target="_blank" rel="noopener">
            Instagram
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
