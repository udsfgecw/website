import { useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type { Activity } from "@/data/activities";
import { cleanCaption, dayLabel, hashtags, mediaUrl } from "@/lib/activity";
import WhatsAppText, { WhatsAppInline } from "./WhatsAppText";

/* Full-screen viewer for archive posts: the photo or reel fills the screen, with its caption beside it,
   and the arrow keys or buttons step through `items`. */
export default function Lightbox({
  items,
  index,
  onIndex,
  onTag,
}: {
  items: readonly Activity[];
  index: number | null;
  onIndex: (index: number | null) => void;
  /** called when a hashtag is chosen; without it hashtags are shown as plain text */
  onTag?: (tag: string) => void;
}) {
  const item = index === null ? undefined : items[index];
  const many = items.length > 1;
  const step = useCallback(
    (by: number) => index !== null && onIndex((index + by + items.length) % items.length),
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (index === null || !many) return;
    const onKey = (event: KeyboardEvent) => {
      // Let video controls use arrow keys for seeking and volume.
      if (event.target instanceof HTMLVideoElement) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, many, step]);

  const caption = item?.caption ? cleanCaption(item.caption, item.title) : "";
  const tags = item ? hashtags(item.caption) : [];

  return (
    <DialogPrimitive.Root open={!!item} onOpenChange={(value) => !value && onIndex(null)}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black" />
        {item && (
          <DialogPrimitive.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-black text-white outline-none md:flex-row md:overflow-hidden"
          >
            <div className="relative flex h-[70svh] shrink-0 items-center justify-center md:h-auto md:flex-1">
              {item.video ? (
                <video key={item.id} controls autoPlay playsInline preload="metadata" poster={mediaUrl(item.image)} aria-label={`${item.title} reel`} className="max-h-full max-w-full object-contain">
                  <source src={mediaUrl(item.video)} type="video/mp4" />
                  {item.subtitles && <track kind="captions" src={mediaUrl(item.subtitles)} srcLang="und" label="Exported subtitles" />}
                  Your browser does not support video playback.
                </video>
              ) : (
                <img key={item.id} src={mediaUrl(item.image)} alt="" className="max-h-full max-w-full object-contain" />
              )}
              <DialogPrimitive.Close className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 md:hidden">
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
              {many && (
                <>
                  <StepButton label="Previous post" className="left-3 md:left-6" onClick={() => step(-1)}>
                    <ArrowLeft className="size-5" />
                  </StepButton>
                  <StepButton label="Next post" className="right-3 md:right-6" onClick={() => step(1)}>
                    <ArrowRight className="size-5" />
                  </StepButton>
                </>
              )}
            </div>

            <aside className="flex flex-col border-white/10 bg-[#0d0d0d] p-6 md:w-[min(420px,34vw)] md:overflow-y-auto md:border-l md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="label text-white/45 tabular-nums">{many && `${index! + 1} / ${items.length}`}</p>
                <DialogPrimitive.Close className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white max-md:hidden">
                  <X className="size-4" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              </div>
              <time dateTime={item.date} className="label mt-6 flex items-center gap-2 text-green md:mt-10">
                {dayLabel(item.date)}
              </time>
              <DialogPrimitive.Title className="mt-3 text-[1.35rem] font-semibold leading-snug tracking-[-0.025em]">
                {item.title ? <WhatsAppInline text={item.title} /> : "Untitled post"}
              </DialogPrimitive.Title>
              {caption && <WhatsAppText text={caption} className="mt-5 text-[0.92rem] leading-[1.7] text-white/70 [&_strong]:text-white" />}
              {tags.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Hashtags">
                  {tags.map((tag) => (
                    <li key={tag}>
                      {onTag ? (
                        <button
                          type="button"
                          onClick={() => onTag(tag)}
                          className="rounded-full border border-white/15 px-2.5 py-1 text-[0.75rem] text-white/60 transition hover:border-green hover:text-white"
                        >
                          #{tag}
                        </button>
                      ) : (
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.75rem] text-white/45">#{tag}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <p className="label mt-auto pt-10 text-white/30 max-md:hidden">{many && "← → to browse · "}Esc to close</p>
            </aside>
          </DialogPrimitive.Content>
        )}
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function StepButton({
  label,
  className,
  onClick,
  children,
}: {
  label: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 ${className}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );
}
