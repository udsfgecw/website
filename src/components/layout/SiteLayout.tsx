import Footer from "./Footer";
import Nav from "./Nav";

/* Shared frame for the site's pages: the nav, the page itself and the footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* the nav gains its background once this scrolls out of view */}
      <div id="top-sentinel" className="absolute top-0 size-px" />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
