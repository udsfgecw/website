export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-4 py-7 text-[0.88rem] text-ink-2 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
        <a className="inline-flex items-center gap-[0.65rem] text-foreground" href="#top" aria-label="Back to top">
          <img className="size-10 rounded-[10px]" src="/assets/logo-512.png" alt="" width={40} height={40} loading="lazy" />
          <span className="text-[1.02rem] font-bold tracking-[-0.02em] max-[380px]:hidden">UDSF GECW</span>
        </a>
        <p>Government Engineering College Wayanad, Thalappuzha, Mananthavady, Kerala</p>
        <p>&copy; {new Date().getFullYear()} UDSF GECW</p>
      </div>
    </footer>
  );
}
