import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// =============================================
// 1. KONAMI CODE → Matrix Rain
// =============================================
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function MatrixRain({ onDone }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const words = ['БЕК', 'КАСКА', 'РЕВО', 'ХУЯК'];
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 11, 13, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = words[Math.floor(Math.random() * words.length)];
        ctx.fillStyle = Math.random() > 0.95 ? '#FF5F2E' : '#EEA225';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);
    const timeout = setTimeout(() => onDone(), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        className="relative z-10 text-center px-8 py-6"
        style={{ backgroundColor: 'rgba(11,11,13,0.85)', border: '2px solid var(--color-primary)' }}
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <p className="font-heading text-2xl tracking-widest mb-2" style={{ color: 'var(--color-primary)' }}>
          Оу їбать ти знаєш код конамі
        </p>
        <p className="font-mono text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
          підказка: ЛОГО П&apos;ЯТЬ РАЗІВ
        </p>
      </motion.div>
    </motion.div>
  );
}

// =============================================
// 2. LOGO 5-CLICK → Party Mode
// =============================================


// =============================================
// MAIN HOOK
// =============================================
export function useEasterEggs() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const konamiIndex = useRef(0);
  const logoClicks = useRef(0);
  const logoTimer = useRef(null);

  useEffect(() => {
    // === Console ASCII art ===
    console.log(
      '%c' +
      '╔══════════════════════════════════════════╗\n' +
      '║   Привіт, тому хто заглянув у консоль!    ║\n' +
      '║   Це типу як перша пасхалка              ║\n' +
      '║   Але я не придумав що тут вставити тому ║\n' +
      '║   Спробуй Konami Code на сайті           ║\n' +
      '║                                          ║\n' +
      '╚══════════════════════════════════════════╝',
      'color: #EEA225; font-size: 12px; font-family: monospace;'
    );

    const handleKeyDown = (e) => {
      // --- Konami ---
      if (e.key === KONAMI[konamiIndex.current]) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI.length) {
          konamiIndex.current = 0;
          setMatrixActive(true);
        }
      } else {
        konamiIndex.current = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Logo click handler
  const handleLogoClick = () => {
    logoClicks.current++;
    clearTimeout(logoTimer.current);
    logoTimer.current = setTimeout(() => { logoClicks.current = 0; }, 1500);

    if (logoClicks.current >= 5) {
      logoClicks.current = 0;
      setPartyMode(true);
    }
  };

  // Render component
  const EasterEggOverlays = () => (
    <AnimatePresence>
      {matrixActive && (
        <MatrixRain key="matrix" onDone={() => setMatrixActive(false)} />
      )}
    </AnimatePresence>
  );

  return { EasterEggOverlays, handleLogoClick, partyMode };
}
