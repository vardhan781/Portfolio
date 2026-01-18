import "./About.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BookOpen,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const techIcons = [
    { name: "React", icon: assets.react },
    { name: "Node.js", icon: assets.node },
    { name: "MongoDB", icon: assets.mongodb },
    { name: "Express", icon: assets.express },
    { name: "JavaScript", icon: assets.js },
    { name: "HTML", icon: assets.html },
    { name: "CSS", icon: assets.css },
    { name: "Git", icon: assets.git },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="title-wrapper">
            <BookOpen className="section-icon" size={28} strokeWidth={1.5} />
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="intro-title">
              I Am <span className="name-highlight">Vardhansinh</span>, A
              Full-Stack Developer
            </h3>
            <p className="intro-description">
              I'm a versatile developer specializing in both website and
              application development. With a strong grasp of front-end and
              back-end technologies, I build responsive, user-friendly digital
              solutions that are both functional and visually engaging. Whether
              it's a sleek website or a full-featured app, I focus on clean
              code, performance, and seamless user experience.
            </p>
          </motion.div>

          <div className="about-cards-grid">
            <motion.div
              className="about-card education-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <div className="card-icon-wrapper">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>
                <h3 className="card-title">Education</h3>
              </div>

              <div className="education-details">
                <div className="education-item">
                  <h4 className="education-degree">
                    Bachelor of Technology in Information Technology
                  </h4>
                  <p className="education-institution">
                    Aditya Silver Oak Institute of Technology, Silver Oak
                    University
                  </p>
                  <div className="education-meta">
                    <span className="education-period">
                      August 2021 - May 2025
                    </span>
                    <span className="education-status">
                      Expected Graduation
                    </span>
                  </div>
                  <p className="education-focus">
                    Focused on cutting-edge technologies in software
                    development, web and mobile applications, and IT
                    infrastructure.
                  </p>
                </div>
              </div>

              <div className="card-divider"></div>

              <div className="card-achievements">
                <div className="achievement-item">
                  <CheckCircle
                    size={16}
                    strokeWidth={1.5}
                    className="achievement-icon"
                  />
                  <span>Specialization in Web Technologies</span>
                </div>
                <div className="achievement-item">
                  <CheckCircle
                    size={16}
                    strokeWidth={1.5}
                    className="achievement-icon"
                  />
                  <span>Advanced Software Development</span>
                </div>
                <div className="achievement-item">
                  <CheckCircle
                    size={16}
                    strokeWidth={1.5}
                    className="achievement-icon"
                  />
                  <span>Mobile Application Development</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-card tech-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <div className="card-icon-wrapper">
                  <Code2 size={24} strokeWidth={1.5} />
                </div>
                <h3 className="card-title">Tech Stack</h3>
              </div>

              <div className="tech-stack-grid">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="tech-icon-wrapper">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="tech-icon"
                      />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="card-divider"></div>

              <div className="tech-proficiency">
                <div className="proficiency-item">
                  <span className="proficiency-label">Frontend</span>
                  <div className="proficiency-bar">
                    <motion.div
                      className="proficiency-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="proficiency-percent">90%</span>
                </div>
                <div className="proficiency-item">
                  <span className="proficiency-label">Backend</span>
                  <div className="proficiency-bar">
                    <motion.div
                      className="proficiency-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="proficiency-percent">85%</span>
                </div>
                <div className="proficiency-item">
                  <span className="proficiency-label">Mobile</span>
                  <div className="proficiency-bar">
                    <motion.div
                      className="proficiency-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="proficiency-percent">80%</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="github-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="github-content">
              <div className="github-text">
                <h3>Explore More Projects</h3>
                <p>
                  With great code comes great repositories. Swing by my GitHub
                  and see what else I've been cooking up!
                </p>
              </div>
              <motion.a
                href="https://github.com/vardhan781?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit GitHub</span>
                <ChevronRight size={20} strokeWidth={1.5} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
