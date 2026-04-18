import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionLabel } from '../shared/SectionLabel';
import { useInView } from 'react-intersection-observer';

const timelineItems = [
  // TODO: fill in — заповни реальними датами та подіями з твого шляху в BEST
  {
    date: '2024',
    title: 'Перше знайомство з програмуванням',
    description: 'Почав цікавитись IT, пробував Python та Kotlin',
    icon: '🎓',
    category: 'education',
  },
  {
    date: '2025 весна',
    title: 'Вступ до BEST Lviv',
    description: 'Пройшов співбесіду, обрав BEST::HACKath0n як топ-івент',
    icon: '👥',
    category: 'community',
  },
  {
    date: '2025',
    title: 'Науковій конференція кафедри ЕОМ',
    description: '5-те місце з програмою аналізу зміни пікселів',
    icon: '🏆',
    category: 'competition',
  },
  {
    date: '2025',
    title: 'StarostaBot',
    description: 'Написав повноцінного Discord бота на Rust з XP системою, економікою та модерацією',
    icon: '💻',
    category: 'project',
  },
  {
    date: '2025–2026',
    title: 'Family Tree Photo Bot',
    description: 'Telegram бот для BEST Lviv — інтеграція з MongoDB, Google Drive API, Sharp',
    icon: '💻',
    category: 'project',
  },
  {
    date: '2026',
    title: 'Заявка на IT Responsible @ BEC 2026',
    description: 'Побудував цей сайт як мотиваційний лист, бо чому б і ні',
    icon: '🏆',
    category: 'competition',
  },
];

function TimelineItem({ item, index, isLast }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex gap-4 md:gap-6 relative">
      {/* Line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-10 h-10 flex items-center justify-center text-lg z-10 transition-all duration-500 border-2"
          style={{
            backgroundColor: inView ? 'var(--color-primary)' : 'var(--color-bg-elevated)',
            borderColor: inView ? 'var(--color-primary-light)' : 'var(--color-orange-muted)',
            opacity: inView ? 1 : 0.3,
            transform: inView ? 'scale(1)' : 'scale(0.7)',
            boxShadow: inView ? '0 0 15px var(--color-primary)' : 'none',
          }}
        >
          {item.icon}
        </div>
        {!isLast && (
          <div
            className="w-[2px] flex-1 min-h-[40px] transition-all duration-700"
            style={{
              backgroundColor: inView ? 'var(--color-primary)' : 'var(--color-text-faint)',
              transitionDelay: `${index * 0.1}s`,
              boxShadow: inView ? '0 0 5px var(--color-primary)' : 'none'
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="pb-8 transition-all duration-500"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(20px)',
        }}
      >
        <h4 className="font-mono text-xs font-bold pl-3 mb-2"
          style={{ color: 'var(--color-primary)', borderLeft: '2px solid var(--color-primary-dark)' }}
          >
          {item.date}
        </h4>
        <h3
          className="font-heading tracking-wider text-xl mt-3 mb-2 uppercase"
          style={{ color: 'var(--color-text)' }}
        >
          {item.title}
        </h3>
        <p
          className="text-base leading-relaxed font-sans"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 max-w-3xl mx-auto">
      <AnimatedSection>
        <SectionLabel number={5} label="МІЙ ШЛЯХ" />
        <h2
          className="font-sans font-black text-3xl md:text-4xl tracking-tightest mb-12"
          style={{ color: 'var(--color-text)' }}
        >
          Ключові моменти
        </h2>
      </AnimatedSection>

      <div>
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
