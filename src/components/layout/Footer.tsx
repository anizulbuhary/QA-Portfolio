import { Link } from 'react-router-dom';
import { Github as GithubIcon, Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-react';
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
            <span className="footer-note">LinkedIn shared on request</span>
            <span className="footer-note">GitHub samples available on request</span>
          </div>
        </div>

        <div className="footer-actions">
          <div className="social-links" aria-label="Contact methods">
            <a href="mailto:anizulfathool@gmail.com" title="Email anizulfathool@gmail.com">
              <MailIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/fathima-anizul-fathool-9297451bb" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
              <GithubIcon size={20} />
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
