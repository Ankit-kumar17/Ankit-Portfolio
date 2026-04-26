import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/ui/CustomCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Scroll Progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[10000] origin-left"
        style={{ scaleX }}
      />

      <CustomCursor />

      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}

      <div
        className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Hackathons />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
