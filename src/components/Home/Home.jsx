import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Sparkles, Cpu, Zap } from "lucide-react";
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

          <div className="home-right">
            <div className="code-container">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <div className="window-control close"></div>
                    <div className="window-control minimize"></div>
                    <div className="window-control maximize"></div>
                  </div>
                  <div className="window-title">
                    <Terminal size={14} />
                    <span>developer.js</span>
                  </div>
                </div>

                <div className="code-content">
                  <div className="code-line">
                    <span className="code-comment">
                      // Full-Stack Developer Profile
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-bracket">{`{`}</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">name</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> 'Vardhansinh'</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">role</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> 'Full-Stack Developer'</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">specialization</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> 'MERN Stack'</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">techStack</span>
                    <span className="code-operator">:</span>
                    <span className="code-bracket"> [</span>
                  </div>

                  <div className="code-line code-indent-2">
                    <span className="code-string">'React'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'Node.js'</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent-2">
                    <span className="code-string">'MongoDB'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'Express.js'</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent-2">
                    <span className="code-string">'React Native'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'JavaScript'</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent-2">
                    <span className="code-string">'Tailwind CSS'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'Git'</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-bracket">]</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">passionate</span>
                    <span className="code-operator">:</span>
                    <span className="code-boolean"> true</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">problemSolver</span>
                    <span className="code-operator">:</span>
                    <span className="code-boolean"> true</span>
                    <span className="code-punctuation">,</span>
                  </div>

                  <div className="code-line code-indent">
                    <span className="code-property">alwaysLearning</span>
                    <span className="code-operator">:</span>
                    <span className="code-boolean"> true</span>
                  </div>

                  <div className="code-line">
                    <span className="code-bracket">{`}`}</span>
                    <span className="code-punctuation">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
