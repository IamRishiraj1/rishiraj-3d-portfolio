import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload } from 'react-icons/fi';

const HeroScene = lazy(() => import('../models/HeroScene'));

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [quality, setQuality] = useState('high');

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const isSmall = window.innerWidth < 768;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isSmall || isCoarse) setQuality('low');
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        {ready && (
          <Suspense fallback={null}>
            <HeroScene quality={quality} />
          </Suspense>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/20 to-void" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow mb-5 max-w-2xl !normal-case tracking-normal md:!tracking-[0.15em]"
        >
          AI Automation Engineer&nbsp;|&nbsp;Full-Stack AI Developer&nbsp;|&nbsp;React, Python &amp;
          TypeScript&nbsp;|&nbsp;AI-Powered Interfaces&nbsp;|&nbsp;LLM APIs&nbsp;|&nbsp;Lead Capture
          &amp; Workflow Automation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl"
        >
          AI-Powered
          <br />
          Full-Stack <span className="neon-text">Developer</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 max-w-xl font-body text-base text-ink-muted md:text-lg"
        >
          Hi, I'm <span className="text-ink">Rishi Raj Biswas</span>. I build modern web
          applications, AI-powered interfaces, business automation systems and intelligent
          workflows with React, JavaScript, Python, APIs and LLMs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" data-cursor="hover" className="btn-primary">
            Hire Me
          </a>
          <a href="/resume.pdf" download data-cursor="hover" className="btn-outline">
            <FiDownload size={14} /> Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="hover"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
