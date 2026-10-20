import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { notFoundMeta, usePageMeta } from "@/lib/meta";

export default function NotFoundPage() {
  usePageMeta(notFoundMeta());

  return (
    <main className="wrap flex min-h-svh flex-col items-start justify-center py-24">
      <p className="label text-ink-2">404</p>
      <h1 className="mt-4 text-[length:clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
        This page doesn’t exist.
      </h1>
      <p className="mt-4 max-w-[40ch] text-[1rem] leading-[1.6] text-ink-2">The link may be old or mistyped. Everything about UDSF GECW is on the home page.</p>
      <Button asChild className="mt-8 h-12 px-6">
        <Link to="/">
          <ArrowLeft size={17} aria-hidden="true" /> Back to UDSF
        </Link>
      </Button>
    </main>
  );
}
