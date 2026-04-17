import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ResumeModal from './components/ResumeModal';
import { AnimatePresence } from 'framer-motion';

import './App.css'; // Optional structural styles

function Viewfinder() {
  return (
    <div className="viewfinder" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}>
      {/* Top Left */}
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div className="rec-dot" style={{ width: '8px', height: '8px', backgroundColor: 'red', borderRadius: '50%', animation: 'blink 1s infinite' }}></div>
        <span style={{ color: 'red', fontFamily: 'var(--font-tech)', fontSize: '0.8rem', letterSpacing: '2px' }}>REC</span>
      </div>
      
      {/* Top Right */}
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(0,255,0,0.3)', padding: '0.2rem 0.8rem' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: '#0f0', borderRadius: '50%' }}></div>
          <span style={{ color: '#0f0', fontFamily: 'var(--font-tech)', fontSize: '0.8rem', letterSpacing: '1px' }}>LIVE</span>
        </div>
        <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)', fontSize: '0.7rem', letterSpacing: '1px' }}>4K 60FPS [ ]</span>
      </div>

      {/* Bottom Left */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
        <span>ISO 800</span>
        <span>WB 5600K</span>
        <span>SHUTTER 1/50</span>
      </div>

      {/* Bottom Right */}
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
        <span style={{ display: 'inline-block', border: '1px solid var(--text-secondary)', padding: '0.2rem 0.4rem', borderStyle: 'dashed' }}>AF-C</span>
      </div>
      
      {/* Center Crosshairs */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '2px', height: '10px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg)', width: '2px', height: '10px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}

const App = () => {
  // Set default theme to 'dark'
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="main-app">
            <Viewfinder />
            <Navbar />
            
            <main className="main-content">
              <Hero onResumeOpen={() => setResumeOpen(true)} />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Chatbot />
            <Socials />
            <Footer />
            <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
