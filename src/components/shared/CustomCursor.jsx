import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const attachListeners = () => {
      const els = document.querySelectorAll('a, button, .cyber-button');
      els.forEach((el) => {
        // Safe to call multiple times, duplicates are ignored
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    
    attachListeners();
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Outer Reticle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div 
            className="w-full h-full border-2 absolute transition-colors duration-300"
            style={{ 
              borderColor: isHovering ? 'var(--color-primary)' : 'var(--color-orange-light)',
              boxShadow: isHovering ? '0 0 10px var(--color-primary)' : '0 0 5px var(--color-orange-light)',
              clipPath: 'polygon(0 0, 25% 0, 25% 10%, 10% 10%, 10% 25%, 0 25%, 0 75%, 10% 75%, 10% 90%, 25% 90%, 25% 100%, 0 100%, 75% 100%, 75% 90%, 90% 90%, 90% 75%, 100% 75%, 100% 25%, 90% 25%, 90% 10%, 75% 10%, 75% 0, 100% 0)' 
            }}
          />
        </div>
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
      >
        <div 
          className="w-1.5 h-1.5 rounded-none transition-colors duration-300"
          style={{ 
            backgroundColor: isHovering ? 'var(--color-orange)' : 'var(--color-text)',
            boxShadow: '0 0 8px currentColor'
          }} 
        />
      </motion.div>
    </>
  );
}
