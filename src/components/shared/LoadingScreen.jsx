import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  '> ЗАПУСК СИСТЕМИ...',
  '> ПІДГОТОВКА ФАЙЛІВ...',
  '> ЗАВАНТАЖЕННЯ ШРИФТІВ...',
  '> [OK] ПРОЄКТИ_ЗНАЙДЕНО',
  '> [OK] МОТИВАЦІЯ_МАКСИМАЛЬНА',
  '> АВТОРИЗАЦІЯ: Кицмен Женя',
  '> КОМПІЛЯЦІЯ МОТИВАШКИ...',
  '> ██████████████████████████ 100%',
  '> ГОТОВО.',
];

export function LoadingScreen({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Blink cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 400);
    return () => clearInterval(cursorInterval);
  }, []);

  // Type lines
  useEffect(() => {
    if (currentLine < bootLines.length) {
      const delay = currentLine === bootLines.length - 1 ? 600 : 80 + Math.random() * 120;
      const timer = setTimeout(() => setCurrentLine((l) => l + 1), delay);
      return () => clearTimeout(timer);
    } else {
      // All lines done — hold for a moment then fade out
      const timer = setTimeout(() => setFadeOut(true), 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  // After fade out, remove
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => onComplete(), 600);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onComplete]);

  return (
    <AnimatePresence>
      {!fadeOut ? (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-bg)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Scan line overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 50%)',
              backgroundSize: '100% 4px',
              opacity: 0.4,
            }}
          />

          {/* Corner brackets */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: 'var(--color-primary)' }} />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2" style={{ borderColor: 'var(--color-primary)' }} />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: 'var(--color-orange)' }} />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: 'var(--color-orange)' }} />

          <div className="relative max-w-lg w-full px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <p
                className="font-heading text-xl tracking-[0.3em] uppercase"
                style={{ color: 'var(--color-primary)' }}
              >
                BEC::2026
              </p>
              <div className="h-[2px] mt-2" style={{ background: 'linear-gradient(90deg, var(--color-primary), transparent)' }} />
            </motion.div>

            {/* Boot lines */}
            <div className="font-mono text-xs md:text-sm space-y-1">
              {bootLines.slice(0, currentLine).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    color: line.includes('[OK]')
                      ? 'var(--color-primary)'
                      : line.includes('100%') || line.includes('READY')
                        ? 'var(--color-orange)'
                        : 'var(--color-text-muted)',
                  }}
                >
                  {line}
                </motion.p>
              ))}
              {currentLine < bootLines.length && (
                <span style={{ color: 'var(--color-primary)', opacity: showCursor ? 1 : 0 }}>█</span>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-1 w-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-elevated)' }}>
              <motion.div
                className="h-full"
                style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-orange))' }}
                initial={{ width: '0%' }}
                animate={{ width: `${(currentLine / bootLines.length) * 100}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[10000]"
          style={{ backgroundColor: 'var(--color-bg)' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </AnimatePresence>
  );
}
