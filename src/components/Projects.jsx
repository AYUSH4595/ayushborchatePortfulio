import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import janhitAppImage from '../assets/janhit-app.png.png';
import zomatoAppImage from '../assets/zomato-app.png.jpeg';
import './Projects.css';

const Projects = () => {

  return (
    <section id="projects" className="section relative-z">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="featured-project-wrapper">
          {/* Decorative Dot */}
          <div className="fp-decorative-dot">
            <div className="inner-dot"></div>
          </div>

          <div className="fp-container">
            {/* Left Side Image */}
            <motion.div 
              className="fp-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {/* Image holder with responsive glow */}
              <div className="fp-image-placeholder">
                <img src={janhitAppImage} alt="Janhit Mobile App" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className="fp-fallback-text" style={{display: 'none'}}>JANHIT APP IMAGE (Place janhit-app.png in public folder)</div>
              </div>
              <div className="fp-glow"></div>
            </motion.div>

            {/* Right Side Info */}
            <motion.div 
              className="fp-info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <span className="fp-category">MOBILE DISCOVERY</span>
              <h3 className="fp-title">Janhit App</h3>
              
              <p className="fp-description">
                A comprehensive citizen service platform designed to simplify communication between citizens and government authorities. It enables users to report civic issues, track resolutions in real-time, and access essential government schemes efficiently.
              </p>

              <div className="fp-callout">
                <p><strong>Role & Leadership:</strong> Managed and guided by Shreya Gaikwad Sir and Uddhav Dahade Sir, ensuring the highest standards of project delivery and citizen engagement.</p>
              </div>

              <div className="fp-features-grid">
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon"/>
                  <span>Civic Issue Reporting (Roads, Water, etc.)</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon"/>
                  <span>Photo & Location Uploads</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon"/>
                  <span>Real-time Complaint Tracking</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon"/>
                  <span>Government Schemes & Notices</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon"/>
                  <span>Instant Emergency Services</span>
                </div>
              </div>

              <div className="fp-actions">
                <a href="https://play.google.com/store/apps/details?id=com.government.janhit" target="_blank" rel="noreferrer" className="fp-btn fp-btn-primary">
                  <span>Play Store</span> <ExternalLink size={16} />
                </a>
              </div>

            </motion.div>
          </div>

          {/* Project Divider */}
          <div className="fp-divider"></div>

          {/* Second Project: Zomato App */}
          <div className="fp-container reverse-layout">
            {/* Left Side Info (Reversed to Right visually) */}
            <motion.div 
              className="fp-info-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <span className="fp-category" style={{color: '#ff0036'}}>FOOD & FCM NOTIFICATIONS</span>
              <h3 className="fp-title">Zomato Promo Engine</h3>
              
              <p className="fp-description">
                A high-fidelity clone of the Zomato partner application equipped with a fully functional <strong>Push Notification Alert System</strong>. It empowers restaurant owners and marketers to instantly broadcast live custom promotional offers directly to users' devices.
              </p>

              <div className="fp-callout z-callout">
                <p><strong>Lead Developer:</strong> Architected entirely by <strong>Ayush Borchate</strong>. Focused on flawlessly replicating the authentic Zomato UI paired with robust backend Firebase alert triggers.</p>
              </div>

              <div className="fp-features-grid">
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon z-icon"/>
                  <span>Live Custom Promotional Offers</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon z-icon"/>
                  <span>Firebase Cloud Messaging (FCM)</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon z-icon"/>
                  <span>Native Alert Modals</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon z-icon"/>
                  <span>Pixel-Perfect Zomato Components</span>
                </div>
                <div className="fp-feature">
                  <ChevronRight size={14} className="fp-icon z-icon"/>
                  <span>Direct Device Testing Panel</span>
                </div>
              </div>

            </motion.div>

            {/* Right Side Image (Reversed to Left visually) */}
            <motion.div 
              className="fp-image-container z-image-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <div className="fp-image-placeholder">
                <img src={zomatoAppImage} alt="Zomato App Clone" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className="fp-fallback-text" style={{display: 'none'}}>ZOMATO APP IMAGE (Place zomato-app.png in public folder)</div>
              </div>
              <div className="fp-glow z-glow"></div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;
