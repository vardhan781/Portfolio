import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Terminal,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const workExperience = {
    company: "Reveation Technologies",
    period: "Nov 2025 - Present",
    role: "Software Developer",
    responsibilities: [
      "Developed and maintained scalable web applications using React.js, Node.js, MySQL, and reusable component-based architecture with ShadCN UI.",
      "Built subscription and product management modules with role-based access control, dynamic plan configuration, feature mapping, and admin management functionalities.",
      "Worked on ERP modules for pharma stockist operations including inventory management, purchase orders, category management, scheme management, sales company management, and multi-role workflows for Super Admins, Admins, Stockists, and Chemists.",
      "Implemented structured backend architecture using Router, Request Mapper, Response Mapper, Repository, and Handler layers for clean code organization and scalable API development.",
      "Contributed to React Native applications (Smart Setu and Smartian) by upgrading UI/UX across dashboards, profile management, order management, expense management, tour planning, and role-based navigation systems.",
      "Developed responsive UI modules and reusable frontend components for multiple internal projects including HRMS systems and enterprise dashboards.",
      "Collaborated with team members on API integrations, state management, performance optimization, and feature enhancements across web and mobile applications.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "MySQL",
      "React Native",
      "ShadCN UI",
      "Express.js",
      "REST APIs",
    ],
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="experience-title-wrapper">
            <Briefcase
              className="experience-section-icon"
              size={28}
              strokeWidth={1.5}
            />
            <h2 className="experience-section-title">Work Experience</h2>
          </div>
          <p className="experience-section-subtitle">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="experience-dual-layout">
          <motion.div
            className="experience-code-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="code-card-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-file-name">
                <Terminal size={14} strokeWidth={1.5} />
                <span>experience.js</span>
              </div>
            </div>

            <div className="code-card-body">
              <div className="code-line">
                <span className="code-comment">
                  // Professional Experience & Responsibilities
                </span>
              </div>

              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> experience</span>
                <span className="code-operator"> = </span>
                <span className="code-bracket">{`{`}</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">role</span>
                <span className="code-operator">:</span>
                <span className="code-string"> "Software Developer"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">company</span>
                <span className="code-operator">:</span>
                <span className="code-string"> "Reveation Technologies"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">duration</span>
                <span className="code-operator">:</span>
                <span className="code-string"> "Nov 2025 - Present"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">stack</span>
                <span className="code-operator">:</span>
                <span className="code-bracket"> [</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"React.js"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string"> "Node.js"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string"> "MySQL"</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"React Native"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string"> "Express.js"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string"> "REST APIs"</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-bracket">]</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">modules</span>
                <span className="code-operator">:</span>
                <span className="code-bracket"> [</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"ERP Systems"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"Subscription Management"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"Inventory Management"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"Role Based Access"</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"React Native Applications"</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-bracket">]</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">architecture</span>
                <span className="code-operator">:</span>
                <span className="code-bracket"> [</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"Router Layer"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string"> "Repository Pattern"</span>
              </div>

              <div className="code-line indent-2">
                <span className="code-string">"Request Mapper"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string"> "Response Mapper"</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-bracket">]</span>
                <span className="code-punctuation">,</span>
              </div>

              <div className="code-line indent-1">
                <span className="code-property">status</span>
                <span className="code-operator">:</span>
                <span className="code-string"> "Currently Working"</span>
              </div>

              <div className="code-line">
                <span className="code-bracket">{`}`}</span>
                <span className="code-punctuation">;</span>
              </div>

              <div className="code-line">
                <span className="code-comment">// Exporting Experience</span>
              </div>

              <div className="code-line">
                <span className="code-keyword">export</span>
                <span className="code-keyword"> default</span>
                <span className="code-variable"> experience</span>
                <span className="code-punctuation">;</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="experience-detail-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="exp-card-header">
              <div className="exp-icon-wrapper">
                <Building2 size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="exp-role">{workExperience.role}</h3>
                <p className="exp-company">{workExperience.company}</p>
              </div>
            </div>

            <div className="exp-meta">
              <Calendar size={14} strokeWidth={1.5} />
              <span>{workExperience.period}</span>
            </div>

            <div className="exp-responsibilities">
              <h4>Key Responsibilities</h4>
              <ul>
                {workExperience.responsibilities.map((point, idx) => (
                  <li key={idx}>
                    <ArrowUpRight size={14} strokeWidth={2} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-tech">
              {workExperience.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
