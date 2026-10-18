import { ArrowRight, Check, Circle } from "lucide-react";
import { Section } from "@/components/Section";

const ACHIEVEMENTS = [
  {
    title: "Started six student clubs",
    location: "Campus culture",
    description: "Initiated the Literary Club, Drawing Club, Dance Club, Music Club, Film Club and Karma, creating more ways for students to take part in campus life.",
    image: "clubs",
  },
  {
    title: "Brought a new bus to college",
    location: "College transport",
    description: "Secured a new college bus, responding to students’ long-standing need for better transport.",
    image: "bus",
  },
  {
    title: "Secured generators for the hostels",
    location: "Hostel facilities",
    description: "Brought generator facilities to the hostels, addressing students’ long-standing demand for backup power.",
    image: "generator",
  },
  {
    title: "Secured student parking facilities",
    location: "Student parking",
    description: "Secured parking space for students on campus, meeting a long-standing student need.",
    image: "parking",
  },
  {
    title: "Installed a new college nameboard",
    location: "Campus identity",
    description: "Replaced the old, damaged college nameboard with a renewed sign for Government Engineering College Wayanad.",
    image: "nameboard",
  },
  {
    title: "Created the first web magazine",
    location: "Campus publications",
    description: "Launched the first web magazine at GEC Wayanad, a place for students’ writing and stories.",
    image: null,
  },
  {
    title: "Created the first audiobook",
    location: "Campus publications",
    description: "Produced the first audiobook at GEC Wayanad, bringing the web magazine’s writing and stories to audio.",
    image: "audiobook",
  },
  {
    title: "Installed new lights on LH2 road",
    location: "LH2 road lighting",
    description: "New lights installed on the LH2 road following UDSF’s intervention, addressing the lack of lighting on the route.",
    image: "lighting",
  },
  {
    title: "Improved the road to MH",
    location: "Hostel access",
    description: "Gravel laid along the road to the men’s hostel, improving a difficult stretch of the everyday journey.",
    image: "hostel-road",
  },
  {
    title: "Added seating in department corners",
    location: "Department corners",
    description: "Seating introduced in department corners, making more room for students to meet, talk and spend time together.",
    image: "seating",
  },
  {
    title: "Brought the German Consulate to campus",
    location: "German Consulate × KASE",
    description: "Brought the German Consulate team to campus for an interactive session with participation from KASE.",
    image: "exchange-original.png",
  },
] as const;

const FOLLOW_UPS = [
  {
    number: "01",
    title: "Campus lighting",
    description: "Took the campus lighting request to the MLA and PWD. Approval received for a low-mast light; follow-up continues towards installation.",
    steps: ["Approval received", "Following up", "Installation"],
  },
  {
    number: "02",
    title: "College cricket net",
    description: "Working towards a practice facility with the Wayanad District Cricket Association. An MoU is ready; construction remains pending.",
    steps: ["MoU ready", "Following up", "Construction"],
  },
] as const;

export default function Progress() {
  return (
    <div className="border-y border-line bg-[#fafbf9]">
      <Section
        id="progress"
        label="UDSF GECW / In action"
        title="Our Progress"
        intro="What we’ve brought to campus. Better facilities, new opportunities and work that makes a difference to students."
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="label flex items-center gap-2 text-ink">
            <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
            On campus. In place.
          </h3>
          <span className="text-[0.75rem] text-ink-2">{String(ACHIEVEMENTS.length).padStart(2, "0")} initiatives delivered</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map(({ title, location, description, image }) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative">
                {image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}assets/progress/${image.endsWith(".png") ? image : `${image}.webp`}`}
                    alt={`${location}, ${image.endsWith(".png") ? "original event photograph" : "adapted from the UDSF campaign poster"}`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className={`aspect-[16/9] w-full bg-paper ${image.endsWith(".png") ? "object-contain" : "object-cover"}`}
                  />
                ) : (
                  // no photo yet, so a typographic panel stands in
                  <div className="flex aspect-[16/9] w-full flex-col justify-between bg-paper p-6" aria-hidden="true">
                    <span className="label text-ink-2">First at GEC Wayanad</span>
                    <span className="text-[length:clamp(2rem,3.4vw,2.6rem)] leading-[0.95] font-extrabold tracking-[-0.05em]">
                      Web
                      <br />
                      magazine
                    </span>
                  </div>
                )}
                <span className="label absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-green-ink">
                  <Check size={12} aria-hidden="true" /> Delivered
                </span>
              </div>
              <div className="p-6">
              <p className="label text-ink-2">{location}</p>
              <h4 className="mt-2 max-w-[21ch] text-[1.3rem] leading-[1.15] font-medium tracking-[-0.035em]">{title}</h4>
              <p className="mt-3 text-[0.85rem] leading-[1.65] text-ink-2">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8 md:mt-16">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h3 className="text-[1.45rem] font-medium tracking-[-0.035em]">Work in progress</h3>
            <p className="text-[0.8rem] text-ink-2">Work underway. Following through to the finish.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {FOLLOW_UPS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6 lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="label text-ink-2">Follow-up / {item.number}</span>
                  <span className="label flex items-center gap-1.5 text-blue-ink">
                    <span className="size-1.5 rounded-full bg-blue-ink" aria-hidden="true" /> In progress
                  </span>
                </div>
                <h4 className="mt-5 text-[1.25rem] font-medium tracking-[-0.03em]">{item.title}</h4>
                <p className="mt-2 max-w-[55ch] text-[0.85rem] leading-[1.65] text-ink-2">{item.description}</p>
                <ol aria-label={`${item.title} progress`} className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5">
                  {item.steps.map((step, index) => (
                    <li key={step} className="text-[0.65rem] leading-snug sm:text-[0.75rem]">
                      <div className="mb-2 flex items-center gap-2" aria-hidden="true">
                        {index === 0 ? (
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-tint text-green-ink"><Check size={12} /></span>
                        ) : index === 1 ? (
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-tint text-blue-ink"><ArrowRight size={12} /></span>
                        ) : (
                          <Circle size={20} strokeWidth={1} className="shrink-0 text-[#c9ccd2]" />
                        )}
                        {index < 2 && <span className="h-px flex-1 bg-line" />}
                      </div>
                      <span className={index === 1 ? "font-medium text-blue-ink" : "text-ink-2"}>
                        <span className="sr-only">{index === 0 ? "Completed: " : index === 1 ? "Current stage: " : "Pending: "}</span>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[0.7rem] text-ink-2">Event photographs use original source images. Other visuals are adapted from our campaign posters; some scenes are illustrative.</p>
      </Section>
    </div>
  );
}
