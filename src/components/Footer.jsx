import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaGitlab } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const specializations = [
  'Flutter Development',
  'Web Architecture',
  'React / Node.js',
  'UI/UX Design',
  'Firebase & APIs',
];

const socials = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/AYUSH4595', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/ayush-borchate-841224321', label: 'LinkedIn' },
  { icon: <FaInstagram size={20} />, href: 'https://instagram.com/ay.ush_4595', label: 'Instagram' },
  { icon: <FaGitlab size={20} />, href: 'https://gitlab.com/ayushborchate76', label: 'GitLab' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-glow-top" />
    <div className="container">
      <div className="footer-grid">

        {/* Col 1: Brand */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            AYUSH<span>.</span>
          </div>
          <p className="footer-tagline">
            Full Stack Developer specializing in high-performance Flutter and Web applications.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer-social-icon"
                whileHover={{ y: -4, color: '#00e5ff' }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Col 2: Explore */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="footer-col-title">EXPLORE</h4>
          <ul className="footer-links">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer-link">
                  <span className="footer-link-dot" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3: Specialization */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="footer-col-title">SPECIALIZATION</h4>
          <ul className="footer-links">
            {specializations.map(s => (
              <li key={s}>
                <span className="footer-spec-item">
                  <span className="footer-link-dot accent" />
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 4: Quick Contact */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="footer-col-title">QUICK CONTACT</h4>
          <div className="footer-contact-list">
            <a href="mailto:ayushborchate76@gmail.com" className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <span>ayushborchate76@gmail.com</span>
            </a>
            <a href="tel:+919860316595" className="footer-contact-item">
              <Phone size={15} className="footer-contact-icon" />
              <span>+91 9860316595</span>
            </a>
            <div className="footer-contact-item">
              <MapPin size={15} className="footer-contact-icon" />
              <span>Alephtata, Maharashtra, IN</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ayush Borchate. All rights reserved.</span>
        <span className="footer-made">Crafted with ❤️ using React & Flutter</span>
      </div>
    </div>
  </footer>
);

export default Footer;
