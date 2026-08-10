import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';
import { socials } from '../data/experience';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="section-title">
              Things I've <span className="neon-text">built &amp; shipped</span>.
            </h2>
          </div>
          <a
            href={socials.githubRepos}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="btn-outline"
          >
            All repositories <FiArrowUpRight />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * (i % 3)}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="glass-card group flex h-full flex-col overflow-hidden"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-violet-neon/15 via-void-soft to-cyan-neon/10">
        <span className="font-display text-3xl font-semibold tracking-tight text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:text-white/15">
          {project.title}
        </span>
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-cyan-neon/40 bg-void/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-neon">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-medium text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="flex items-center gap-1.5 font-mono text-xs text-cyan-neon transition-opacity hover:opacity-80"
          >
            <FiExternalLink size={13} /> Live Demo
          </a>
          <a
            href={socials.githubRepos}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
          >
            <FiGithub size={13} /> View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
