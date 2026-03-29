import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bug, Menu, X, Linkedin, Mail, ArrowRight, Sun, Moon } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <Link to="/" className="brand" onClick={() => setIsOpen(false)}>
          <Bug className="brand-icon" size={24} />
          <div className="brand-text">
            <span className="name">Anizul</span>
            <span className="role mono-text">SQA_ENGINEER</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-links desktop-only" aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="active-indicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions desktop-only">
            <div className="social-links-desktop">
              <a href="https://www.linkedin.com/in/fathima-anizul-fathool-9297451bb" target="_blank" rel="noopener noreferrer" className="social-icon-nav" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <Link to="/contact" className="status-badge variant-outline compact">
              <Mail size={14} />
              <span>Contact</span>
            </Link>
            <a 
              href="mailto:anizulfathool@gmail.com?subject=CV Request - Fathima Anizul Fathool&body=Hi Anizul, I am interested in your profile and would like to request a copy of your CV."
              className="status-badge variant-outline compact"
              title="Request CV via Email"
            >
              <Mail size={14} />
              <span>Request CV</span>
            </a>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle ${isOpen ? 'is-active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Modern Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu-content container">
                <nav className="mobile-nav" aria-label="Mobile Navigation">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <Link 
                          to={link.path}
                          className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="link-number mono-text">0{idx + 1}</span>
                          <span className="link-text">{link.name}</span>
                          <ArrowRight className="link-arrow" size={16} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div 
                  className="mobile-menu-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a 
                    href="mailto:anizulfathool@gmail.com?subject=CV Request - Fathima Anizul Fathool&body=Hi Anizul, I am interested in your profile and would like to request a copy of your CV."
                    className="mobile-cv-btn"
                  >
                    <Mail size={18} />
                    <span>Request CV</span>
                  </a>

                   <div className="mobile-socials">
                    <a href="https://www.linkedin.com/in/fathima-anizul-fathool-9297451bb" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Linkedin size={20} />
                    </a>
                    <button 
                      className="theme-toggle-mobile" 
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                    >
                      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
