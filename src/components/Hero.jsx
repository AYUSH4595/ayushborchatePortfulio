import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, Code2, Smartphone, Layers } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaGitlab } from 'react-icons/fa';
import './Hero.css';

const roles = [
  '< Flutter Expert />',
  '< Mobile Architect />',
  '< Full Stack Dev />',
  '< UI/UX Enthusiast />',
];

const FloatingWidget = ({ icon: Icon, delay, yOffset, label }) => (
  <motion.div 
    className="floating-widget glass-panel"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [yOffset, -yOffset, yOffset], opacity: 1 }}
    transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }, opacity: { duration: 1 } }}
  >
    <div className="widget-header">
      <Icon size={14} className="text-accent" />
      <span className="widget-text">{label}</span>
    </div>
    <div className="widget-body">
      <div className="widget-line w-full" />
      <div className="widget-line w-3/4" />
      <div className="widget-line w-1/2" />
    </div>
  </motion.div>
);

const Hero = ({ onResumeOpen }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // Slower interval so user can actually read the text
    const t = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 4500);
    return () => clearInterval(t);
  }, []);

  const containerV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemV = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="home" className="hero section">
      {/* Cinematic grid lines in background */}
      <div className="hero-grid" />
      
      {/* Background radial glow */}
      <div className="hero-glow" />

      <div className="container hero-split-layout relative-z">
        
        {/* Left Side: Typography & CTA */}
        <motion.div className="hero-left" variants={containerV} initial="hidden" animate="visible">
          
          <motion.div className="system-status" variants={itemV}>
            <div className="status-dot" />
            <span>SYS.STATUS: ONLINE</span>
          </motion.div>

          <motion.h1 className="hero-heading" variants={itemV}>
            <span className="text-liquid" data-text="AYUSH">AYUSH</span><br/>
            <span className="text-gradient-animated">BORCHATE</span>
          </motion.h1>

          <motion.div className="role-slider" variants={itemV}>
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0, x: -10 }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <p className="role-text-tech text-white">
                  {roles[roleIndex]}
                </p>
                <motion.div 
                  className="role-cursor"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ width: '8px', height: '1.2rem', backgroundColor: 'var(--accent)', marginLeft: '8px', boxShadow: '0 0 10px var(--accent)' }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p className="hero-description" variants={itemV}>
            Transforming complex requirements into seamless, high-performance mobile applications. Specializing in elegant architectures and deeply immersive user experiences.
          </motion.p>

          <motion.div className="hero-actions" variants={itemV}>
            <a href="#projects" className="btn-neo">
              EXPLORE WORK
            </a>
            <motion.button
              onClick={onResumeOpen}
              className="btn-neo btn-neo-outline resume-trigger-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,229,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              RESUME <Download size={16} />
            </motion.button>
          </motion.div>

          <motion.div className="hero-socials" variants={itemV}>
            <a href="https://www.linkedin.com/in/ayush-borchate-841224321" target="_blank" rel="noreferrer" className="social-icon-btn"><FaLinkedin size={18} /></a>
            <a href="https://github.com/AYUSH4595" target="_blank" rel="noreferrer" className="social-icon-btn"><FaGithub size={18} /></a>
            <a href="https://instagram.com/ay.ush_4595" target="_blank" rel="noreferrer" className="social-icon-btn"><FaInstagram size={18} /></a>
            <a href="https://gitlab.com/ayushborchate76" target="_blank" rel="noreferrer" className="social-icon-btn"><FaGitlab size={18} /></a>
            <div className="social-line" />
          </motion.div>

        </motion.div>

        {/* Right Side: Animated Code / Widget Hologram */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hologram-container">
            {/* Core glowing orb behind */}
            <div className="hologram-core" />
            
            {/* Main glass frame */}
            <div className="main-glass-frame glass-panel">
              <div className="mac-dots">
                <span className="mac-dot red"/>
                <span className="mac-dot yellow"/>
                <span className="mac-dot green"/>
              </div>
              <pre className="code-snippet text-accent">
                <code>
{`class Portfolio extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      home: HeroSection(
        developer: "Ayush Borchate",
        skills: ["Flutter", "React", "Node"],
        isAwesome: true,
      ),
    );
  }
}`}
                </code>
              </pre>
            </div>

            {/* Floating Widgets around the center frame */}
            <div className="floating-layer">
              <FloatingWidget icon={Smartphone} delay={0} yOffset={15} label="UI Layer" />
            </div>
            <div className="floating-layer pos-2">
              <FloatingWidget icon={Layers} delay={1.5} yOffset={-10} label="State Mgmt" />
            </div>
            <div className="floating-layer pos-3">
              <FloatingWidget icon={Code2} delay={0.8} yOffset={20} label="API Service" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
