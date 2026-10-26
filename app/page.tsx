import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import AIProjects from "@/components/AIProjects";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 relative selection:bg-indigo-500/30 selection:text-white">
      {/* Interactive Custom Unit Pointer & Mesh */}
      <CustomCursor />
      <NeuralBackground />

      {/* Subtle Radial Grid Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(39 39 42 / 0.35) 1px, transparent 0)`,
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Nav />

      {/* Main Structural Flow */}
      <Hero />
      <Experience />
      <AIProjects />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
