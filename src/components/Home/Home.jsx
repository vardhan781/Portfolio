import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Terminal,
  Sparkles,
  Cpu,
  Zap,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-bg-elements">
        <motion.div
          className="bg-element bg-element-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cpu size={24} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          className="bg-element bg-element-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Zap size={24} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          className="bg-element bg-element-3"
          animate={{
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Code2 size={24} strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="home-content-wrapper">
        <div className="home-content">
          <motion.div
            className="home-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="hello-wrapper">
                <Sparkles
                  size={20}
                  strokeWidth={1.5}
                  className="sparkle-icon"
                />
                <p className="hello-home">Hello! I'm</p>
              </div>
            </motion.div>

            <motion.h1
              className="home-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="home-name-gradient">Vardhansinh</span>
              <motion.span
                className="cursor-blink"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p
              className="home-prof"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full-Stack Web Developer
              <motion.span
                className="prof-highlight"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(56, 189, 248, 0)",
                    "0 0 20px rgba(56, 189, 248, 0.4)",
                    "0 0 0px rgba(56, 189, 248, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                &nbsp;•&nbsp;MERN Stack
              </motion.span>
            </motion.p>

            <motion.p
              className="home-para"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I craft fast, scalable, and user-friendly digital solutions using
              modern technologies. Specializing in React, React Native, and
              Node.js to build exceptional web and mobile experiences.
            </motion.p>

            <motion.div
              className="home-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="home-about"
                onClick={() => {
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="home-abt-text">More About Me</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <ArrowRight size={20} strokeWidth={1.5} />
                </motion.div>
              </motion.button>

              <motion.button
                className="home-projects-btn"
                onClick={() => {
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="home-quote-card"
              whileHover={{ y: -10, boxShadow: "var(--glow-lg)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="quote-icon-wrapper">
                <Terminal size={24} strokeWidth={1.5} className="quote-icon" />
              </div>
              <p className="quote-text">
                "Clean code always looks like it was written by someone who
                cares."
              </p>
              <div className="quote-author">
                <div className="author-line" />
                <span>Robert C. Martin</span>
              </div>
            </motion.div>

            <motion.div
              className="home-quote-card"
              whileHover={{ y: -10, boxShadow: "var(--glow-lg)" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="quote-icon-wrapper">
                <Code2 size={24} strokeWidth={1.5} className="quote-icon" />
              </div>
              <p className="quote-text">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <div className="quote-author">
                <div className="author-line" />
                <span>Cory House</span>
              </div>
            </motion.div>

            <motion.div
              className="tech-stack-preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">React Native</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
