import { Suspense, lazy } from 'react';
import { FiCode, FiServer, FiGitBranch, FiCpu } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { skillCategories } from '../data/skills';

const SkillsOrbit = lazy(() => import('../models/SkillsOrbit'));

const ICONS = { code: FiCode, server: FiServer, git: FiGitBranch, brain: FiCpu };

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="section-title">
            Tools I reach for <span className="neon-text">every day</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 h-[380px] md:h-[460px] lg:order-1" delay={0.1}>
            <Suspense
              fallback={<div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />}
            >
              <SkillsOrbit />
            </Suspense>
          </Reveal>

          <div className="order-1 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:order-2">
            {skillCategories.map((cat, i) => {
              const Icon = ICONS[cat.icon];
              return (
                <Reveal key={cat.title} delay={0.08 * i}>
                  <div className="glass-card h-full p-6 transition-all duration-300 hover:border-violet-neon/40 hover:shadow-neon-violet">
                    <Icon className="mb-3 text-violet-neon" size={20} />
                    <h3 className="mb-3 font-display text-base font-medium text-ink">
                      {cat.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
