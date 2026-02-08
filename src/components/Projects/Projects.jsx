import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Server,
  Smartphone as Phone,
  Monitor,
  Terminal,
  ExternalLink,
  Download,
  Smartphone,
} from "lucide-react";
import { FaGithub as GitHub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RareFashion E-commerce",
      description:
        "Full-stack e-commerce platform with complete admin dashboard, payment integration, and OTP authentication.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
      links: [
        {
          type: "live",
          icon: ExternalLink,
          label: "Live Site",
          url: "https://rarefashion.vercel.app",
        },
        {
          type: "admin",
          icon: Server,
          label: "Admin Panel",
          url: "https://rarefashion-admin.vercel.app",
        },
        {
          type: "github",
          icon: GitHub,
          label: "Source Code",
          url: "https://github.com/vardhan781/Rare-Fashion",
        },
      ],
      type: "web",
    },
    {
      id: 2,
      title: "RareFashion Mobile",
      description:
        "Cross-platform mobile app with React Native, featuring secure authentication and payment gateway.",
      tech: ["React Native", "Expo", "Node.js", "JWT", "MongoDB", "Express"],
      links: [
        {
          type: "github",
          icon: GitHub,
          label: "Source Code",
          url: "https://github.com/vardhan781/Rare-Fashion-Application",
        },
        {
          type: "download",
          icon: Download,
          label: "Download APK",
          url: "https://expo.dev/accounts/vardhan_sinh/projects/rare-fashion-app/builds/9c80b78a-fcdd-4895-9107-fa452f024683",
        },
        {
          type: "preview",
          icon: Smartphone,
          label: "Expo Preview",
          url: "https://expo.dev/accounts/vardhan_sinh/projects",
        },
      ],
      type: "mobile",
    },
    {
      id: 3,
      title: "Movie Point",
      description:
        "Movie review platform with IMDb integration, user reviews, ratings, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Nodemailer"],
      links: [
        {
          type: "live",
          icon: ExternalLink,
          label: "Live Site",
          url: "https://moviepoint-sleek.vercel.app",
        },
        {
          type: "admin",
          icon: Server,
          label: "Admin Panel",
          url: "https://moviepoint-admin.vercel.app",
        },
        {
          type: "github",
          icon: GitHub,
          label: "Source Code",
          url: "https://github.com/vardhan781/Movie-Point",
        },
      ],
      type: "web",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="projects-title-wrapper">
            <Code2
              className="projects-section-icon"
              size={28}
              strokeWidth={1.5}
            />
            <h2 className="projects-section-title">Featured Projects</h2>
          </div>
          <p className="projects-section-subtitle">
            Full-stack applications built with modern technologies
          </p>
        </motion.div>

        <motion.div
          className="projects-code-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="projects-code-container">
            <div className="projects-code-header">
              <div className="projects-code-window-controls">
                <div className="projects-code-control projects-code-close"></div>
                <div className="projects-code-control projects-code-minimize"></div>
                <div className="projects-code-control projects-code-maximize"></div>
              </div>
              <div className="projects-code-title">
                <Terminal size={14} strokeWidth={1.5} />
                <span>projects.js</span>
              </div>
            </div>

            <div className="projects-code-content">
              <div className="projects-code-line">
                <span className="projects-code-comment">
                  // Tech Stack Used Across Projects
                </span>
              </div>

              <div className="projects-code-line">
                <span className="projects-code-keyword">const</span>
                <span className="projects-code-variable"> projectsData</span>
                <span className="projects-code-operator"> = </span>
                <span className="projects-code-bracket">{`{`}</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">count</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-number"> 3</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">framework</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-string"> "MERN Stack"</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">frontend</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-bracket"> [</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"React.js"</span>
                <span className="projects-code-punctuation">,</span>
                <span className="projects-code-string"> "React Native"</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-bracket">]</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">backend</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-bracket"> [</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"Node.js"</span>
                <span className="projects-code-punctuation">,</span>
                <span className="projects-code-string"> "Express.js"</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-bracket">]</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">database</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-bracket"> [</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"MongoDB"</span>
                <span className="projects-code-punctuation">,</span>
                <span className="projects-code-string"> "Mongoose"</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-bracket">]</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">authentication</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-bracket"> [</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"JWT"</span>
                <span className="projects-code-punctuation">,</span>
                <span className="projects-code-string"> "Nodemailer"</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-bracket">]</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">payments</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-bracket"> [</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"Stripe"</span>
                <span className="projects-code-punctuation">,</span>
                <span className="projects-code-string"> "Payment Gateway"</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-bracket">]</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-property">features</span>
                <span className="projects-code-operator">:</span>
                <span className="projects-code-bracket"> [</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"Admin Dashboard"</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"Authentication"</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent-2">
                <span className="projects-code-string">"Responsive UI"</span>
                <span className="projects-code-punctuation">,</span>
              </div>

              <div className="projects-code-line projects-code-indent">
                <span className="projects-code-bracket">]</span>
              </div>

              <div className="projects-code-line">
                <span className="projects-code-bracket">{`}`}</span>
                <span className="projects-code-punctuation">;</span>
              </div>

              <div className="projects-code-line">
                <span className="projects-code-comment">
                  // Exporting Projects
                </span>
              </div>

              <div className="projects-code-line">
                <span className="projects-code-keyword">export</span>
                <span className="projects-code-keyword"> default</span>
                <span className="projects-code-variable"> projectsData</span>
                <span className="projects-code-punctuation">;</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="projects-cards-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-card-header">
                <div className="project-type-tag">
                  {project.type === "web" ? (
                    <Monitor size={16} strokeWidth={1.5} />
                  ) : (
                    <Phone size={16} strokeWidth={1.5} />
                  )}
                  <span>
                    {project.type === "web" ? "Web App" : "Mobile App"}
                  </span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
              </div>

              <p className="project-card-description">{project.description}</p>

              <div className="project-card-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-links">
                {project.links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon size={18} strokeWidth={1.5} />
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-github-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="projects-github-content">
            <div className="projects-github-left">
              <GitHub className="projects-github-icon" size={48} />
              <div className="projects-github-text">
                <h3>Want to see more?</h3>
                <p>Explore my other projects and contributions on GitHub</p>
              </div>
            </div>
            <motion.a
              href="https://github.com/vardhan781"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-github-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHub size={20} />
              <span>Visit GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
