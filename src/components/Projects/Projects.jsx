import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Download,
  ArrowUpRight,
  Code2,
  Server,
  Shield,
  ShoppingBag,
  Smartphone as Phone,
  Monitor,
} from "lucide-react";
import { FaGithub as GitHub } from "react-icons/fa";
import "./Projects.css";

const EcommerceMockup = () => (
  <div className="mockup-ui">
    <div className="mockup-header">
      <div className="mockup-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mockup-search"></div>
    </div>
    <div className="mockup-content">
      <div className="mockup-row">
        <div className="mockup-product"></div>
        <div className="mockup-product"></div>
        <div className="mockup-product"></div>
      </div>
      <div className="mockup-row">
        <div className="mockup-product"></div>
        <div className="mockup-product"></div>
      </div>
    </div>
    <div className="mockup-nav">
      <ShoppingBag size={16} strokeWidth={1.5} />
      <span className="mockup-brand">RareFashion</span>
    </div>
  </div>
);

const MobileMockup = () => (
  <div className="mobile-mockup">
    <div className="mobile-frame">
      <div className="mobile-notch"></div>
      <div className="mobile-screen">
        <div className="mobile-app">
          <div className="app-header">
            <Phone size={16} strokeWidth={1.5} />
            <span className="app-brand">RareFashion</span>
          </div>
          <div className="app-content">
            <div className="app-product-card"></div>
            <div className="app-product-card"></div>
          </div>
          <div className="app-nav">
            <span className="app-nav-item"></span>
            <span className="app-nav-item active"></span>
            <span className="app-nav-item"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RareFashion E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with MERN stack, featuring a complete admin panel, payment gateway integration, OTP authentication, and JWT-based security. The platform is fully responsive and deployed on Vercel.",
      features: [
        "Complete admin dashboard with analytics",
        "Stripe payment integration",
        "OTP authentication system",
        "Real-time order tracking",
        "Product management system",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      links: [
        {
          type: "live",
          icon: Globe,
          label: "Live Website",
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
      imageComponent: <EcommerceMockup />,
    },
    {
      id: 2,
      title: "RareFashion Mobile Application",
      description:
        "A cross-platform mobile application built with React Native, featuring a smooth UI, secure authentication, payment gateway integration, and real-world usability features.",
      features: [
        "Cross-platform (iOS & Android)",
        "Secure OTP authentication",
        "Payment gateway integration",
        "Offline capabilities",
        "Push notifications",
      ],
      tech: ["React Native", "Expo", "Node.js", "JWT"],
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
          url: "https://expo.dev/accounts/vardhan_sinh/projects/rare-fashion-app/builds/2857935c-20b2-4e1d-9faa-47e576e86c90",
        },
        {
          type: "preview",
          icon: Smartphone,
          label: "Expo Preview",
          url: "https://expo.dev/accounts/vardhan_sinh/projects/rare-fashion-app",
        },
      ],
      imageComponent: <MobileMockup />,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="title-wrapper">
            <Code2 className="section-icon" size={28} strokeWidth={1.5} />
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <p className="section-subtitle">
            Showcasing my best work with modern technologies and clean solutions
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-overlay">{project.imageComponent}</div>
                <div className="project-image-gradient"></div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-type">
                    {index === 0 ? (
                      <>
                        <Monitor size={16} strokeWidth={1.5} /> Web App
                      </>
                    ) : (
                      <>
                        <Phone size={16} strokeWidth={1.5} /> Mobile App
                      </>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="features-title">
                    <Shield size={16} strokeWidth={1.5} />
                    Key Features
                  </h4>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h4 className="tech-title">Tech Stack</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag-project">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link ${link.type}`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon size={18} strokeWidth={1.5} />
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="github-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="github-content">
            <GitHub className="github-icon" size={48} strokeWidth={1.5} />
            <div className="github-text">
              <h3>Want to see more?</h3>
              <p>Explore my other projects and contributions on GitHub</p>
            </div>
            <motion.a
              href="https://github.com/vardhan781"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHub size={20} strokeWidth={1.5} />
              <span>Visit GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
