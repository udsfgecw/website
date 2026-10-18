import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Progress from "./components/Progress";
import Alliance from "./components/Alliance";
import Join from "./components/Join";
import Footer from "./components/Footer";
import { useReveal } from "./lib/motion";

export default function App() {
  useReveal();

  return (
    <>
      <div id="top-sentinel" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Progress />
        <Alliance />
        <Join />
      </main>
      <Footer />
    </>
  );
}
