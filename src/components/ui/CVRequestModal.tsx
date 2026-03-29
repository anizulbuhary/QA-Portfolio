import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertTriangle, Loader2, X, TerminalSquare } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './CVRequestModal.css';

export const CVRequestModal = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const isOpen = location.hash === '#request-cv';

  const close = () => {
    navigate(location.pathname + location.search, { replace: true });
    // Keep success state briefly so it doesn't flicker during animation
    if(status === 'success') {
      setTimeout(() => setStatus('idle'), 500);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

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
      }, (error) => {
        console.error('Email Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cv-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <div className="cv-modal-wrapper">
            <motion.div 
              className="cv-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <button className="cv-modal-close" onClick={close} aria-label="Close">
                <X size={20} />
              </button>
              <div className="cv-modal-content">
                <div className="cv-modal-header">
                  <div className="cv-modal-icon">
                    <TerminalSquare size={24} className="text-brand" />
                  </div>
                  <h2>Request Credential</h2>
                  <p>Secure payload transmission for CV access.</p>
                </div>

                {status === 'success' ? (
                  <motion.div 
                    className="cv-modal-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle size={48} className="text-pass" />
                    <h3>Transmission Complete</h3>
                    <p>Your request has been securely delivered. I will review and attach the CV payload shortly.</p>
                    <button className="btn btn-primary" onClick={close}>Terminate Session</button>
                  </motion.div>
                ) : (
                  <form className="contact-form" ref={formRef} onSubmit={handleTransmit}>
                    <div className="form-group">
                      <label htmlFor="cv_name">Requester Identifier</label>
                      <input type="text" id="cv_name" name="name" placeholder="E.g., John from TechCorp" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cv_email">Return Address (Email)</label>
                      <input type="email" id="cv_email" name="email" placeholder="john@company.com" required />
                    </div>
                    
                    {/* Hidden field for message since it's an automated CV request */}
                    <input type="hidden" name="message" value="[AUTOMATED SECURE PAYLOAD REQUEST: Fathima Anizul's CV]" />

                    <button 
                      type="submit" 
                      className={`btn btn-primary submit-btn ${status !== 'idle' ? 'loading' : ''}`}
                      disabled={status !== 'idle'}
                      style={{ marginTop: '1rem' }}
                    >
                      {status === 'idle' && <>Init Transmit <Send size={16} /></>}
                      {status === 'sending' && <>Encrypting... <Loader2 size={16} className="animate-spin" /></>}
                      {status === 'error' && <>Retry <AlertTriangle size={16} /></>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
