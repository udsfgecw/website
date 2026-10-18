import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReaderHeader() {
  return (
    <header className="reader-header">
      <Link to="/" className="reader-brand">
        <img src={`${import.meta.env.BASE_URL}assets/logo-96.webp`} alt="" width={40} height={40} />
        <span>
          UDSF <small>GEC WAYANAD</small>
        </span>
      </Link>
      <Link to="/notes" className="reader-header-label">
        THE NOTES SHELF
      </Link>
      <Link to="/" className="reader-back">
        <ArrowLeft size={15} /> Back to UDSF
      </Link>
    </header>
  );
}
