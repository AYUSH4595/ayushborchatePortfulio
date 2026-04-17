import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const element = document.getElementById('resume-print');
    const opt = {
      margin:       0.2, // Small margin for aesthetic spacing
      filename:     'Ayush_Borchate_Resume.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 3, useCORS: true, backgroundColor: '#0b0c15' },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="resume-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="resume-modal"
            initial={{ opacity: 0, scale: 0.85, x: '-50%', y: '-40%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.85, x: '-50%', y: '-40%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            {/* Top glow bar */}
            <div className="resume-glow-bar" />

            {/* Controls */}
            <div className="resume-controls">
              <motion.button
                className="resume-ctrl-btn download-btn"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={15} /> Download PDF
              </motion.button>
              <motion.button
                className="resume-ctrl-btn close-btn"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* ── RESUME CONTENT ── */}
            <div className="resume-sheet" id="resume-print">

              {/* Header */}
              <div className="rs-header">
                <div className="rs-avatar">AB</div>
                <div className="rs-header-info">
                  <h1 className="rs-name">Ayush Borchate</h1>
                  <p className="rs-role">Flutter Developer</p>
                  <div className="rs-contact-row">
                    <span><Phone size={13}/> +91 9860316595</span>
                    <span><Mail size={13}/> ayushborchate76@gmail.com</span>
                    <span><MapPin size={13}/> Alephata, Pune, MH 412410</span>
                  </div>
                </div>
              </div>

              <div className="rs-body">
                {/* LEFT COLUMN */}
                <div className="rs-left">

                  {/* About */}
                  <div className="rs-section">
                    <h2 className="rs-section-title">About Me</h2>
                    <p className="rs-text">
                      I'm a dedicated Flutter developer at Baap Company, currently pursuing a Bachelor of Computer Applications (BCA). I have hands-on experience in developing cross-platform applications for Android, iOS, and the Web using Flutter with GetX. I also have knowledge of Node.js. I'm eager to apply my skills to real-world projects and continue growing as a software developer.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="rs-section">
                    <h2 className="rs-section-title">Skills</h2>
                    <div className="rs-skill-group">
                      <h4>Mobile Development</h4>
                      <div className="rs-tags">
                        {['Flutter', 'Dart', 'GetX', 'Firebase', 'API Integration', 'State Management'].map(s => (
                          <span key={s} className="rs-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rs-skill-group">
                      <h4>Frontend</h4>
                      <div className="rs-tags">
                        {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'].map(s => (
                          <span key={s} className="rs-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rs-skill-group">
                      <h4>Backend & Tools</h4>
                      <div className="rs-tags">
                        {['Node.js', 'Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'Figma'].map(s => (
                          <span key={s} className="rs-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rs-skill-group">
                      <h4>Languages</h4>
                      <div className="rs-tags">
                        {['Marathi', 'English', 'Hindi'].map(s => (
                          <span key={s} className="rs-tag lang">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="rs-section">
                    <h2 className="rs-section-title">Education</h2>
                    <div className="rs-edu-card">
                      <div className="rs-edu-dot" />
                      <div>
                        <h4>Bachelor of Computer Applications (BCA)</h4>
                        <p>3rd Year — In Progress</p>
                      </div>
                    </div>
                    <div className="rs-edu-card">
                      <div className="rs-edu-dot work" />
                      <div>
                        <h4>BAAP Company, Sangamner</h4>
                        <p>Flutter Developer — Working</p>
                        <p className="rs-edu-desc">Provider of IT services for domestic and international clients including US-based projects. Focused on software development, mobile apps, and enterprise solutions.</p>
                      </div>
                    </div>
                  </div>

                  {/* API Integration */}
                  <div className="rs-section">
                    <h2 className="rs-section-title">API Integration & Testing</h2>
                    <p className="rs-text">Integrated multiple RESTful APIs. Utilized Postman for API testing, validation, and debugging.</p>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="rs-right">
                  <div className="rs-section">
                    <h2 className="rs-section-title">Project Experience</h2>

                    <div className="rs-project-card">
                      <div className="rs-proj-header">
                        <span className="rs-proj-dot cyan" />
                        <h3>Janhit App</h3>
                        <span className="rs-proj-badge">Citizen Grievance System</span>
                      </div>
                      <ul className="rs-proj-list">
                        <li>Developed complaint registration, real-time tracking, officer management & notifications</li>
                        <li>User-friendly UI for citizens to report issues with photos & GPS location</li>
                        <li>Role-based access: Citizen, Officer, Admin</li>
                        <li>Integrated APIs for seamless complaint lifecycle from submission to resolution</li>
                      </ul>
                    </div>

                    <div className="rs-project-card">
                      <div className="rs-proj-header">
                        <span className="rs-proj-dot purple" />
                        <h3>Real Estate App</h3>
                        <span className="rs-proj-badge">Property Management</span>
                      </div>
                      <ul className="rs-proj-list">
                        <li>Property listing, buyer-seller interactions, booking & visit scheduling</li>
                        <li>Clean UI for properties with images, location & pricing insights</li>
                        <li>Role-based access: Buyer, Seller, Admin</li>
                        <li>Real-time updates, shortlist management & notifications</li>
                      </ul>
                    </div>

                    <div className="rs-project-card">
                      <div className="rs-proj-header">
                        <span className="rs-proj-dot green" />
                        <h3>E-Commerce App</h3>
                        <span className="rs-proj-badge">Flutter + Firebase</span>
                      </div>
                      <ul className="rs-proj-list">
                        <li>Cross-platform app with Flutter & Firebase</li>
                        <li>User authentication, product listings, cart management & payment gateway</li>
                        <li>Responsive UI with seamless navigation on Android & iOS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="rs-footer">
                <span>ayushborchate76@gmail.com</span>
                <span>🔗 github.com/AYUSH4595</span>
                <span>+91 9860316595</span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
