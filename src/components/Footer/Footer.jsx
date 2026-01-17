import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaGithub, 
  FaLinkedin,
  FaHeart,
  FaCode
} from "react-icons/fa";
import { Code2, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaWhatsapp,
      url: "https://wa.me/9725312744",
      label: "WhatsApp",
      color: "#25D366"
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/vardhan_sinh_16",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: FaGithub,
      url: "https://github.com/vardhan781",
      label: "GitHub",
      color: "#FFFFFF"
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/vardhan-mandora-b42212224/",
      label: "LinkedIn",
      color: "#0077B5"
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Decorative Elements */}
        <div className="footer-decoration">
          <motion.div
            className="decoration-element"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Code2 size={24} strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="decoration-element"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Sparkles size={24} strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <div className="social-title">
            <h3>Let's Connect</h3>
            <p>Find me on these platforms</p>
          </div>
          
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-icon-wrapper"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                style={{ 
                  '--social-color': social.color,
                  // Alternative: Direct styles for fallback
                  borderColor: social.color,
                  color: social.color 
                }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="footer-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="quote-content">
            <div className="quote-icon-footer">
              <FaCode size={24} />
            </div>
            <p className="quote-text">
              Turning ideas into code, and dreams into design.
              <br />
              Let's build something extraordinary together.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-copyright-section">
          <motion.p
            className="copyright-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Vardhansinh. All rights reserved.
          </motion.p>
          
          <div className="made-with">
            <span>Made with</span>
            <motion.span
              className="heart-icon"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <FaHeart />
            </motion.span>
            <span>in India</span>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;