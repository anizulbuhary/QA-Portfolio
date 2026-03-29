import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, TerminalSquare, Phone, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('request') === 'cv') {
      setMessage("Hi Anizul, I'm interested in your profile and would like to request a copy of your CV.");
      
      // Smooth scroll to form on mobile if needed
      if (window.innerWidth < 992) {
        const formElement = document.querySelector('.contact-form-panel');
        formElement?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleTransmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    // Updated with your EmailJS credentials
    const SERVICE_ID = 'service_4wcntdn';
    const TEMPLATE_ID = 'template_d13432f';
    const PUBLIC_KEY = '7AWdVRPuNzTfYn3kv';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('Email Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
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
            <a 
              href="mailto:anizulfathool@gmail.com" 
              className="contact-method"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:anizulfathool@gmail.com';
              }}
            >
              <div className="method-icon"><Mail size={20} /></div>
              <div className="method-details">
                <span className="method-label">Email Communications</span>
                <span className="method-val">anizulfathool@gmail.com</span>
              </div>
            </a>
            <div className="contact-method is-static">
              <div className="method-icon"><Phone size={20} /></div>
              <div className="method-details">
                <span className="method-label">Mobile Hotline</span>
                <span className="method-val text-brand-light">Available on Request</span>
              </div>
            </div>
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
          <form className="contact-form" ref={formRef} onSubmit={handleTransmit}>
            <div className="form-header">
              <h3>Secure Message Relay</h3>
              <div className="form-status-indicator">
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="form-status mono-text">ENDPOINT READY</motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="form-status sending mono-text"><Loader2 size={12} className="animate-spin" /> ENCRYPTING...</motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="form-status pass mono-text">TRANSMISSION COMPLETE</motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="form-status fail mono-text">XMIT FAILED</motion.span>
                  )}
                </AnimatePresence>
              </div>
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
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Discussing a potential QA opportunity..." 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${status !== 'idle' ? 'loading' : ''}`}
              disabled={status !== 'idle'}
            >
              {status === 'idle' && <>Transmit <Send size={16} /></>}
              {status === 'sending' && <>Encrypting...</>}
              {status === 'success' && <>Sent <CheckCircle size={16} /></>}
              {status === 'error' && <>Retry <AlertTriangle size={16} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
