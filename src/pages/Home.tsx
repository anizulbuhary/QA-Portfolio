import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Bug,
  TerminalSquare,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { BackgroundPaths } from '../components/ui/background-paths';
import { TextScramble } from '../components/ui/text-scramble';
import { QADashboard } from '../components/ui/QADashboard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page" id="home">
      <BackgroundPaths className="hero-section-bg">
        <section className="hero container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="hero-status-pill mono-text">
              <span className="pulse-dot"></span> Test Environment Active
            </div>
            <h1 className="hero-title">
              <TextScramble duration={1.2} className="block">
                Fathima Anizul Fathool
              </TextScramble>
              <TextScramble duration={1.2} delay={0.3} className="text-brand block">
                Assuring Quality.
              </TextScramble>
            </h1>
            <p className="hero-description">
              I am a Computer Science graduate and an aspiring Software Quality Assurance
              Engineer. Through my internship experience, I have gained hands-on skills in
              testing, ensuring reliable, defect-free digital experiences, and contributing
              to high-quality software products.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Initialize Contact <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                Project Implementations
              </Link>
            </div>
            <p className="hero-meta mono-text">
              Live QA simulation active: Demonstrating real-world validation
              cycles.
            </p>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <QADashboard />
          </motion.div>
        </section>
      </BackgroundPaths>

      <section className="snapshot-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="section-title">Testing Snapshot</h2>
            <p className="section-subtitle">
              Core capabilities in the software validation lifecycle.
            </p>
          </motion.div>

          <div className="snapshot-grid">
            {[
              {
                icon: <Search size={28} />,
                title: 'Manual Testing',
                desc: 'Rigorous exploratory and structured manual testing to uncover edge cases and logic gaps.',
              },
              {
                icon: <TerminalSquare size={28} />,
                title: 'Automation Learning',
                desc: 'Building foundations in Playwright, Cypress, and Selenium for scalable test suites.',
              },
              {
                icon: <Bug size={28} />,
                title: 'Defect Management',
                desc: 'Clear, reproducible defect reporting with comprehensive root cause analysis.',
              },
              {
                icon: <ShieldCheck size={28} />,
                title: 'QA Methodologies',
                desc: 'Applying Agile testing, BDD, and risk-based testing strategies across sprints.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="snapshot-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="snap-icon-wrapper">{item.icon}</div>
                <h3 className="snap-title">{item.title}</h3>
                <p className="snap-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mindset-section container">
        <motion.div
          className="mindset-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <SeverityBadge level="medium">Core Philosophy</SeverityBadge>
          <h2 className="mindset-title">The Quality Mindset</h2>
          <p className="mindset-text">
            Quality is not just finding bugs at the end of a cycle; it is a
            continuous process of risk mitigation, clear communication, and
            empathetic user advocacy. I approach software reliability with a
            structured methodology, ensuring that what we build is exactly what
            we intend and that it performs robustly under real-world conditions.
          </p>
          <ul className="mindset-list">
            <li>
              <CheckCircle2 size={18} className="text-pass" /> Shift-Left Testing
              Integration
            </li>
            <li>
              <CheckCircle2 size={18} className="text-pass" /> Requirement
              Traceability
            </li>
            <li>
              <CheckCircle2 size={18} className="text-pass" /> Continuous Learning &
              Adaptation
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="mindset-visual"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div 
            className="validation-strip-container"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.4,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="validation-strip">
              <motion.div 
                className="val-step pass"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <div className="val-circle">1</div>
                <span>Requirements</span>
              </motion.div>
              
              <motion.div 
                className="val-line"
                variants={{
                  hidden: { scaleX: 0, scaleY: 0 },
                  visible: { scaleX: 1, scaleY: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <motion.div 
                className="val-step pass"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <div className="val-circle">2</div>
                <span>Design</span>
              </motion.div>

              <motion.div 
                className="val-line"
                variants={{
                  hidden: { scaleX: 0, scaleY: 0 },
                  visible: { scaleX: 1, scaleY: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <motion.div 
                className="val-step active"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <div className="val-circle relative">
                  3
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-rose-500/50"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <span>Implementation</span>
              </motion.div>

              <motion.div 
                className="val-line pending"
                variants={{
                  hidden: { scaleX: 0, scaleY: 0 },
                  visible: { scaleX: 1, scaleY: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <motion.div 
                className="val-step pending"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <div className="val-circle">4</div>
                <span>Validation</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
