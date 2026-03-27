import { Link } from 'react-router-dom';
import { Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-name">Fathima Anizul Fathool</span>
          <span className="footer-role mono-text">SQA ENGINEER</span>
          <p className="footer-desc">
            Bridging the gap between development and reliability through
            structured validation and continuous improvement.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4 className="link-group-title">Sitemap</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="link-group">
            <h4 className="link-group-title">Connect</h4>
            <Link to="/contact">Contact</Link>
            <span className="footer-note">GitHub Repository: On Request</span>
          </div>
        </div>

        <div className="footer-actions">
          <div className="social-links" aria-label="Contact methods">
            <button 
              onClick={() => {
                navigator.clipboard.writeText('anizulfathool@gmail.com');
                alert('Email address copied to clipboard!');
              }}
              className="social-icon"
              title="Click to copy: anizulfathool@gmail.com"
            >
              <MailIcon size={20} />
            </button>
            <a 
              href="https://www.linkedin.com/in/fathima-anizul-fathool-9297451bb" 
              className="social-icon"
              target="_blank" 
              rel="noopener noreferrer" 
              title="Visit LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="sys-status mono-text">
          <span className="pulse-dot"></span> STATUS:{' '}
          <span className="status-ok">ALL SYSTEMS OPERATIONAL</span>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Fathima Anizul Fathool. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
