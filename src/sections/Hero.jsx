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
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-transparent md:via-void/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow mb-5"
        >
          Full-Stack Development · AI Automation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-6xl"
        >
          Full-Stack Developer Building{' '}
          <span className="neon-text">AI-Powered Business Applications</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 max-w-xl font-body text-base text-ink-muted md:text-lg"
        >
          I build production-ready web applications, AI automation systems, and business
          workflows using React, TypeScript, Node.js, PostgreSQL, and modern AI APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#work" data-cursor="hover" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" data-cursor="hover" className="btn-outline">
            Let's Work Together
          </a>
          <a href="/resume.pdf" download data-cursor="hover" className="btn-outline">
            <FiDownload size={14} /> Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#build"
        data-cursor="hover"
        aria-label="Scroll to What I Build"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
