import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, ChevronDown, Activity } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { TextScramble } from '../components/ui/text-scramble';
import { useState } from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Prompt Engineering Specialization',
    issuer: 'Coursera (Vanderbilt University)',
    status: 'Verified',
    date: 'March 2026',
    link: '#',
    details: [
      'Focusing on designing effective prompts for generative AI systems like ChatGPT.',
      'Practical experience in prompt design and AI-assisted problem solving.',
      'Skilled in using generative AI for data analysis, productivity tasks, and building reliable AI workflows.'
    ],
    isVisible: true
  },
  {
    title: 'Selenium Automation Testing for Beginners',
    issuer: 'EC - Council',
    status: 'Verified',
    date: 'July 2025',
    link: '#',
    details: [
      'Gained hands-on experience with Selenium setup and running tests on Chrome.',
      'Identifying and interacting with web elements using locators and XPath.',
      'Applying synchronization techniques with implicit and explicit waits.',
      'Learned to perform mouse operations and handle dynamic web elements for efficient test automation.'
    ],
    isVisible: true
  },
  {
    title: 'User Interface Design',
    issuer: 'California Institute of the Arts',
    status: 'Verified',
    date: 'March 2025',
    link: '#',
    details: [
      'Defined and recognized user interfaces and distinguished UI from UX design.',
      'Identified and applied key strategies and conventions for effective user interaction.',
      'Understood visual hierarchy and prototyping for modern digital experiences.'
    ],
    isVisible: true
  },
  {
    title: 'Programming Essentials In Python',
    issuer: 'OpenDG Python Institute',
    status: 'Verified',
    date: 'March 2022',
    link: '#',
    details: [
      'Acquired a solid foundation in programming fundamentals—including variables, control flow, data structures, and algorithms.',
      'Mastered Python syntax, object-oriented programming, and best practices.'
    ],
    isVisible: true
  },
  {
    title: 'Cisco Certified Network Associate (CCNAv7)',
    issuer: 'SLIIT',
    status: 'Verified',
    date: 'April 2021',
    link: '#',
    details: [
      'Configured switches, routers, and end devices.',
      'Implemented IPv4/IPv6 addressing and security best practices.',
      'Explained OSI/Ethernet protocols and troubleshot connectivity issues.'
    ],
    isVisible: true
  }
];

const Certifications = () => {
  return (
    <div className="certifications-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <SeverityBadge level="medium">Verified Capabilities</SeverityBadge>
          <h1 className="page-title">
            <TextScramble duration={1.2} delay={0.1}>
              Verified Evidence
            </TextScramble>
          </h1>
        </div>
      </motion.div>

      <div className="cert-list container">
        {certifications
          .filter(cert => cert.isVisible !== false)
          .map((cert, idx) => (
          <CertCard key={cert.title} cert={cert} idx={idx} />
        ))}
      </div>
      
      <motion.div 
        className="learning-path-note"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <CheckCircle2 color="var(--color-brand)" size={20}/>
        <p>Continuously expanding knowledge base, actively pursuing advanced automation certifications.</p>
      </motion.div>
    </div>
  );
};
const CertCard = ({ cert, idx }: { cert: typeof certifications[0], idx: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={`cert-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="cert-main-row">
        <div className="cert-icon">
          <Award size={24} />
        </div>
        <div className="cert-info">
          <h2 className="cert-title">{cert.title}</h2>
          <div className="cert-meta">
            <span className="cert-issuer">{cert.issuer}</span>
            <span className="bullet">&bull;</span>
            <span className="cert-date">{cert.date}</span>
          </div>
        </div>
        <div className="cert-actions">
          <div className="cert-status desktop-only">
            <span className="status-pill pass">
              <ShieldCheck size={14}/> {cert.status}
            </span>
          </div>
          <motion.div 
            className="expand-icon"
            animate={{ rotate: isExpanded ? 180 : 0 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="cert-details-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="cert-details-content">
              <h4 className="details-header mono-text"><Activity size={12}/> KEY_LEARNINGS</h4>
              <ul className="details-list">
                {cert.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="mobile-only mt-4">
                <span className="status-pill pass">
                  <ShieldCheck size={14}/> {cert.status}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certifications;
