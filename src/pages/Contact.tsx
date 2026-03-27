import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, TerminalSquare, Phone, Copy, Check } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('anizulfathool@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`QA Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Sender: ${name} (${email})\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:anizulfathool@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <SeverityBadge level="low">Open Network</SeverityBadge>
          <h1 className="page-title">Initialize Endpoint</h1>
          <p className="page-subtitle">Available for Software Quality Assurance Internship or Junior SQA engineering opportunities.</p>
        </div>
      </motion.div>

      <div className="contact-grid container">
        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="availability-card">
            <div className="avail-status pass"></div>
            <div>
              <h3>Currently Available</h3>
              <p>Ready to join a quality-focused engineering team</p>
            </div>
          </div>

          <div className="contact-methods">
            <div className="contact-method-wrapper relative">
              <a 
                href="mailto:anizulfathool@gmail.com" 
                className="contact-method"
                onClick={() => {
                  window.location.href = 'mailto:anizulfathool@gmail.com';
                }}
              >
                <div className="method-icon"><Mail size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Email Communications</span>
                  <span className="method-val">anizulfathool@gmail.com</span>
                </div>
              </a>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={copyEmail}
                title="Copy Email Address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <a href="tel:+94774168673" className="contact-method">
              <div className="method-icon"><Phone size={20} /></div>
              <div className="method-details">
                <span className="method-label">Mobile Hotline</span>
                <span className="method-val">+94 774 168 673</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/fathima-anizul-fathool-9297451bb" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon"><Linkedin size={20} /></div>
              <div className="method-details">
                <span className="method-label">Professional Network</span>
                <span className="method-val">linkedin.com/in/fathima-anizul-fathool</span>
              </div>
            </a>
            <div className="contact-method is-static">
              <div className="method-icon"><Github size={20} /></div>
              <div className="method-details">
                <span className="method-label">Code Repository</span>
                <span className="method-val text-brand-light">Available on Request</span>
              </div>
            </div>
          </div>

          <div className="qa-greeting">
            <TerminalSquare size={16} className="text-brand" />
            <span className="mono-text">Awaiting input stream...</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleTransmit}>
            <div className="form-header">
              <h3>Secure Message Relay</h3>
              <span className="form-status mono-text">ENDPOINT READY</span>
            </div>

            <div className="form-group">
              <label htmlFor="name">Sender Identifier (Name)</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Return Address (Email)</label>
              <input type="email" id="email" name="email" placeholder="john@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Payload (Message)</label>
              <textarea id="message" name="message" rows={5} placeholder="Discussing a potential QA opportunity..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Transmit <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
