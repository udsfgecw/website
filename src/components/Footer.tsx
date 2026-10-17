export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner wrap">
        <a className="brand" href="#top" aria-label="Back to top">
          <img className="brand__logo" src="/assets/logo-512.png" alt="" width={40} height={40} loading="lazy" />
          <span className="brand__name">UDSF GECW</span>
        </a>
        <p className="footer__addr">Government Engineering College Wayanad, Thalappuzha, Mananthavady, Kerala</p>
        <p className="footer__copy">&copy; {new Date().getFullYear()} UDSF GECW</p>
      </div>
    </footer>
  );
}
