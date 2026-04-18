import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionLabel } from '../shared/SectionLabel';
import { WhyBlock } from './WhyBlock';
import { Terminal, Cpu, Network } from 'lucide-react';

export function WhyMe() {
  return (
    <section id="why-me" className="py-20 px-6 max-w-4xl mx-auto">
      <AnimatedSection>
        <SectionLabel number={2} label="ЧОМУ Я" />
        <h2
          className="font-heading text-3xl md:text-5xl tracking-widest mb-12 uppercase cyber-glitch-text"
          style={{ color: 'var(--color-text)' }}
        >
          ЧОМУ САМЕ Я?
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mb-12">
        <div className="cyber-panel p-6 md:p-8" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <h3 className="font-mono text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            {`> МІЙ ДОСВІД`}
          </h3>
          <p className="text-lg leading-relaxed font-sans" style={{ color: 'var(--color-text-muted)' }}>
            Весь мій основний досвід — це маленькі власні проєкти, створені майже з нуля. Мені подобається втілювати ідеї, щоб потім використовувати їх особисто, знаходити реальні рішення і доводити все до повністю робочого стану:
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-8">
        <AnimatedSection delay={0.2}>
          <WhyBlock
            icon={<Terminal size={24} style={{ color: 'var(--color-primary)' }} />}
            heading="Повноцінний Discord-бот"
            align="left"
          >
            <p>
              Робив його для сервера з друзями. Там багато різних фіч, і завдяки цьому я на практиці розібрався, як працювати з API та що таке асинхронне програмування.
            </p>
          </WhyBlock>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <WhyBlock
            icon={<Cpu size={24} style={{ color: 'var(--color-primary)' }} />}
            heading="Аналіз аудіо через Groq API"
            align="right"
          >
            <p>
              Програма, яка приймає аудіо, аналізує його та видає відповіді через дуже швидке і безкоштовне API від Groq. Було круто спробувати підключити штучний інтелект до своєї програми.
            </p>
          </WhyBlock>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <WhyBlock
            icon={<Network size={24} style={{ color: 'var(--color-primary)' }} />}
            heading="Інтерактивне сімейне дерево"
            align="left"
          >
            <p>
              Поки що це мій найбільший проєкт, який я робив у парі з Олексієм. У ньому одразу і вебсайт, і Telegram-бот, які працюють з базою інфобука. Класне в ньому те, що можна зручно подивитись родинні зв&apos;язки між мемберами.
            </p>
          </WhyBlock>
        </AnimatedSection>
      </div>
    </section>
  );
}
