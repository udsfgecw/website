import { ArrowRight } from "lucide-react";
import type { ReadingPlace } from "./useReaderStorage";

export default function ResumeBanner({
  place,
  total,
  onContinue,
  onStartOver,
}: {
  place: ReadingPlace;
  total: number;
  onContinue: () => void;
  onStartOver: () => void;
}) {
  return (
    <div className="reader-resume">
      <div>
        <span className="reader-eyebrow">RIGHT WHERE YOU LEFT OFF</span>
        <p>
          Continue from page {place.page}
          <span> of {total}</span>
        </p>
      </div>
      <button onClick={onContinue}>
        Continue reading <ArrowRight size={16} />
      </button>
      <button className="reader-start" onClick={onStartOver}>
        Start over
      </button>
    </div>
  );
}
