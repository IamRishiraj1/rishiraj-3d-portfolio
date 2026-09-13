import Reveal from '../components/Reveal';
import { howIWork } from '../data/howIWork';

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">How I Work</p>
          <h2 className="section-title max-w-2xl">
            Brief → Architecture → Development → Integration → Testing →{' '}
            <span className="neon-text">Production</span>.
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-8">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-neon via-violet-neon to-transparent" />

          {howIWork.map((step, i) => (
            <Reveal key={step.index} delay={0.08 * i} className="relative mb-10 last:mb-0">
              <span className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-cyan-neon bg-void shadow-neon-cyan" />
              <p className="font-mono text-xs uppercase tracking-widest text-violet-neon">
                {step.index}
              </p>
              <h3 className="mt-1 font-display text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
