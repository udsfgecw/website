import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Alliance from "./components/Alliance";
import Values from "./components/Values";
import Updates from "./components/Updates";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div id="top-sentinel" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Alliance />
        <Values />
        <Updates />
        <Join />
      </main>
      <Footer />
    </>
  );
}
