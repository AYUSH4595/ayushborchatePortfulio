import { motion } from 'framer-motion';
import './About.css';

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '2+',  label: 'Years Learning' },
  { value: '5+',  label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

const techStack = [
  { name: 'Flutter',    color: '#54C5F8', bar: 95 },
  { name: 'React.js',  color: '#61DAFB', bar: 85 },
  { name: 'Node.js',   color: '#68A063', bar: 80 },
  { name: 'Firebase',  color: '#FFCA28', bar: 82 },
  { name: 'Dart',      color: '#00B4AB', bar: 90 },
];

const StatCard = ({ s, i }) => (
  <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.12, duration: 0.5 }}
    whileHover={{ y: -6, scale: 1.08 }}
  >
    <span className="stat-value">{s.value}</span>
    <span className="stat-label">{s.label}</span>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span>Me</span></h2>

          <div className="about-content">
            {/* LEFT: Text + Stats */}
            <div className="about-text">
              <motion.div
                className="about-badge-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="about-chip">🚀 Full Stack Developer</span>
                <span className="about-chip">📱 Flutter Architect</span>
              </motion.div>

              <p>
                Hello! I'm <strong>Ayush Borchate</strong> — a passionate developer who turns complex ideas into seamless, high-performance applications.
                My journey started with a deep curiosity about how digital things work under the hood.
              </p>
              <p>
                Currently mastering <strong>React</strong> and <strong>Node.js</strong> for blazing-fast web apps, and <strong>Flutter</strong> for beautiful cross-platform mobile experiences.
              </p>
              <p>
                I believe in clean code, bold design, and delivering solutions that <strong>exceed expectations</strong> — every single time.
              </p>

              <div className="about-stats">
                {stats.map((s, i) => (
                  <StatCard key={s.label} s={s} i={i} />
                ))}
              </div>
            </div>

            {/* RIGHT: Tech Stack Card */}
            <motion.div
              className="about-tech-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Card header */}
              <div className="tech-card-header">
                <div className="mac-dots-row">
                  <span className="mac-dot red" />
                  <span className="mac-dot yellow" />
                  <span className="mac-dot green" />
                </div>
                <span className="tech-card-title">ayush.profile.dart</span>
              </div>

              {/* Code and Photo Side by Side */}
              <div className="code-and-photo-wrapper">
                {/* Code block */}
                <div className="tech-code-block">
                  <div className="code-line"><span className="c-purple">class</span> <span className="c-cyan">AyushBorchate</span> {'{'}</div>
                  <div className="code-line c-indent"><span className="c-purple">String</span> <span className="c-white">role</span> = <span className="c-green">"Flutter Developer"</span>;</div>
                  <div className="code-line c-indent"><span className="c-purple">bool</span> <span className="c-white">isOpen</span> = <span className="c-orange">true</span>;</div>
                  <div className="code-line c-empty" />
                  <div className="code-line c-indent"><span className="c-purple">List</span>&lt;<span className="c-cyan">String</span>&gt; <span className="c-white">skills</span> = [</div>
                  {techStack.map((t, i) => (
                    <div key={t.name} className="code-line c-indent-2">
                      <span className="c-green">"{t.name}"</span>
                      {i < techStack.length - 1 && <span className="c-white">,</span>}
                    </div>
                  ))}
                  <div className="code-line c-indent">];</div>
                  <div className="code-line">{'}'}</div>
                </div>

                {/* Profile Photo */}
                <div className="about-photo-wrapper">
                  <div className="about-photo-border">
                    <img src="/ayush.png" alt="Ayush Borchate" className="about-photo" />
                  </div>
                </div>
              </div>

              {/* Skill bars */}
              <div className="tech-bars">
                <div className="tech-bars-title">Tech Proficiency</div>
                {techStack.map((t, i) => (
                  <motion.div key={t.name} className="tech-bar-row"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="tech-bar-name" style={{ color: t.color }}>{t.name}</span>
                    <div className="tech-bar-bg">
                      <motion.div
                        className="tech-bar-fill"
                        style={{ background: `linear-gradient(90deg, ${t.color}80, ${t.color})`, boxShadow: `0 0 8px ${t.color}60` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="tech-bar-pct" style={{ color: t.color }}>{t.bar}%</span>
                  </motion.div>
                ))}
              </div>

              {/* Status badge */}
              <motion.div
                className="available-badge"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="avail-dot" />
                Available for hire
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
