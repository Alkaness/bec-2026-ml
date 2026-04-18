import { useRef, useState } from 'react';
import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionLabel } from '../shared/SectionLabel';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export function Projects() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <SectionLabel number={4} label="ПРОЄКТИ" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="relative">
          {/* Custom arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-6 md:-left-14 z-20 w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              top: '160px',
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-orange-muted)',
              color: 'var(--color-primary)',
            }}

            aria-label="Попередній проєкт"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-6 md:-right-14 z-20 w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              top: '160px',
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-orange-muted)',
              color: 'var(--color-primary)',
            }}

            aria-label="Наступний проєкт"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="projects-swiper"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={project.id} className="projects-swiper-slide">
                <ProjectCard project={project} />
                {/* Slide counter — inside each slide, always tight below card */}
                <div className="flex items-center justify-center gap-3 mt-4 pb-2">
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {'// '}
                    {String(activeIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(projects.length).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1.5">
                    {projects.map((_, j) => (
                      <div
                        key={j}
                        className="h-1 transition-all duration-300"
                        style={{
                          width: j === activeIndex ? '20px' : '8px',
                          background: j === activeIndex ? 'var(--color-primary)' : 'var(--color-orange-muted)',
                          opacity: j === activeIndex ? 1 : 0.3,
                          boxShadow: j === activeIndex ? '0 0 6px var(--color-primary)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimatedSection>
    </section>
  );
}
