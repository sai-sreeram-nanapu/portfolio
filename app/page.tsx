import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
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
        <Experience />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <Skills />
        <Education />
        <div className="section-divider" aria-hidden="true" />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
