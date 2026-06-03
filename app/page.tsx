import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AISystems } from "@/components/AISystems";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Skills />
        <div className="section-divider" aria-hidden="true" />
        <Education />
        <div className="section-divider" aria-hidden="true" />
        <AISystems />
        <div className="section-divider" aria-hidden="true" />
        <Blog />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
