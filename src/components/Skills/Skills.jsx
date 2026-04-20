import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionLabel } from '../shared/SectionLabel';
import { SkillBadge } from './SkillBadge';
import { skills } from '../../data/skills';
import { Users, Target, Clock } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 max-w-5xl mx-auto">
      <AnimatedSection>
        <SectionLabel number={3} label="НАВИЧКИ" />
      </AnimatedSection>

      {/* Hard Skills */}
      <AnimatedSection delay={0.1}>
        <h2
          className="font-heading text-2xl md:text-3xl mb-6 uppercase tracking-wide cyber-glitch-text break-words"
          style={{ color: 'var(--color-text)' }}
        >
          HARD SKILLS
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Left column — Languages & Runtimes */}
        <AnimatedSection delay={0.15}>
          <div className="cyber-panel p-4 md:p-6">
            <h3
              className="font-mono text-xs sm:text-sm font-bold mb-4 md:mb-6 pb-3 border-b-2 tracking-wider sm:tracking-widest uppercase break-words"
              style={{
                color: 'var(--color-primary)',
                borderColor: 'var(--color-primary-dark)',
              }}
            >
              &gt; МОВИ & РАНТАЙМИ
            </h3>
            <div className="space-y-3 md:space-y-4">
              {skills.languages.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Right column — Tools & Infrastructure */}
        <AnimatedSection delay={0.2}>
          <div className="cyber-panel p-4 md:p-6">
            <h3
              className="font-mono text-xs sm:text-sm font-bold mb-4 md:mb-6 pb-3 border-b-2 tracking-wider sm:tracking-widest uppercase break-words"
              style={{
                color: 'var(--color-primary)',
                borderColor: 'var(--color-primary-dark)',
              }}
            >
              &gt; ТУЛЗИ & ІНФРАСТРУКТУРА
            </h3>
            <div className="space-y-3 md:space-y-4">
              {skills.tools.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Soft Skills */}
      <AnimatedSection delay={0.3} className="mt-16">
        <h2
          className="font-heading text-2xl md:text-3xl mb-8 uppercase tracking-wide cyber-glitch-text"
          style={{ color: 'var(--color-text)' }}
        >
          SOFT SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <div className="p-5 border-t-2 bg-[var(--color-bg-elevated)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,95,46,0.1)]" style={{ borderColor: 'var(--color-orange-light)' }}>
            <Users size={28} style={{ color: 'var(--color-primary)' }} className="mb-4" />
            <h4 className="font-heading tracking-widest text-lg mb-2 uppercase" style={{ color: 'var(--color-text)' }}>Командна гра</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Будучи учасником двох ансамблів у музичній школі та співаючи в хорі вже пів року, я суттєво прокачав навички командної роботи і синхронізації з колективом.
            </p>
          </div>

          <div className="p-5 border-t-2 bg-[var(--color-bg-elevated)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,95,46,0.1)]" style={{ borderColor: 'var(--color-orange)' }}>
            <Target size={28} style={{ color: 'var(--color-primary)' }} className="mb-4" />
            <h4 className="font-heading tracking-widest text-lg mb-2 uppercase" style={{ color: 'var(--color-text)' }}>Цілеспрямованість</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Завжди доводжу справу до кінця. Здобув по призовому місці на обох всеукраїнських конкурсах з гітари, у яких брав участь.
            </p>
          </div>

          <div className="p-5 border-t-2 bg-[var(--color-bg-elevated)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,95,46,0.1)]" style={{ borderColor: 'var(--color-primary-dark)' }}>
            <Clock size={28} style={{ color: 'var(--color-primary)' }} className="mb-4" />
            <h4 className="font-heading tracking-widest text-lg mb-2 uppercase" style={{ color: 'var(--color-text)' }}>Стресостійкість + Тайм-менеджмент</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Чудово менеджу свій час. В 11 класі успішно поєднував інтенсивне навчання, репетиторство та заняття музикою без вигорання.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
