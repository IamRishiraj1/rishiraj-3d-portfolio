import Hero from '../sections/Hero';
import WhatIBuild from '../sections/WhatIBuild';
import FeaturedWork from '../sections/FeaturedWork';
import Projects from '../sections/Projects';
import Capabilities from '../sections/Capabilities';
import Skills from '../sections/Skills';
import HowIWork from '../sections/HowIWork';
import About from '../sections/About';
import Certificates from '../sections/Certificates';
import AvailableForWork from '../sections/AvailableForWork';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
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
    </>
  );
}
