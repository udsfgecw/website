import SiteLayout from "@/components/layout/SiteLayout";
import Alliance from "@/components/sections/Alliance";
import Committee from "@/components/sections/Committee";
import Hero from "@/components/sections/Hero";
import Join from "@/components/sections/Join";
import NotesTeaser from "@/components/sections/NotesTeaser";
import Programs from "@/components/sections/Programs";
import Progress from "@/components/sections/progress/Progress";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { usePageMeta } from "@/lib/meta";
import { organizationLd, websiteLd } from "@/lib/seo";

export default function HomePage() {
  usePageMeta({
    title: "UDSF GECW | KSU and MSF student alliance at GEC Wayanad",
    description:
      "UDSF GECW is the KSU and MSF student alliance at Government Engineering College Wayanad, Mananthavady. See our work on campus, pro shows and free study notes.",
    jsonLd: [websiteLd(), organizationLd()],
  });

  return (
    <SiteLayout>
      <main id="top">
        <Hero />
        <WhatWeDo />
        <Progress />
        <Programs />
        <Alliance />
        <Committee />
        <NotesTeaser />
        <Join />
      </main>
    </SiteLayout>
  );
}
