import { motion } from 'framer-motion';
import { Layers, Bug, Code2, Shield, Wrench } from 'lucide-react';
import { SeverityBadge } from '../components/ui/SeverityBadge';
import { TextScramble } from '../components/ui/text-scramble';
import './Skills.css';

const skillCategories = [
  {
    title: 'Manual Testing',
    icon: <Bug size={20}/>,
    skills: ['Test Case Design', 'Exploratory Testing', 'Defect Lifecycle Management', 'Requirement Traceability', 'Agile Testing (Scrum)']
  },
  {
    title: 'Automation Foundations',
    icon: <Layers size={20}/>,
    skills: ['Playwright', 'Selenium WebDriver', 'Cypress Basics', 'TestNG / JUnit', 'Data-Driven Testing (DDT)']
  },
  {
    title: 'Security Testing Exposure',
    icon: <Shield size={20}/>,
    skills: ['OWASP ZAP', 'Burp Suite', 'Nmap / Wireshark', 'Basic Penetration Testing', 'Security Best Practices']
  },
  {
    title: 'Programming & Technologies',
    icon: <Code2 size={20}/>,
    skills: ['Python, Java, C++', 'HTML, CSS, JavaScript', 'MySQL / SQL', 'Django', 'Jupyter Notebooks']
  },
  {
    title: 'Professional Competencies',
    icon: <Layers size={20}/>,
    skills: ['Problem Solving', 'Communication', 'Time Management', 'Teamwork', 'Adaptability']
  },
  {
    title: 'QA Tools & Workflow',
    icon: <Wrench size={20}/>,
    skills: ['Figma', 'Excel', 'Jira / Confluence', 'Git / GitHub', 'Postman / API Testing']
  }
];

const Skills = () => {
  return (
    <div className="skills-page" id="skills">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <SeverityBadge level="medium">Capability Matrix</SeverityBadge>
          <h1 className="page-title">
            <TextScramble duration={1.2} delay={0.1}>
              Capability Matrix
            </TextScramble>
          </h1>
        </div>
      </motion.div>

      <div className="skills-content container">
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{category.icon}</div>
                <h3 className="skill-cat-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map(skill => (
                  <li key={skill} className="skill-item">
                    <span className="skill-bullet"></span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tool-stack-matrix"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="matrix-header">
            <h3 className="matrix-title mono-text">Tool Familiarity Matrix</h3>
            <p className="matrix-subtitle">Comprehensive technical stack across the full software lifecycle.</p>
          </div>
          <div className="matrix-grid">
            <div className="matrix-col">
              <h4>Automation & Tools</h4>
              <motion.div 
                className="matrix-items"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Playwright', 'Selenium', 'Cypress', 'Figma', 'Excel'].map(tool => (
                  <motion.span 
                    key={tool} 
                    className="tool-chip"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="matrix-col">
              <h4>Development & DB</h4>
              <motion.div 
                className="matrix-items"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Python', 'Java / C++', 'Django', 'MySQL', 'Jupyter'].map(tool => (
                  <motion.span 
                    key={tool} 
                    className="tool-chip"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="matrix-col">
              <h4>Security & Network</h4>
              <motion.div 
                className="matrix-items"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.4 }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['OWASP ZAP', 'Burp Suite', 'Nmap', 'Wireshark'].map(tool => (
                  <motion.span 
                    key={tool} 
                    className="tool-chip"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
