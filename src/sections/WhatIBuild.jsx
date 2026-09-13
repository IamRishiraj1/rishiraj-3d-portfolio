import { FiLayers, FiCpu, FiTarget, FiGrid } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { whatIBuild } from '../data/whatIBuild';

const ICONS = [FiLayers, FiCpu, FiTarget, FiGrid];

export default function WhatIBuild() {
  return (
    <section id="build" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">What I Build</p>
          <h2 className="section-title max-w-2xl">
            I build <span className="neon-text">business systems</span>, not just websites.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIBuild.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.index} delay={0.08 * i}>
                <div className="glass-card group h-full p-6 transition-all duration-300 hover:border-cyan-neon/40 hover:shadow-neon-cyan">
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="text-cyan-neon" size={22} />
                    <span className="font-mono text-xs text-ink-faint">{item.index}</span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-medium text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
