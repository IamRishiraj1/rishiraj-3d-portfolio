import { FiAward, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Certifications</p>
          <h2 className="section-title">
            Verified <span className="neon-text">skill milestones</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={0.08 * i}>
              <motion.a
                href={c.file}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                whileHover={{ y: -6 }}
                className="glass-card group flex h-full items-start gap-4 p-6 transition-all duration-300 hover:border-cyan-neon/40 hover:shadow-neon-cyan"
              >
                <div className="mt-1 rounded-xl border border-cyan-neon/30 bg-cyan-neon/5 p-3 text-cyan-neon">
                  <FiAward size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-medium text-ink">{c.title}</h3>
                  <p className="mt-1 font-mono text-xs text-violet-neon">{c.issuer}</p>
                  <p className="mt-2 text-sm text-ink-muted">{c.meta}</p>
                </div>
                <FiExternalLink
                  className="mt-1 text-ink-faint transition-colors group-hover:text-cyan-neon"
                  size={16}
                />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
