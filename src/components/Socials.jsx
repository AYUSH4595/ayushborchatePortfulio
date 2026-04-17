import { motion } from 'framer-motion';
import { Globe, User, Share2, MessageCircle, ExternalLink } from 'lucide-react';
import './Socials.css';

const Socials = () => {
  const socials = [
    { name: 'LinkedIn', icon: <User size={36} />, color: '#0077B5', link: 'https://www.linkedin.com/in/ayush-borchate-841224321' },
    { name: 'GitHub', icon: <ExternalLink size={36} />, color: '#333333', link: 'https://github.com/AYUSH4595' },
    { name: 'Instagram', icon: <MessageCircle size={36} />, color: '#E1306C', link: 'https://www.instagram.com/ay.ush_4595?igsh=bHVmcWhleDJiczlv&utm_source=qr' },
    { name: 'GitLab', icon: <Globe size={36} />, color: '#FC6D26', link: 'https://gitlab.com/ayushborchate76' }
  ];

  return (
    <section id="socials" className="section relative-z">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="socials-container glass">
            <div className="socials-header">
              <h2>Let's <span>Connect</span></h2>
              <p>Find me across the web. Feel free to reach out and drop a message!</p>
            </div>
            
            <div className="social-cards">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                  style={{ '--brand-color': social.color }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                  whileHover={{ 
                    y: -15, 
                    rotate: [-2, 2, 0],
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <span className="social-name">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
