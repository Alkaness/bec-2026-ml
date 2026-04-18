import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import becLogo from '../../assets/BEC Logo Final.svg';

const navLinks = [
  { label: 'Про мене', href: '#about' },
  { label: 'Чому я', href: '#why-me' },
  { label: 'Навички', href: '#skills' },
  { label: 'Проєкти', href: '#projects' },
  { label: 'GitHub', href: 'https://github.com/Alkaness', external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(11, 11, 13, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-orange-muted)' : '1px solid transparent',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={becLogo}
            alt="BEC Logo"
            className="h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--color-primary)]"
            style={{ filter: 'drop-shadow(0 0 4px var(--color-primary-light))' }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-mono text-xs uppercase tracking-widest px-4 py-2 transition-all duration-200 hover:text-[var(--color-primary)] relative group"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-300"
                style={{ background: 'var(--color-primary)' }}
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--color-primary)',
              transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--color-primary)',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--color-primary)',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden border-t px-6 pb-4"
          style={{
            backgroundColor: 'rgba(11, 11, 13, 0.95)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--color-orange-muted)',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-sm uppercase tracking-widest py-3 transition-colors duration-200 hover:text-[var(--color-primary)]"
              style={{
                color: 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-bg-elevated)',
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
