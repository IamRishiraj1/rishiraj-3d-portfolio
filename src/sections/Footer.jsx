import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Rishi Raj Biswas. Built with React, Three.js &amp; a lot of coffee.
        </p>
        <a
          href="#home"
          data-cursor="hover"
          className="flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-cyan-neon"
        >
          Back to top <FiArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}
