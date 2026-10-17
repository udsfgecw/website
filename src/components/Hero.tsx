export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero__bg">
        <source type="image/webp" srcSet="/assets/hero-900.webp 900w, /assets/hero.webp 1440w" sizes="100vw" />
        <img
          src="/assets/hero.jpg"
          alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
          width={1440}
          height={1170}
          fetchPriority="high"
        />
      </picture>
      <div className="hero__veil" aria-hidden="true"></div>

      <div className="hero__inner wrap">
        <div className="hero__top">
          <div className="hero__head">
            <h1 id="hero-title" className="hero__title">
              <span className="hero__ml" lang="ml">GEC വയനാടിന്റെ</span>
              <span className="wordmark" aria-label="UDSF"><span className="wm-g">UD</span><span className="wm-b">SF</span></span>
            </h1>
          </div>

          <div className="hero__aside">
            <p className="hero__sub">Standing with every student at Government Engineering College Wayanad, on the issues that matter on campus.</p>
            <div className="hero__ctas">
              <a className="btn btn--dark" href="#join">Join UDSF <i className="ph-bold ph-arrow-right"></i></a>
              <a className="btn btn--link" href="#work">What we do</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
