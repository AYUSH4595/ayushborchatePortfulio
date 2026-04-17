import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500); // Wait a bit after reaching 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="preloader-content">
        {/* Animated Logo Box */}
        <motion.div 
          className="preloader-logo-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
          <span className="logo-letter">A</span>
        </motion.div>

        <motion.div 
          className="preloader-text-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="preloader-name text-gradient-animated">AYUSH BORCHATE</h1>
          <div className="preloader-divider"></div>
          <h2 className="preloader-role">FLUTTER ARCHITECT</h2>
        </motion.div>

        <div className="preloader-loading-bar-wrapper">
          <div className="preloader-loading-text">
            <span>LOADING PORTFOLIO</span>
            <span>{progress > 100 ? 100 : progress}%</span>
          </div>
          <div className="preloader-progress-track">
            <motion.div 
              className="preloader-progress-fill"
              style={{ width: `${progress}%` }}
              layout
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
