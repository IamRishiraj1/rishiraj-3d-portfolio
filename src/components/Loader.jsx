import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  'booting rishiraj.dev',
  'compiling components...',
  'linking neural pathways...',
  'calibrating 3D scene...',
  'ready.',
];

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.floor(p * 100));
      setLineIndex(Math.min(LINES.length - 1, Math.floor(p * LINES.length)));
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 350);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-64 text-center">
            <div className="mb-4 font-display text-2xl font-semibold tracking-tight text-ink">
              RR<span className="neon-text">.</span>dev
            </div>
            <div className="mb-3 h-[2px] w-full overflow-hidden rounded bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-neon to-violet-neon"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-xs text-ink-muted">
              {LINES[lineIndex]} <span className="animate-blink">▌</span>
            </div>
            <div className="mt-1 font-mono text-[10px] text-ink-faint">{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
