import { FiCode, FiCpu, FiLayers, FiZap } from 'react-icons/fi';
import Reveal from '../components/Reveal';

const CARDS = [
  {
    icon: FiCode,
    title: 'Full-Stack Craft',
    text: 'React front ends and Python/Django back ends built with clean, maintainable structure.',
  },
  {
    icon: FiCpu,
    title: 'AI-Augmented Workflow',
    text: 'I use AI tooling to design, debug and ship faster — without cutting corners on quality.',
  },
  {
    icon: FiLayers,
    title: 'Product Thinking',
    text: 'Every project starts from the user experience, not just the tech stack.',
  },
  {
    icon: FiZap,
    title: 'Performance First',
    text: 'Fast load times, lazy-loaded assets, and smooth interactions — on any device.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="section-title max-w-2xl">
            An engineer who ships,
            <br /> powered by <span className="neon-text">AI-native</span> tooling.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-ink-muted md:text-lg">
            Frontend-focused web developer skilled in React, JavaScript and Python/Django, with
            a portfolio of deployed web applications spanning dashboards, trackers and utility
            tools. Experienced across junior development work, freelance client projects and AI
            automation projects, with a solid foundation in cybersecurity and digital skills
            training. I'm a quick learner who enjoys shipping clean, functional, well-designed
            products — now with an AI-first workflow layered on top.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={0.08 * i}>
              <div className="glass-card group h-full p-6 transition-all duration-300 hover:border-cyan-neon/40 hover:shadow-neon-cyan">
                <c.icon className="mb-4 text-cyan-neon" size={22} />
                <h3 className="mb-2 font-display text-lg font-medium text-ink">{c.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
