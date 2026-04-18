import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
      animate={inView ? { 
        opacity: [0, 1, 0.2, 1, 0.5, 1],
        x: [-20, 15, -10, 5, -2, 0],
        filter: ['blur(10px)', 'blur(0px)', 'blur(4px)', 'blur(0px)', 'blur(2px)', 'blur(0px)']
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay, 
        times: [0, 0.2, 0.4, 0.6, 0.8, 1], 
        ease: 'circOut' 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
