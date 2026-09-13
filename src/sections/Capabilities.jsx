import { FiLock, FiDatabase, FiCode, FiCreditCard, FiCpu, FiCloud } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { capabilities } from '../data/capabilities';

const ICONS = [FiLock, FiDatabase, FiCode, FiCreditCard, FiCpu, FiCloud];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Engineering Capabilities</p>
          <h2 className="section-title max-w-2xl">
            The layers underneath the <span className="neon-text">UI</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={cap.title} delay={0.06 * i}>
                <div className="glass-card h-full p-6 transition-all duration-300 hover:border-violet-neon/40 hover:shadow-neon-violet">
                  <Icon className="mb-3 text-violet-neon" size={20} />
                  <h3 className="mb-2 font-display text-base font-medium text-ink">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{cap.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
