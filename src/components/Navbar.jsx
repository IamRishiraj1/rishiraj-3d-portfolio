import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'border-b border-white/10 bg-void/70 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight" data-cursor="hover">
            RR<span className="neon-text">.</span>dev
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-cursor="hover"
                  className="font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-cyan-neon"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              data-cursor="hover"
              aria-label="Toggle theme"
              className="rounded-full border border-white/10 p-2.5 text-ink-muted transition-colors hover:border-cyan-neon/50 hover:text-cyan-neon"
            >
              {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
            <a href="/resume.pdf" download data-cursor="hover" className="btn-outline">
              <FiDownload size={14} /> Resume
            </a>
            <a href="#contact" data-cursor="hover" className="btn-primary">
              Hire Me
            </a>
          </div>

          <button
            className="text-ink md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/98 px-8 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">
                RR<span className="neon-text">.</span>dev
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <FiX size={24} />
              </button>
            </div>
            <ul className="mt-14 flex flex-col gap-7">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-medium text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="rounded-full border border-white/10 p-3 text-ink-muted"
              >
                {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
              <a href="/resume.pdf" download className="btn-outline flex-1 justify-center">
                <FiDownload size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
