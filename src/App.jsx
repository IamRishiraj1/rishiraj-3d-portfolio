import { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import StarfieldBackground from './components/StarfieldBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhatIBuild from './sections/WhatIBuild';
import FeaturedWork from './sections/FeaturedWork';
import Projects from './sections/Projects';
import Capabilities from './sections/Capabilities';
import Skills from './sections/Skills';
import HowIWork from './sections/HowIWork';
import About from './sections/About';
import Certificates from './sections/Certificates';
import AvailableForWork from './sections/AvailableForWork';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-void bg-grid-glow">
      <Loader onDone={() => setLoading(false)} />
      <CustomCursor />
      <StarfieldBackground />

      <div
        className="relative z-10 transition-opacity duration-700"
        style={{ opacity: loading ? 0 : 1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <WhatIBuild />
          <FeaturedWork />
          <Projects />
          <Capabilities />
          <Skills />
          <HowIWork />
          <About />
          <Certificates />
          <AvailableForWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
