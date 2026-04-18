import './index.css';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { WhyMe } from './components/WhyMe/WhyMe';
import { Contact } from './components/Contact/Contact';
import { DataParticles } from './components/shared/DataParticles';
import { CustomCursor } from './components/shared/CustomCursor';
import { Navbar } from './components/Navbar/Navbar';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Global Dynamic Effects */}
      <CustomCursor />
      <DataParticles />
      <div className="global-grid-container">
        <div className="global-grid" />
      </div>
      <div className="global-crt" />

      {/* Main Content Layers */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <WhyMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
