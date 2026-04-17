import { motion } from 'framer-motion';
import { Smartphone, Globe, Server } from 'lucide-react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: <Smartphone size={28} />,
    color: '#00e5ff',
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'Dart', level: 90 },
      { name: 'Firebase', name2: '', level: 85 },
      { name: 'API Integration', level: 80 },
    ],
  },
  {
    title: 'Web Development',
    icon: <Globe size={28} />,
    color: '#b200ff',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'HTML & CSS', level: 92 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: <Server size={28} />,
    color: '#ff007b',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'GitLab / Hosting', level: 80 },
      { name: 'Postman', level: 78 },
    ],
  },
];

const FlipCard = ({ group, index }) => {
  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', stiffness: 90 }}
    >
      <div className="flip-inner">
        {/* FRONT */}
        <div className="flip-front glass" style={{ '--card-color': group.color }}>
          <div className="flip-icon-wrap" style={{ color: group.color, border: `2px solid ${group.color}`, boxShadow: `0 0 18px ${group.color}50` }}>
            {group.icon}
          </div>
          <h3 className="flip-title" style={{ color: group.color }}>{group.title}</h3>
          <div className="flip-divider" style={{ background: group.color }} />
          <ul className="flip-skill-list">
            {group.skills.map(s => (
              <li key={s.name} className="flip-skill-item">
                <span className="flip-skill-name">{s.name}</span>
                <div className="flip-bar-bg">
                  <motion.div
                    className="flip-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 + 0.3 }}
                    style={{ background: `linear-gradient(90deg, ${group.color}80, ${group.color})`, boxShadow: `0 0 8px ${group.color}80` }}
                  />
                </div>
                <span className="flip-skill-pct" style={{ color: group.color }}>{s.level}%</span>
              </li>
            ))}
          </ul>
          <div className="flip-hint">Hover to flip ↻</div>
        </div>

        {/* BACK */}
        <div className="flip-back" style={{ '--card-color': group.color }}>
          <div className="flip-back-glow" style={{ background: `radial-gradient(circle, ${group.color}30 0%, transparent 70%)` }} />
          <div className="flip-icon-wrap large" style={{ color: group.color, border: `2px solid ${group.color}`, boxShadow: `0 0 30px ${group.color}60` }}>
            {group.icon}
          </div>
          <h3 className="flip-back-title" style={{ color: group.color }}>{group.title}</h3>
          <div className="flip-tags">
            {group.skills.map(s => (
              <span key={s.name} className="flip-tag" style={{ borderColor: group.color, color: group.color, background: `${group.color}15` }}>
                {s.name}
              </span>
            ))}
          </div>
          <p className="flip-back-desc">
            Expert-level proficiency in {group.title.toLowerCase()} technologies, delivering high-quality solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical <span>Stack</span></h2>
        <p className="skills-subtitle">A specialized toolkit designed for building scalable, high-performance digital solutions.</p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <FlipCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
