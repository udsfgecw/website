import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import Alliance from "@/components/sections/Alliance";
import Hero from "@/components/sections/Hero";
import Join from "@/components/sections/Join";
import Progress from "@/components/sections/progress/Progress";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { SITE_DESCRIPTION, pageTitle } from "@/config";
import { usePageMeta } from "@/lib/meta";

export default function HomePage() {
  usePageMeta({ title: pageTitle(), description: SITE_DESCRIPTION });

  return (
    <>
      {/* the nav gains its background once this scrolls out of view */}
      <div id="top-sentinel" className="absolute top-0 size-px" />
      <Nav />
      <main id="top">
        <Hero />
        <WhatWeDo />
        <Progress />
        <Alliance />
        <Join />
      </main>
      <Footer />
    </>
  );
}
