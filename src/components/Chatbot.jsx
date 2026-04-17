import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

/* ── Smart rule-based responses (always works!) ── */
const getBotResponse = (text) => {
  const t = text.toLowerCase().trim();

  if (/^(hi+|hello+|hey+|hii+|helo|hai|namaste|hru|howdy)/.test(t))
    return "Hi there! 👋 I'm Ayush's AI assistant. How can I help you today?";

  if (/bye|goodbye|see ya|cya|good night|goodnight/.test(t))
    return "Goodbye! 👋 Have a great day! Feel free to come back anytime.";

  if (/how are you|how r u|hows it|what's up|wassup|sup/.test(t))
    return "I'm doing great, thanks for asking! 😊 I'm here to tell you all about Ayush. What would you like to know?";

  if (/who are you|who r u|what are you|what is this/.test(t))
    return "I'm Ayush Borchate's AI portfolio assistant! 🤖 I can tell you about his skills, projects, experience, and contact info.";

  if (/name|ayush|borchate/.test(t))
    return "His name is **Ayush Borchate** — a passionate Full Stack Developer from Alephtata, Maharashtra, India. 🇮🇳";

  if (/skill|know|tech|stack|language|expert|good at/.test(t))
    return "Ayush is skilled in:\n⚛️ React.js — Frontend\n🟩 Node.js — Backend\n📱 Flutter — Mobile Apps\n🎨 HTML, CSS, JavaScript\n🗄️ MongoDB & Firebase\n🔧 Git & GitHub";

  if (/project|work|built|created|portfolio/.test(t))
    return "Ayush has built 10+ projects including web apps with React, mobile apps with Flutter, and backend APIs with Node.js. Check out his GitHub: github.com/AYUSH4595 🚀";

  if (/contact|email|gmail|reach|message/.test(t))
    return "📧 Email: ayushborchate76@gmail.com\n💼 LinkedIn: linkedin.com/in/ayush-borchate-841224321\n🐙 GitHub: github.com/AYUSH4595";

  if (/location|where|city|place|live|from/.test(t))
    return "📍 Ayush is based in **Alephtata, Maharashtra, India**. Open to remote opportunities worldwide! 🌍";

  if (/education|college|degree|study|student/.test(t))
    return "Ayush is a dedicated student pursuing his Computer Science education while building real-world projects to sharpen his skills. 📚💻";

  if (/experience|year|working|job|intern/.test(t))
    return "Ayush has 2+ years of hands-on learning and project experience in Full Stack Development. He's actively looking for opportunities! 💼";

  if (/flutter|mobile|app|android|ios/.test(t))
    return "Flutter is one of Ayush's strong suits! 📱 He builds beautiful, cross-platform mobile apps for Android & iOS using Flutter & Dart.";

  if (/react|reactjs|frontend|web/.test(t))
    return "Ayush loves React! ⚛️ He builds modern, fast, and responsive web applications. He's well-versed in hooks, state management, and component architecture.";

  if (/node|nodejs|backend|server|api/.test(t))
    return "Ayush builds robust backend APIs using Node.js + Express. 🟩 He's comfortable with REST APIs, authentication, and database integration.";

  if (/github|gitlab|git|code|repo/.test(t))
    return "🐙 GitHub: github.com/AYUSH4595\n🦊 GitLab: gitlab.com/ayushborchate76\n\nCheck out Ayush's repositories to see his work!";

  if (/linkedin/.test(t))
    return "💼 LinkedIn: linkedin.com/in/ayush-borchate-841224321\n\nConnect with Ayush on LinkedIn!";

  if (/instagram|insta/.test(t))
    return "📸 Instagram: instagram.com/ay.ush_4595\n\nFollow Ayush on Instagram!";

  if (/hire|available|opportunity|job|freelance|open to/.test(t))
    return "Yes! 🎯 Ayush is actively open to:\n✅ Full-time roles\n✅ Freelance projects\n✅ Internships\n\nContact him at ayushborchate76@gmail.com";

  if (/resume|cv/.test(t))
    return "📄 You can download Ayush's resume using the Download Resume button on the main page! Or click the Resume link in the + menu. 💼";

  if (/thank|thanks|ty|thx/.test(t))
    return "You're welcome! 😊 Feel free to ask anything else about Ayush.";

  if (/sorry|mistake|wrong|error/.test(t))
    return "No worries at all! 😊 How can I help you?";

  // Default
  return "Great question! 🤔 I can tell you about Ayush's skills, projects, contact info, experience, or location. What would you like to know?";
};


const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayush-borchate-841224321',
    color: '#0077B5',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    url: 'https://github.com/AYUSH4595',
    color: '#e2e8f0',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: 'GitLab',
    url: 'https://gitlab.com/ayushborchate76',
    color: '#FC6D26',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
      </svg>
    ),
  },
  {
    label: 'Resume',
    url: '/resume.pdf',
    color: '#22c55e',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
];

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [fabOpen, setFabOpen]   = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 I'm Ayush's AI assistant. Ask me anything about his skills, projects, or experience!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { text: input, sender: 'user' };
    setMessages(p => [...p, userMsg]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);
    
    // Simulate thinking for 600ms-1s for smooth feel
    setTimeout(() => {
      const reply = getBotResponse(currentInput);
      setMessages(p => [...p, { text: reply, sender: 'bot' }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* ── FAB CLUSTER ── */}
      <div className="fab-cluster">

        {/* Social fan-out (ARC Animation) */}
        <AnimatePresence>
          {fabOpen && socialLinks.map((s, i) => {
            // Arc logic for 4 items from 90 deg (up) to 180 deg (left)
            const angle = Math.PI / 2 + (Math.PI / 2) * (i / 3);
            const radius = 95; // Pixels distance from center
            const destX = Math.round(radius * Math.cos(angle));
            const destY = Math.round(-radius * Math.sin(angle));
            
            return (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="fab-social"
                title={s.label}
                style={{ '--brand': s.color }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: 1, x: destX, y: destY, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0], backgroundColor: '#fff', color: s.color, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                {s.svg}
              </motion.a>
            );
          })}
        </AnimatePresence>

        {/* + button */}
        <motion.button
          className={`fab-main ${fabOpen ? 'fab-open' : ''}`}
          onClick={() => setFabOpen(p => !p)}
          aria-label="Toggle social links"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          animate={{ rotate: fabOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Sparkles size={24} />
        </motion.button>
      </div>

      {/* ── CHATBOT FLOAT (MIDDLE) ── */}
      <div className="chatbot-float">
        <div className="chatbot-toggle-wrapper">
          <span className="chatbot-label">AI ASSIST</span>
          <motion.button
            className={`chatbot-toggle ${chatOpen ? 'hidden' : ''}`}
            onClick={() => { setChatOpen(true); setFabOpen(false); }}
            aria-label="Open Chat"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            animate={chatOpen ? {} : {
              boxShadow: [
                '0 0 0 0 rgba(14,165,233,0.5)',
                '0 0 0 14px rgba(14,165,233,0)',
              ]
            }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <img src="/robot.png" alt="AI Assistant" className="chatbot-robot-img" />
            <span className="chat-pulse" />
          </motion.button>
        </div>
      </div>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.7, y: 40, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 40, transition: { duration: 0.25 } }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            {/* Glow top bar accent */}
            <div className="window-glow-bar" />

            {/* Header */}
            <div className="chatbot-header">
              <div className="chat-header-left">
                <motion.div
                  className="chat-robot-wrap"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img src="/robot.png" alt="Bot" className="chat-header-robot" />
                  <span className="online-dot" />
                </motion.div>
                <div className="chat-header-info">
                  <span className="chat-name">Ayush's AI Assistant</span>
                  <span className="chat-status">
                    <span className="status-blink">●</span> Online · AI Assistant
                  </span>
                </div>
              </div>
              <motion.button
                onClick={() => setChatOpen(false)}
                className="close-btn"
                aria-label="Close"
                whileHover={{ scale: 1.15, rotate: 90 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <X size={17} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`message-wrapper ${msg.sender}`}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  {msg.sender === 'bot' && (
                    <img src="/robot.png" alt="bot" className="msg-avatar" />
                  )}
                  <div className={`message ${msg.sender}`}>{msg.text}</div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="message-wrapper bot"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <img src="/robot.png" alt="bot" className="msg-avatar" />
                  <div className="message bot typing-indicator">
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form className="chatbot-input" onSubmit={handleSend}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything about Ayush..."
                autoFocus
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isTyping}
                whileHover={input.trim() ? { scale: 1.1 } : {}}
                whileTap={input.trim() ? { scale: 0.9 } : {}}
              >
                {isTyping ? <Loader2 size={17} className="spin-icon" /> : <Send size={17} />}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
