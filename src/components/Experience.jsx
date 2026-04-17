import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, SmartphoneIcon } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    type: 'education',
    title: 'HTML & CSS Fundamentals',
    company: 'Self Learning',
    date: '2024',
    description: 'Learned the foundations of web development — HTML structure, CSS styling, layouts, flexbox, grid, and responsive design principles.',
    color: '#00e5ff',
    icon: GraduationCap,
  },
  {
    id: 2,
    type: 'education',
    title: 'JavaScript Mastery',
    company: 'Online Course',
    date: '2025',
    description: 'Mastered modern JavaScript (ES6+) including DOM manipulation, async/await, APIs, and core programming concepts for building dynamic web applications.',
    color: '#f7df1e',
    icon: GraduationCap,
  },
  {
    id: 3,
    type: 'work',
    title: 'Flutter Mobile Development',
    company: 'Live Project — In Progress',
    date: '2025 — Present',
    description: 'Building real-world, cross-platform mobile applications using Flutter & Dart. Working on live deployed projects with Firebase backend, REST API integration, and polished UI/UX.',
    color: '#00ff88',
    icon: SmartphoneIcon,
  },
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience & <span>Education</span></h2>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 18px ${exp.color}` }}>
                  <Icon size={18} color="#000" />
                </div>

                <motion.div
                  className="timeline-content glass"
                  whileHover={{ y: -4, borderColor: exp.color }}
                  style={{ '--exp-color': exp.color }}
                >
                  {/* Glow accent top bar */}
                  <div className="exp-bar" style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />

                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-date" style={{ color: exp.color }}>
                      <Calendar size={13} />
                      {exp.date}
                    </span>
                  </div>

                  <h4 className="timeline-company" style={{ color: exp.color }}>{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
