import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Pricing />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}