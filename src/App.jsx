import './global.css'
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Modalities   from "./components/Modalities";
import Plans        from "./components/Plans";
import Team         from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modalities />
        <Plans />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}