import { FEED } from "../config";

export default function Join() {
  return (
    <section className="join wrap" id="join" aria-labelledby="join-title">
      <div className="join__panel">
        <img className="join__logo" src="/assets/logo-512.png" alt="" width={88} height={88} loading="lazy" />
        <h2 id="join-title" className="h2">Be part of it.</h2>
        <p>First years, seniors, anyone who wants a better campus. Find us at college, or send us a message.</p>
        <a className="btn btn--dark" href={FEED.profile} target="_blank" rel="noopener">
          <i className="ph-bold ph-instagram-logo"></i> Message us on Instagram
        </a>
      </div>
    </section>
  );
}
