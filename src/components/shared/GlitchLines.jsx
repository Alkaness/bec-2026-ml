import { useEffect, useRef } from 'react';

export function GlitchLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Horizontal scan beams that sweep down the page
    const beams = [];
    const spawnBeam = () => {
      beams.push({
        y: -2,
        speed: 1.5 + Math.random() * 3,
        alpha: 0.03 + Math.random() * 0.07,
        height: 1 + Math.floor(Math.random() * 3),
        color: Math.random() > 0.5 ? '#EEA225' : '#FF5F2E',
      });
    };

    // Glitch blocks
    const glitchBlocks = [];
    const spawnGlitch = () => {
      const w = 30 + Math.random() * 200;
      const h = 2 + Math.random() * 8;
      glitchBlocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        w,
        h,
        alpha: 0.04 + Math.random() * 0.08,
        life: 3 + Math.random() * 8,
        color: Math.random() > 0.5 ? '#EEA225' : '#FF5F2E',
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new beams occasionally
      if (Math.random() > 0.96) spawnBeam();
      if (Math.random() > 0.97) spawnGlitch();

      // Draw beams
      for (let i = beams.length - 1; i >= 0; i--) {
        const beam = beams[i];
        beam.y += beam.speed;
        ctx.fillStyle = beam.color;
        ctx.globalAlpha = beam.alpha;
        ctx.fillRect(0, beam.y, canvas.width, beam.height);
        if (beam.y > canvas.height) beams.splice(i, 1);
      }

      // Draw glitch blocks
      for (let i = glitchBlocks.length - 1; i >= 0; i--) {
        const block = glitchBlocks[i];
        block.life -= 0.1;
        ctx.fillStyle = block.color;
        ctx.globalAlpha = block.alpha * (block.life / 10);
        ctx.fillRect(block.x, block.y, block.w, block.h);
        if (block.life <= 0) glitchBlocks.splice(i, 1);
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[6]"
      style={{ opacity: 0.6 }}
    />
  );
}
