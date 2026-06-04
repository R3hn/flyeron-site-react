import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Cases from "@/components/Cases";

export default function Home() {
  return (
    <main style={{ background: "#0E296B", minHeight: "100vh" }}>
      <Hero />
      <Method />
      <Differentials />
      <Services />
      <Process />
      <Cases />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
