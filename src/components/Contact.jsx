import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Use mailto as a real send method
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:ayushborchate76@gmail.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span>Touch</span></h2>

          <div className="contact-content">
            {/* Left: Contact info */}
            <div className="contact-info">
              <h3 className="contact-heading">Let's build something amazing!</h3>
              <p className="contact-desc">
                Feel free to reach out for collaborations, project inquiries, or just to say hi.
                I'm currently open to new opportunities and would love to hear from you.
              </p>

              <div className="info-items">
                <motion.a
                  href="mailto:ayushborchate76@gmail.com"
                  className="info-item"
                  whileHover={{ x: 6 }}
                >
                  <div className="info-icon" style={{ background: 'rgba(0,229,255,0.12)', border: '1.5px solid #00e5ff', color: '#00e5ff' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <span>ayushborchate76@gmail.com</span>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919860316595"
                  className="info-item"
                  whileHover={{ x: 6 }}
                >
                  <div className="info-icon" style={{ background: 'rgba(0,255,136,0.12)', border: '1.5px solid #00ff88', color: '#00ff88' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Call Me</h4>
                    <span>+91 9860316595</span>
                  </div>
                </motion.a>

                <motion.div className="info-item" whileHover={{ x: 6 }}>
                  <div className="info-icon" style={{ background: 'rgba(178,0,255,0.12)', border: '1.5px solid #b200ff', color: '#b200ff' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>Alephtata, Maharashtra, India</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.form
              className="contact-form glass"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${sent ? 'sent' : ''}`}
                disabled={sending || sent}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {sent ? (
                  <><CheckCircle size={18} /> Message Sent!</>
                ) : sending ? (
                  <><span className="spin-loader" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
