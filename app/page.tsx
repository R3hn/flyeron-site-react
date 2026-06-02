import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <Differentials />
      <Services />
      <Testimonials />
      <Partners />
      <About />
      <Contact />
      <FAQ />
      <Blog />
      <Footer />
    </main>
  );
}
