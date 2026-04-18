import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const nameChars = 'ЙО, ЦЕ ЖЕНЯ'.split('');

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, x: -10, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120 },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >


      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Animated heading with Glitch effect */}
        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest mb-6 flex flex-wrap justify-center uppercase cyber-glitch-text"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {nameChars.map((char, i) => {
            const isName = char === 'Ж' || char === 'Е' || char === 'Н' || char === 'Я';
            return (
              <motion.span
                key={i}
                variants={letterVariant}
                className={char === ' ' ? 'w-3 sm:w-4 md:w-8' : ''}
                style={{ 
                  color: isName ? 'var(--color-primary)' : 'var(--color-text)',
                  textShadow: isName ? '0 0 8px var(--color-primary-deep)' : 'none'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Tagline */}
        <motion.div
           className="border-l-4 pl-4 mb-10 text-left self-center w-full max-w-2xl bg-black/40 backdrop-blur-sm p-4 border"
           style={{ borderColor: 'var(--color-orange)', borderLeftColor: 'var(--color-primary)' }}
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1.0, duration: 0.5 }}
        >
          <p className="font-mono text-xs sm:text-sm md:text-base tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
            $ system.role = "IT Responsible"
          </p>
          <p className="font-mono text-xs sm:text-sm md:text-base tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
            $ system.event = "BEC 2026"
          </p>
          <p className="text-base sm:text-lg md:text-xl font-medium mt-3 typing-cursor" style={{ color: 'var(--color-text)' }}>
            І ЦЕ Є МОЯ МОТИВАШКА НА <span style={{ color: 'var(--color-primary)' }} className="font-heading uppercase tracking-wider">IT RESP'A</span>
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="cyber-button px-8 py-3 bg-opacity-20 hover:bg-opacity-100 transition-all duration-300 relative group"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#000',
              boxShadow: '4px 4px 0px var(--color-orange-muted)',
            }}
          >
             Мої проєкти
          </a>
          <a
            href="#why-me"
            className="cyber-button px-8 py-3 transition-all duration-300 hover:scale-105"
            style={{
              border: '2px solid var(--color-primary)',
              color: 'var(--color-primary)',
              backgroundColor: 'transparent',
              boxShadow: '4px 4px 0px var(--color-primary-dark)',
            }}
          >
            Чому я?
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <a href="#about" aria-label="Прокрутити вниз" className="float-animation block">
          <ChevronDown
            size={36}
            style={{ color: 'var(--color-primary)', filter: 'drop-shadow(0 0 6px var(--color-primary))' }}
          />
        </a>
      </motion.div>
    </section>
  );
}
