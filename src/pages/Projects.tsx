import { motion } from 'framer-motion';
import { ShieldCheck, Code2 } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { TextScramble } from '../components/ui/text-scramble';
import './Projects.css';

const projects = [
  {
    id: "TC-001",
    title: "Parabank Test Automation",
    date: "AUG 2025 — SEP 2025",
    type: "E2E Automation Suite",
    status: "pass",
    coverage: "85%",
    tools: ["Playwright", "NUnit", "C#", "DDT/BDD"],
    objective: "Worked on the Parabank banking application to implement automation testing techniques and data-driven approaches.",
    scope: "Navigation, form filling, and submission flows with extended reporting.",
    actions: [
      "Designed and implemented automation scripts using Playwright and NUnit.",
      "Applied both Data-Driven Testing (DDT) and Behavior-Driven Development (BDD).",
      "Created an extended report integrating execution results for complete coverage view."
    ],
    outcome: "Successfully automated core user actions and practitioners foundational automation tooling for scalable tests.",
    isVisible: true
  },
  {
    id: "TC-002",
    title: "OrangeHRM Testing Practice",
    date: "AUG 2025 — SEP 2025",
    type: "Comprehensive Manual Testing",
    status: "pass",
    coverage: "92%",
    tools: ["Manual Testing", "Test Case Design", "Defect Reporting"],
    objective: "Practiced manual testing on the OrangeHRM open-source application to apply QA fundamental concepts.",
    scope: "Login, Recruitment, Leave, and Performance modules.",
    actions: [
      "Conducted manual testing on core modules following standard QA practices.",
      "Designed and executed test cases independently for module functionalities.",
      "Reported defects with clear documentation of steps and expected vs actual results."
    ],
    outcome: "Strengthened practical understanding of QA lifecycle through hands-on practice on a mature HR platform.",
    isVisible: true
  },
  {
    id: "TC-003",
    title: "Motorcycle Violation Detection",
    date: "NOV 2024",
    type: "Final Year Project | AI QA",
    status: "pass",
    coverage: "Computer Vision Pipeline",
    tools: ["Python", "Django", "YOLO", "Postman", "Pytest"],
    objective: "Quality assurance for a machine-learning based vision system detecting traffic and helmet violations.",
    scope: "Detection accuracy, license plate recognition, and backend API robustness.",
    actions: [
      "Trained three specialized YOLO models for detection and recognition accuracy.",
      "Tested the backend application using Pytest and Postman for robust functionality.",
      "Developed and validated the web app backend using Django and PostgreSQL."
    ],
    outcome: "Delivered a reliable AI-driven reporting system with 15% improved model confidence through iterative testing.",
    isVisible: true
  },
  {
    id: "TC-004",
    title: "Vulnerability Scanning (OWASP)",
    date: "JAN 2025 — MAR 2025",
    type: "Security QA Assessment",
    status: "pass",
    coverage: "OWASP Top 10",
    tools: ["OWASP ZAP", "FoxyProxy", "Security Testing"],
    objective: "Identify and analyze web application vulnerabilities using OWASP Zed Attack Proxy (ZAP).",
    scope: "Passive/Active scanning, risks identification, and security reporting.",
    actions: [
      "Performed passive and active vulnerability scans to identify risks.",
      "Configured Firefox with FoxyProxy to intercept and modify HTTP traffic via ZAP.",
      "Used spider crawling to discover hidden files and generated comprehensive security reports."
    ],
    outcome: "Established a security baseline and prioritized high-severity findings for remediation.",
    isVisible: true
  },
  {
    id: "DS-005",
    title: "Food Delivery Mobile App",
    date: "JAN 2025 — MAR 2025",
    type: "UI/UX Design",
    status: "pass",
    coverage: "UX Flow",
    tools: ["Figma", "UI/UX", "Prototyping"],
    objective: "Designed a user-friendly mobile app for food ordering with focus on intuitive navigation.",
    scope: "Wireframing, prototypes, and cart flow optimization.",
    actions: [
      "Created wireframes and interactive prototypes for restaurant listings and ordering flows.",
      "Designed mobile-optimized layouts with clear hierarchy and touch-friendly interactions.",
      "Streamlined user journey to minimize browsing-to-ordering friction."
    ],
    outcome: "Produced a polished UI/UX prototype ready for developer handoff.",
    isVisible: true
  }
];

const Projects = () => {
  return (
    <div className="projects-page" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SeverityBadge level="high">Selected Projects</SeverityBadge>
          <h1 className="section-title">
            <span className="line-1">
              <TextScramble duration={1} delay={0.1}>Project</TextScramble>
            </span>
            <span className="line-2">
              <TextScramble duration={1} delay={0.4}>Implementations</TextScramble>
            </span>
          </h1>
          <p className="section-subtitle">
            A diverse portfolio showcasing AI-driven systems, product designs, and comprehensive quality assurance assessments.
          </p>
        </motion.div>
      </div>

      <div className="case-studies-list container">
        {projects
          .filter(project => project.isVisible !== false)
          .map((project, idx) => (
          <motion.div 
            key={project.id}
            className="case-study-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="cs-sidebar">
              <div className="cs-id mono-text">{project.id}</div>
              <div className={`cs-status-indicator ${project.status}`}>
                <div className="pulse-dot"></div>
                {project.status === 'pass' ? 'PASSED / COMPLETE' : 'IN_PROGRESS'}
              </div>
              <div className="cs-coverage">
                <span className="cov-label">Coverage</span>
                <span className="cov-val text-brand">{project.coverage}</span>
              </div>
            </div>

            <div className="cs-main">
              <div className="cs-header">
                <div className="cs-title-group">
                  <h2 className="cs-title">{project.title}</h2>
                  <span className="cs-date mono-text">{project.date}</span>
                </div>
                <div className="cs-type-chip">{project.type}</div>
              </div>

              <div className="cs-tools">
                {project.tools.map(tool => (
                  <span key={tool} className="tool-chip"><Code2 size={12}/> {tool}</span>
                ))}
              </div>

              <div className="cs-grid">
                <div className="cs-section">
                  <h3 className="section-label">Objective</h3>
                  <p>{project.objective}</p>
                </div>
                <div className="cs-section">
                  <h3 className="section-label">Scope</h3>
                  <p>{project.scope}</p>
                </div>
              </div>

              <div className="cs-section full">
                <h3 className="section-label">Validation Approach & Actions</h3>
                <ul className="cs-actions">
                  {project.actions.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              </div>

              <div className="cs-outcome">
                <span className="outcome-label"><ShieldCheck size={16}/> OUTCOME</span>
                <p className="outcome-text text-brand">{project.outcome}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
