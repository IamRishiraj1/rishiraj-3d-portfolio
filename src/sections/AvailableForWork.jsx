import { FiArrowRight } from 'react-icons/fi';
import Reveal from '../components/Reveal';

export default function AvailableForWork() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Availability</p>
          <h2 className="section-title">
            Have a business workflow that could be{' '}
            <span className="neon-text">automated</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-ink-muted md:text-lg">
            I help businesses build web applications, AI assistants, admin dashboards, and
            automated lead-capture workflows.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="#contact" data-cursor="hover" className="btn-primary mt-8 inline-flex">
            Let's Discuss Your Project <FiArrowRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
