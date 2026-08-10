import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Journey</p>
          <h2 className="section-title">
            From first commit to <span className="neon-text">AI-powered builds</span>.
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-8">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-neon via-violet-neon to-transparent" />

          {experience.map((item, i) => (
            <Reveal key={item.id} delay={0.12 * i} className="relative mb-14 last:mb-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i + 0.2, type: 'spring', stiffness: 300 }}
                className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-cyan-neon bg-void shadow-neon-cyan"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-violet-neon">
                {item.org}
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium text-ink">{item.role}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
