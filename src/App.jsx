import { useState } from 'react';
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
import { LoadingScreen } from './components/shared/LoadingScreen';
import { GlitchLines } from './components/shared/GlitchLines';
import { ScrollProgress } from './components/shared/ScrollProgress';
import { useEasterEggs } from './components/shared/EasterEggs';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { EasterEggOverlays, handleLogoClick, partyMode } = useEasterEggs();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Loading Screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Easter Eggs */}
      <EasterEggOverlays />

      {/* Global Dynamic Effects */}
      <CustomCursor />
      <DataParticles />
      <GlitchLines />
      <ScrollProgress />
      <div className="hex-pattern" />
      <div className="global-grid-container">
        <div className="global-grid" />
      </div>
      <div className="global-crt" />

      {/* Main Content Layers */}
      <div className="relative z-10">
        <Navbar onLogoClick={handleLogoClick} />
        <Hero />
        <About />
        <div className="max-w-4xl mx-auto px-6">
          <div className="cyber-separator" />
        </div>
        <WhyMe />
        <div className="max-w-4xl mx-auto px-6">
          <div className="cyber-separator" />
        </div>
        <Skills />
        <div className="max-w-4xl mx-auto px-6">
          <div className="cyber-separator" />
        </div>
        <Projects />
        <Contact partyMode={partyMode} />
      </div>
    </div>
  );
}
