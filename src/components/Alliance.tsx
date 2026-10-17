export default function Alliance() {
  return (
    <section className="alliance wrap" id="alliance" aria-labelledby="alliance-title">
      <header className="section-head">
        <p className="kicker">The alliance</p>
        <h2 id="alliance-title" className="h2">Two organisations. One front.</h2>
      </header>

      <div className="alliance__grid">
        <article className="org org--ksu">
          <h3>KSU</h3>
          <p className="org__full">Kerala Students Union</p>
          <p>The student organisation of the Congress movement in Kerala, active on campuses across the state for generations.</p>
        </article>
        <span className="alliance__plus" aria-hidden="true">+</span>
        <article className="org org--msf">
          <h3>MSF</h3>
          <p className="org__full">Muslim Students Federation</p>
          <p>The student wing of the Indian Union Muslim League, with a strong presence in colleges throughout Kerala.</p>
        </article>
      </div>
    </section>
  );
}
