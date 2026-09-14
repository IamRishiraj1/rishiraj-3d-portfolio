import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiDownload, FiArrowLeft, FiCheck, FiAlertCircle } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { flagshipProjects } from '../data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = flagshipProjects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | Rishi Raj Biswas`;
    }
    return () => {
      document.title = 'Rishi Raj Biswas | Full-Stack Developer & AI Automation';
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <article className="relative pt-28 pb-20 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <Link
            to="/#work"
            data-cursor="hover"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-cyan-neon"
          >
            <FiArrowLeft size={13} /> Back to Portfolio
          </Link>

          <p className="eyebrow mb-4">
            Case Study · {project.role} · Built with AI-Assisted Development
          </p>
          <h1 className="section-title max-w-3xl">{project.title}</h1>
          <p className="mt-2 font-mono text-sm text-violet-neon">{project.subtitle}</p>
          <p className="mt-5 max-w-2xl font-display text-xl font-medium text-cyan-neon md:text-2xl">
            "{project.tagline}"
          </p>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{project.description}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={project.live} target="_blank" rel="noreferrer" data-cursor="hover" className="btn-primary">
              <FiExternalLink size={14} /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" data-cursor="hover" className="btn-outline">
              <FiGithub size={14} /> GitHub
            </a>
            <a
              href={project.caseStudyPdf}
              download={`${project.id}-case-study.pdf`}
              data-cursor="hover"
              className="flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
            >
              <FiDownload size={13} /> Download Case Study PDF
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 grid grid-cols-2 gap-4 border-y border-white/10 py-6 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl font-semibold text-cyan-neon md:text-3xl">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-ink-faint">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {project.image && (
          <Reveal delay={0.2}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-void-soft">
              <img src={project.image} alt={`${project.title} homepage`} className="w-full object-contain" />
            </div>
          </Reveal>
        )}

        {/* Demo access, if applicable */}
        {project.demo && (
          <Reveal delay={0.1}>
            <Section title="Try It Yourself">
              <p className="text-ink-muted">{project.demo.note}</p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="glass-card p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Email</p>
                  <p className="mt-1 font-mono text-sm text-ink">{project.demo.email}</p>
                </div>
                <div className="glass-card p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Password</p>
                  <p className="mt-1 font-mono text-sm text-ink">{project.demo.password}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex gap-2 text-ink-muted">
                  <FiCheck className="mt-0.5 shrink-0 text-cyan-neon" size={15} />
                  <span><span className="text-ink">Open:</span> {project.demo.open}</span>
                </p>
                <p className="flex gap-2 text-ink-muted">
                  <FiAlertCircle className="mt-0.5 shrink-0 text-violet-neon" size={15} />
                  <span><span className="text-ink">Restricted:</span> {project.demo.restricted}</span>
                </p>
              </div>
            </Section>
          </Reveal>
        )}

        {/* Problem / Goal / Solution */}
        <Reveal delay={0.1}>
          <Section title="The Problem">
            <p className="text-ink-muted">{project.problem}</p>
          </Section>
        </Reveal>
        <Reveal delay={0.1}>
          <Section title="The Goal">
            <p className="text-ink-muted">{project.goal}</p>
          </Section>
        </Reveal>
        <Reveal delay={0.1}>
          <Section title="The Solution">
            <p className="text-ink-muted">{project.solution}</p>
          </Section>
        </Reveal>

        {/* Architecture */}
        <Reveal delay={0.1}>
          <Section title="System Architecture">
            <p className="text-ink-muted">{project.architecture.description}</p>
            <div className="mt-6 space-y-2">
              {project.architecture.flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-neon/40 font-mono text-[10px] text-cyan-neon">
                    {i + 1}
                  </span>
                  <span className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-ink-muted">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Tech stack */}
        <Reveal delay={0.1}>
          <Section title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Key engineering decisions */}
        <Reveal delay={0.1}>
          <Section title="Key Engineering Decisions">
            <div className="space-y-6">
              {project.keyDecisions.map((d) => (
                <div key={d.title} className="glass-card p-6">
                  <h3 className="font-display text-base font-medium text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{d.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Challenges + fixes */}
        <Reveal delay={0.1}>
          <Section title="Challenges Found & Fixed">
            <p className="mb-6 text-sm text-ink-faint">
              Real engineering isn't writing code that looks right — it's catching what's wrong
              before a user does. Found during development, review, and QA — not by a customer
              in production.
            </p>
            <div className="space-y-5">
              {project.challenges.map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 p-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-violet-neon">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{c.description}</p>
                  <p className="mt-2 text-sm text-cyan-neon/90">
                    <span className="text-ink-faint">Fixed — </span>
                    {c.fix}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Security */}
        <Reveal delay={0.1}>
          <Section title="Security & Reliability">
            <ul className="space-y-3">
              {project.security.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-muted">
                  <FiCheck className="mt-0.5 shrink-0 text-cyan-neon" size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        {/* Screenshots */}
        <Reveal delay={0.1}>
          <Section title="Product Walkthrough">
            <p className="mb-6 text-sm text-ink-faint">
              Every screenshot below is from the live, deployed site.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {project.screenshots.map((s) => (
                <div key={s.title} className="glass-card overflow-hidden">
                  <img src={s.src} alt={s.title} loading="lazy" className="w-full object-cover" />
                  <div className="p-5">
                    <h4 className="font-display text-sm font-medium text-ink">{s.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{s.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Status table */}
        <Reveal delay={0.1}>
          <Section title="Project Status">
            <div className="overflow-hidden rounded-xl border border-white/10">
              {project.statusTable.map((row, i) => (
                <div
                  key={row.area}
                  className={`flex items-center justify-between px-5 py-3 text-sm ${
                    i !== project.statusTable.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <span className="text-ink-muted">{row.area}</span>
                  <span className="font-mono text-xs text-cyan-neon">{row.status}</span>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* What I'd improve next */}
        {project.improveNext && (
          <Reveal delay={0.1}>
            <Section title="What I'd Improve Next">
              <p className="mb-4 text-sm text-ink-faint">
                Every item on the original build roadmap is done — but "done" isn't the same as
                "nothing left to improve."
              </p>
              <ul className="space-y-2">
                {project.improveNext.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">
                    · {item}
                  </li>
                ))}
              </ul>
            </Section>
          </Reveal>
        )}

        {/* Closing CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
            <div>
              <p className="font-display text-lg font-medium text-ink">
                Interested in the full build, or working together?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href={project.live} target="_blank" rel="noreferrer" data-cursor="hover" className="btn-primary">
                <FiExternalLink size={14} /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" data-cursor="hover" className="btn-outline">
                <FiGithub size={14} /> GitHub
              </a>
              <Link to="/#contact" data-cursor="hover" className="btn-outline">
                Let's Talk
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-16">
      <h2 className="mb-6 font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      {children}
    </div>
  );
}
