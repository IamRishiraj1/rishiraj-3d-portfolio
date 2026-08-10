import { useEffect, useRef } from 'react';

export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, stars;
    let mouseX = 0;
    let mouseY = 0;
    let raf;

    const isSmall = window.innerWidth < 768;
    const STAR_COUNT = isSmall ? 90 : 220;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const init = () => {
      stars = [...Array(STAR_COUNT)].map(() => ({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        r: Math.random() * 1.2 + 0.2,
      }));
    };

    resize();
    init();
    window.addEventListener('resize', () => {
      resize();
      init();
    });

    const onMove = (e) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2 + mouseX * 12, height / 2 + mouseY * 12);

      stars.forEach((s) => {
        s.z -= 0.4;
        if (s.z <= 0) s.z = width;
        const k = 128 / s.z;
        const sx = s.x * k;
        const sy = s.y * k;
        const size = (1 - s.z / width) * 1.8;
        const alpha = 1 - s.z / width;
        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha * 0.8})`;
        ctx.arc(sx, sy, Math.max(size, 0.2), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
