import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'HOME', href: '#home', color: '#00e5ff' },    /* Cyan */
    { num: '02', name: 'ABOUT', href: '#about', color: '#ff007b' },   /* Pink */
    { num: '03', name: 'EXPERTISE', href: '#skills', color: '#b200ff' },/* Purple */
    { num: '04', name: 'PORTFOLIO', href: '#projects', color: '#00ff88' },/* Green */
    { num: '05', name: 'CONTACT', href: '#contact', color: '#ffbd2e' }  /* Yellow */
  ];

  return (
    <nav className={`navbar-neon ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-content">
        
        {/* Left: Logo */}
        <div className="nav-brand">
          <div className="brand-logo-glow">
            <Code2 size={28} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name text-gradient-animated">AYUSH</span>
            <span className="brand-tag">FLUTTER ARCHITECT</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-item-neon"
              style={{ '--item-color': link.color }}
            >
              <span className="item-name">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right: Controls & Actions */}
        <div className="nav-controls">
          <a href="#contact" className="nav-cta-neon desktop-only">
            HIRE ME
          </a>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="#00e5ff" /> : <Menu size={28} color="#00e5ff" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-content glass-panel-neon">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-item-neon"
              onClick={() => setIsOpen(false)}
              style={{ '--item-color': link.color }}
            >
              <span className="mobile-name">{link.name}</span>
            </a>
          ))}
          <a href="#contact" className="mobile-cta-neon" onClick={() => setIsOpen(false)}>
            CONNECT NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
