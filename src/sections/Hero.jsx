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
      <div className="absolute inset-0 bg-gradient-to-r from-void/40 via-void/10 to-transparent lg:from-void/55" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
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

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mx-auto hidden w-full max-w-[360px] lg:block"
        >
          {/* Ambient glow behind the portrait */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-neon/40 via-cyan-neon/25 to-transparent blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-neon/25 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />

          {/* Floating group: portrait + chips drift together */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-[2rem]"
              style={{
                maskImage: 'radial-gradient(ellipse 100% 105% at 50% 30%, black 45%, transparent 92%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 100% 105% at 50% 30%, black 45%, transparent 92%)',
              }}
            >
              <img
                src="/images/rishi-hero.png"
                alt="Rishi Raj Biswas"
                className="h-[440px] w-full object-cover"
              />
            </div>

            {/* Overlapping status cards */}
            <div className="absolute -left-6 top-10 flex items-center gap-2 rounded-lg border border-white/10 bg-void/90 px-3.5 py-2.5 shadow-glass backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-neon" />
              <p className="font-mono text-xs text-ink">workflow.trigger()</p>
            </div>

            <div className="absolute -right-6 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-lg border border-white/10 bg-void/90 px-3.5 py-2.5 shadow-glass backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-neon" />
              <p className="font-mono text-xs text-ink">AI: lead qualified</p>
            </div>

            <div className="absolute -left-6 bottom-10 flex items-center gap-2 rounded-lg border border-white/10 bg-void/90 px-3.5 py-2.5 shadow-glass backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-neon" />
              <p className="font-mono text-xs text-ink">API connected</p>
            </div>
          </motion.div>

          {/* Soft contact shadow that breathes opposite the float, selling the lift */}
          <motion.div
            animate={{ scaleX: [1, 0.82, 1], opacity: [0.4, 0.18, 0.4] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-1/2 -z-10 h-6 w-44 -translate-x-1/2 rounded-full bg-black/60 blur-xl"
          />
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
