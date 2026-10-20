import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { Activity } from "@/data/activities";
import { mediaUrl } from "@/lib/activity";
import { cn } from "@/lib/utils";

/* A reel that plays muted and looped only while it is mostly on screen, so a grid of them never
   downloads or decodes more than the visitor is looking at. Posts without a video show their photo.
   Tapping either opens it full screen. */
export default function ReelCard({
  post,
  label,
  muted,
  onToggleSound,
  onOpen,
  className,
}: {
  post: Activity;
  /** what the full-screen button announces, e.g. the act's name */
  label: string;
  muted: boolean;
  onToggleSound: () => void;
  onOpen: () => void;
  className?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);

  // React does not reliably reflect `muted` as an attribute, and browsers only autoplay muted video.
  useEffect(() => {
    if (video.current) video.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    const element = video.current;
    if (!element || !post.video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          element.preload = "auto";
          element.play().catch(() => {});
        } else element.pause();
      },
      { threshold: [0, 0.5] },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [post.video]);

  return (
    <div className={cn("group relative aspect-[9/16] overflow-hidden rounded-[20px] bg-white/5", className)}>
      {post.video ? (
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="none"
          poster={mediaUrl(post.image)}
          aria-hidden
          tabIndex={-1}
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.04]"
        >
          <source src={mediaUrl(post.video)} type="video/webm" />
        </video>
      ) : (
        <img
          src={mediaUrl(post.image)}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      )}
      <span className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10" />
      <button type="button" onClick={onOpen} className="absolute inset-0">
        <span className="sr-only">{post.video ? "Watch" : "View"} {label} full screen</span>
      </button>
      {post.video && (
        <button
          type="button"
          onClick={onToggleSound}
          aria-pressed={!muted}
          className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/75"
        >
          {muted ? <VolumeX aria-hidden className="size-4" /> : <Volume2 aria-hidden className="size-4" />}
          <span className="sr-only">{muted ? "Turn sound on" : "Mute"} for {label}</span>
        </button>
      )}
    </div>
  );
}
