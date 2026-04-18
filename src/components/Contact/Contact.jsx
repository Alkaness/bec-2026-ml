import { AnimatedSection } from '../shared/AnimatedSection';
import { Send, Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.35 6.47-1.54 6.47-7a5.02 5.02 0 0 0-1.3-3.32 5.2 5.2 0 0 0-.1-3.23s-1-.32-3.3 1.23a11.1 11.1 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a5.2 5.2 0 0 0-.1 3.23 5.02 5.02 0 0 0-1.3 3.32c0 5.46 3.32 6.64 6.47 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

export function Contact() {
  return (
    <footer id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center border-t-4 border-[var(--color-primary)] pt-16 mt-10">
        
        {/* Mentors */}
        <AnimatedSection>
          <div
            className="cyber-panel p-5 text-center flex flex-col items-center mb-16 mx-auto max-w-lg"
          >
            <p className="font-mono text-xs mb-3 tracking-wide" style={{ color: 'var(--color-text-faint)' }}>
              [ У КОГО БРАВ КТ ]
            </p>
            <div className="flex gap-4 flex-wrap justify-center font-heading tracking-widest text-lg">
              <span style={{ color: 'var(--color-primary)' }}>Денис Браздецький</span>
              <span style={{ color: 'var(--color-primary)' }}>Олексій Татарчинський</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2
            className="font-heading text-3xl md:text-5xl tracking-widest mb-12 uppercase cyber-glitch-text"
            style={{ color: 'var(--color-orange)' }}
          >
            НАПЕРЕД ДЯКУЮ, ЩО ПЕРЕГЛЯНУВ МІЙ МОТИВАЦІЙНИЙ ЛИСТ!
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {/* GitHub */}
            <a
              href="https://github.com/Alkaness"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button flex items-center gap-2 px-6 py-3 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                color: 'var(--color-text)',
                border: '2px solid var(--color-orange-muted)',
                boxShadow: '4px 4px 0px var(--color-primary-dark)',
              }}
            >
              <GithubIcon size={18} />
              GitHub
            </a>

          </div>
        </AnimatedSection>

      </div>
    </footer>
  );
}
