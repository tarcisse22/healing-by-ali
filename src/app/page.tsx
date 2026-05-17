import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MassageRecovery from "@/components/MassageRecovery";
import Policies from "@/components/Policies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MassageRecovery />
        <Policies />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
