import { FiArrowUp, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { socials } from '../data/experience';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-ink">Rishi Raj Biswas</p>
            <p className="mt-2 text-sm text-ink-muted">
              Full-Stack Developer building AI-powered business applications and automation
              systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Site
              </p>
              <ul className="space-y-2">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      data-cursor="hover"
                      className="text-sm text-ink-muted transition-colors hover:text-cyan-neon"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-cyan-neon"
                  >
                    <FiLinkedin size={13} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-cyan-neon"
                  >
                    <FiGithub size={13} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${socials.email}`}
                    data-cursor="hover"
                    className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-cyan-neon"
                  >
                    <FiMail size={13} /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} Rishi Raj Biswas. All rights reserved.
          </p>
          <a
            href="#home"
            data-cursor="hover"
            className="flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-cyan-neon"
          >
            Back to top <FiArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
