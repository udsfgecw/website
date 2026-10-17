import { Card } from "@/components/ui/card";

const FEATURES = [
  ["ph-house-line", "Student welfare", "Hostel, canteen, transport and fees, taken to the administration."],
  ["ph-books", "Academic concerns", "Exams, results, labs and KTU issues, followed until fixed."],
  ["ph-check-square-offset", "College union", "Putting students who listen into the seats that decide."],
  ["ph-megaphone", "Campaigns", "Conventions and events that bring the campus together."],
] as const;

export default function Work() {
  return (
    <section
      className="wrap pt-[clamp(5rem,10vw,7.5rem)] pb-[clamp(4rem,8vw,6rem)] text-center"
      id="work"
      aria-labelledby="work-title"
    >
      <h2
        id="work-title"
        className="mx-auto max-w-[30ch] text-[length:clamp(1.6rem,3.2vw,2.4rem)] leading-[1.22] font-medium tracking-[-0.03em]"
      >
        Students who listen, organise and follow through, so every voice at GEC Wayanad is{" "}
        <span className="text-green-ink">heard where it counts.</span>
      </h2>

      <ul className="mx-auto mt-[clamp(2.5rem,5vw,3.5rem)] grid max-w-[980px] grid-cols-4 gap-[0.9rem] text-left max-[900px]:grid-cols-2 max-[460px]:grid-cols-1">
        {FEATURES.map(([icon, title, text]) => (
          <li key={title} className="flex">
            <Card className="w-full gap-0 rounded-2xl p-5 shadow-none transition-[transform,box-shadow,border-color] duration-400 ease-out-expo hover:-translate-y-[3px] hover:border-[#d3dcd8] hover:shadow-soft">
              <i className={`ph-bold ${icon} text-[1.3rem] text-green-ink`}></i>
              <h3 className="mt-[1.6rem] mb-[0.3rem] text-[0.98rem] font-semibold tracking-[-0.01em]">{title}</h3>
              <p className="text-[0.88rem] leading-normal text-ink-2">{text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
