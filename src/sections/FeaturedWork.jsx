import { FiExternalLink, FiGithub, FiFileText, FiArrowRight } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { flagshipProjects } from '../data/caseStudies';

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Featured Work</p>
          <h2 className="section-title max-w-2xl">
            Systems that prove I can <span className="neon-text">engineer, not just build UI</span>.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {flagshipProjects.map((project, i) => (
            <Reveal key={project.id} delay={0.1}>
              <FlagshipCard project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipCard({ project, reverse }) {
  return (
    <div className="glass-card overflow-hidden">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
      >
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className="group relative block h-64 overflow-hidden border-b border-white/10 bg-void-soft lg:h-full lg:border-b-0 lg:border-r"
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
        </a>

        <div className="flex flex-col p-6 md:p-10">
          <span className="eyebrow mb-2 text-violet-neon/80">{project.subtitle}</span>
          <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/10 py-5 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-xl font-semibold text-cyan-neon md:text-2xl">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-ink-faint">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <p>
              <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-neon">
                Problem —{' '}
              </span>
              <span className="text-ink-muted">{project.problem}</span>
            </p>
            <p>
              <span className="font-mono text-[11px] uppercase tracking-wider text-violet-neon">
                Solution —{' '}
              </span>
              <span className="text-ink-muted">{project.solution}</span>
            </p>
            <p>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink">
                Result —{' '}
              </span>
              <span className="text-ink-muted">{project.result}</span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={project.live} target="_blank" rel="noreferrer" data-cursor="hover" className="btn-primary">
              <FiExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="btn-outline"
            >
              <FiFileText size={14} /> View Case Study
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
            >
              <FiGithub size={14} /> GitHub
            </a>
          </div>

          <a
            href={project.caseStudyPdf}
            download={`${project.id}-case-study.pdf`}
            data-cursor="hover"
            className="mt-4 flex items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-ink"
          >
            Download Full Case Study <FiArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
