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
import { getAllContent } from "@/lib/store";

export const revalidate = 60;

export default async function Home() {
  const content = await getAllContent();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services services={content.services} />
        <MassageRecovery />
        <Policies />
        <Testimonials testimonials={content.testimonials} />
        <FAQ />
        <Location hours={content.hours} contact={content.contact} />
        <Contact contact={content.contact} />
      </main>
      <Footer />
    </>
  );
}
