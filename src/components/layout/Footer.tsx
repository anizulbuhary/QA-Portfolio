import { Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          </div>
          <div className="link-group">
            <h4 className="link-group-title">Connect</h4>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
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
