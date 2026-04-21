import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionLabel } from '../shared/SectionLabel';
import eugenPhoto from '../../assets/eugen-photo.png';

export function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <AnimatedSection>
        <SectionLabel number={1} label="ПРО МЕНЕ" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="cyber-panel p-6 md:p-10 relative">
          {/* Cyberpunk corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4" style={{ borderColor: 'var(--color-primary)' }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4" style={{ borderColor: 'var(--color-orange-light)' }} />

          <h2
            className="font-heading text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 uppercase tracking-wide cyber-glitch-text text-center md:text-left"
            style={{ color: 'var(--color-text)' }}
          >
            ТРІШКИ ПРО СЕБЕ ТА МОЮ МОТИВАЦІЮ
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* User Photo */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div
                className="cyber-photo-container w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 shadow-2xl"
                style={{ '--bg-img': `url(${eugenPhoto})` }}
              >
                <img src={eugenPhoto} alt="Євгенія Кицмень" className="cyber-photo" />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans" style={{ color: 'var(--color-text-muted)' }}>
              <p>
                Йоу <span style={{ color: 'var(--color-primary)' }} className="font-bold">Назар</span>
              </p>
              <p>
                Кароче, початком мого інтересу до програмування та <span style={{ color: 'var(--color-primary)' }} className="font-bold">IT</span> в цілому можна вважати той день, коли я вперше сів за комп&apos;ютер
              </p>

              <p>
                Звісно, тоді я ще не вчив код, але це пробудило мою зацікавленість у роботі програм. В 10 років я почав цікавитись більше: пробував вчити <span style={{ color: 'var(--color-orange-light)' }}>Python</span> (набридло), потім <span style={{ color: 'var(--color-orange-light)' }}>Kotlin</span>.
              </p>

              <p>
                У 13 років були нові спроби навчання, але бракувало мотивації, хотілося більше грати в ігри. Проте буквально цього літа я зрозумів, що програмування — це класна штука. За літо та початок осені я прочитав книжки по <span style={{ color: 'var(--color-orange-light)' }}>Python</span> та <span style={{ color: 'var(--color-orange-light)' }}>C/C++</span>. Зараз я вже маю декілька серйозних проєктів, розробляючи які я остаточно усвідомив, що стати <span style={{ color: 'var(--color-primary)' }} className="font-bold">IT-респом</span> у кортімі — це моя ціль №1.
              </p>

              <p>
                Чому я хочу бути саме <span style={{ color: 'var(--color-primary)' }} className="font-bold">IT RESP&apos;ом</span>? Тому що я вважаю - що саме на цій посаді я себе зможу найбільше реалізувати, прокачати свої хард скіли, прокачати свої софт скіли в кортімі, а також знайти друзів. Але головна моя мотивація — це стати частиною <span style={{ color: 'var(--color-primary)' }} className="font-bold">кортіми</span> і допомогти зробити цей <span style={{ color: 'var(--color-primary)' }} className="font-bold">БЕК</span> найвайбовішим та найкращим. Я бачу реальні шляхи, як можна покращити процеси в самому <span style={{ color: 'var(--color-primary)' }} className="font-bold">БЕКу</span>. Зокрема, я дуже хочу зробити значно ліпшу та стабільнішу реалізацію для <span style={{ color: 'var(--color-primary)' }} className="font-bold">TD Market</span>. В мене є класна ідея відійти від формату класичного бота і спробувати зробити повноцінну <span style={{ color: 'var(--color-orange-light)' }}>міні апку в телеграм</span> — це дасть набагато кращий користувацький досвід для учасників. Так команди зможуть максимально зручно та швидко обмінювати свої купони на <span style={{ color: 'var(--color-orange-light)' }}>інженерні матеріали</span>. Робота в такій зарядженій кортімі над створенням крутого івенту — це саме те, що мене зараз мотивує найбільше!
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>



    </section>
  );
}
