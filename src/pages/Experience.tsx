import { motion } from 'framer-motion';
import { Briefcase, AlertTriangle, FileCheck2, Terminal } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { TextScramble } from '../components/ui/text-scramble';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <SeverityBadge level="medium">Experience</SeverityBadge>
          <h1 className="page-title">
            <TextScramble duration={1.2} delay={0.1}>
              Experience
            </TextScramble>
          </h1>
        </div>
      </motion.div>

      <div className="experience-timeline container">
        <motion.div 
          className="exp-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="exp-status-line"></div>
          
          <div className="exp-content">
            <div className="exp-header">
              <div className="exp-title-row">
                <h2 className="exp-role">Trainee SQA Engineer</h2>
                <span className="exp-date mono-text">[AUG 2025 — NOV 2025]</span>
              </div>
              <div className="exp-meta">
                <span className="meta-tag"><Briefcase size={14}/> NETSOL Technologies Ltd.</span>
                <span className="meta-tag"><Terminal size={14}/> SQA Team | Cross-Platform</span>
              </div>
            </div>

            <div className="exp-details">
              <div className="detail-section">
                <h3><FileCheck2 size={16} /> Scope & Responsibilities</h3>
                <p>
                  Engaged in comprehensive manual and foundational automated testing for enterprise applications, primarily focusing on the OrangeHRM platform and banking domains.
                </p>
                <ul className="action-list">
                  <li>Validated core <strong>OrangeHRM Modules</strong> including Login, Recruitment, Leave, and Performance.</li>
                  <li>Drafted and executed 50+ detailed test cases independently for module functionalities.</li>
                  <li>Prepared detailed defect reports with precise replication steps and expected vs actual outcomes.</li>
                </ul>
              </div>

              <div className="detail-section">
                <h3><AlertTriangle size={16} /> Automation Transition & Tooling</h3>
                <p>
                  Actively bridging the gap from manual execution to scalable automation frameworks to increase regression efficiency.
                </p>
                <div className="tool-chips">
                  <span className="tool-chip">Playwright</span>
                  <span className="tool-chip">NUnit</span>
                  <span className="tool-chip">Data-Driven Testing (DDT)</span>
                  <span className="tool-chip">Behavior-Driven Development (BDD)</span>
                </div>
              </div>

              <div className="execution-summary">
                <div className="summary-col">
                  <span className="sum-val">Daily</span>
                  <span className="sum-label">Execution Cycle</span>
                </div>
                <div className="summary-col">
                  <span className="sum-val text-brand">Agile</span>
                  <span className="sum-label">Methodology</span>
                </div>
                <div className="summary-col">
                  <span className="sum-val text-pass">Verified</span>
                  <span className="sum-label">Release Confidence</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Experience;
