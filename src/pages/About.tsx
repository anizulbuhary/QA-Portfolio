import { motion } from 'framer-motion';
import { Laptop2 } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { TextScramble } from '../components/ui/text-scramble';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <motion.div 
        className="about-header section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <SeverityBadge level="low">System Information</SeverityBadge>
          <h1 className="section-title">
            <TextScramble duration={1.2} delay={0.1}>
              About The Engineer
            </TextScramble>
          </h1>
          <p className="section-subtitle">
            Computer Science Graduate from Government College University, Lahore & Allama Iqbal Merit Scholar (HEC Pakistan), focusing on building a career in Software Quality Assurance.
          </p>
        </div>
      </motion.div>

      <div className="about-content container">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="prose">
            <p>
              My journey into Software Quality Assurance began during my Computer Science studies. While many peers focused solely on feature development, I found myself drawn to the mechanics of failure—understanding why systems break, how edge cases interact, and what it takes to build truly resilient software.
            </p>
            <p>
              I believe that QA is not a roadblock, but a vital enabler of velocity. Without confidence in the codebase, teams cannot move fast. My approach blends strong analytical thinking with technical capabilities, allowing me to write precise test scenarios, execute rigorous manual testing, and progressively build automated suites.
            </p>
            <p>
              I bring a disciplined mindset to every project: validating assumptions with evidence, documenting defects with clarity, and collaborating closely with developers to ensure the end product meets the highest standards of quality.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="about-visuals"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="academic-highlight">
            <h3 className="academic-title">Honors & Awards</h3>
            <div className="academic-card">
              <div className="academic-icon"><Laptop2 size={24}/></div>
              <div className="academic-info">
                <h4>Allama Iqbal Merit Based Scholarship</h4>
                <p>Awarded by HEC Pakistan &bull; Government College University, Lahore (2021-2025)</p>
                <p className="text-brand">BS (Hons) Computer Science &bull; CGPA: 3.28/4.00</p>
              </div>
            </div>
          </div>

          <div className="languages-container">
            <h3 className="academic-title">Linguistic Capability</h3>
            <div className="languages-grid">
              <div className="lang-item">
                <span className="lang-name">English</span>
                <span className="lang-level">Full Professional</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">Tamil</span>
                <span className="lang-level">Native</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">Sinhala</span>
                <span className="lang-level">Native</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">Urdu</span>
                <span className="lang-level">Elementary</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
