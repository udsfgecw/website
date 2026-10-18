import SiteLayout from "@/components/layout/SiteLayout";
import Alliance from "@/components/sections/Alliance";
import Hero from "@/components/sections/Hero";
import Join from "@/components/sections/Join";
import NotesTeaser from "@/components/sections/NotesTeaser";
import Progress from "@/components/sections/progress/Progress";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { SITE_DESCRIPTION, pageTitle } from "@/config";
import { usePageMeta } from "@/lib/meta";

export default function HomePage() {
  usePageMeta({ title: pageTitle(), description: SITE_DESCRIPTION });

  return (
    <SiteLayout>
      <main id="top">
        <Hero />
        <WhatWeDo />
        <Progress />
        <Alliance />
        <NotesTeaser />
        <Join />
      </main>
    </SiteLayout>
  );
}
