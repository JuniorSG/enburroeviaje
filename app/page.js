
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero";
import Eventos from "./pages/Eventos";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export const metadata = {
  title: "Burro e Viaje",
  description: "Podcast",
};

export default function Home() {
  
  return (
    <main className="bg-slate-900 text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll hidden-scroll">
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id="hero" className="snap-start">
      <Hero/>
      </section>
      {/* Eventos */}
      <section id="eventos" className="snap-center">
      <Eventos/>
      </section>
      {/* Merch ___TD___ Seccion para luego */}
      {/* <section id="merch" className="snap-center">
      <Merch/>
      </section> */}
      {/* Contact me */}
      {/* <section id="contact" className="snap-center"> */}
        <Contact/>
      {/* </section> */}
      {/* Footer */}
      <section id="footer" className="snap-center">
        <Footer/>
      </section>

    </main>
  );
}
