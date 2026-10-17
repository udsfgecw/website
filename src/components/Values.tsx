const VALUES = [
  ["Together", "KSU and MSF work as one team, so you never have to pick a side to get help."],
  ["Your say", "Every student has a vote and a voice, from first year to final year."],
  ["Everyone in", "Whatever your background or beliefs, this campus is yours too."],
  ["Students first", "Hostel, exams, fees and buses. Your daily problems come before politics."],
] as const;

export default function Values() {
  return (
    <section className="values" id="values" aria-labelledby="values-title">
      <div className="values__inner wrap">
        <header className="values__head">
          <p className="kicker">Our promise</p>
          <h2 id="values-title" className="h2">What you can expect from us</h2>
        </header>
        <ol className="values__list">
          {VALUES.map(([word, text], i) => (
            <li key={word}>
              <span className="values__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="values__word">{word}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
