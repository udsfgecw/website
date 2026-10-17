const FEATURES = [
  ["ph-house-line", "Student welfare", "Hostel, canteen, transport and fees, taken to the administration."],
  ["ph-books", "Academic concerns", "Exams, results, labs and KTU issues, followed until fixed."],
  ["ph-check-square-offset", "College union", "Putting students who listen into the seats that decide."],
  ["ph-megaphone", "Campaigns", "Conventions and events that bring the campus together."],
] as const;

export default function Work() {
  return (
    <section className="work wrap" id="work" aria-labelledby="work-title">
      <h2 id="work-title" className="statement">
        Students who listen, organise and follow through, so every voice at GEC Wayanad is{" "}
        <span className="hl">heard where it counts.</span>
      </h2>

      <ul className="features">
        {FEATURES.map(([icon, title, text]) => (
          <li className="feature" key={title}>
            <i className={`ph-bold ${icon}`}></i>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
