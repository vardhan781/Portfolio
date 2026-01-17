import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Paperclip,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaLinkedin as LinkedIn } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_v6410sk",
        "template_a8ni6bm",
        e.target,
        "pqCz261Ss0EpuiGS2",
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            icon: <CheckCircle size={20} strokeWidth={1.5} />,
            style: {
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-accent)",
            },
          });
          e.target.reset();
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          toast.error("Failed to send message, please try again.", {
            icon: <AlertCircle size={20} strokeWidth={1.5} />,
            style: {
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
            },
          });
          console.log(error.text);
          setIsSending(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat",
      link: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 97253 12744",
      link: "tel:+919725312744",
    },
    {
      icon: Mail,
      label: "Email",
      value: "vardhansinhmandora@gmail.com",
      link: "mailto:vardhansinhmandora@gmail.com",
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      value: "vardhan_sinh",
      link: "https://www.linkedin.com/in/vardhan-mandora-b42212224/",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="title-wrapper">
            <MessageSquare
              className="section-icon"
              size={28}
              strokeWidth={1.5}
            />
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss and build something amazing
            together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="contact-info-header">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-subtitle">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-wrapper">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="contact-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-social-cta">
              <p>Connect with me on</p>
              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/in/vardhan-mandora-b42212224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedIn size={20} strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="https://github.com/vardhan781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form-card"
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="form-header">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">
                I'll get back to you as soon as possible
              </p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <div className="input-wrapper">
                  <User size={18} strokeWidth={1.5} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    maxLength={50}
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="input-border"></div>
                </div>
                <span className="input-hint">Required</span>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <Mail size={18} strokeWidth={1.5} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="input-border"></div>
                </div>
                <span className="input-hint">Required</span>
              </div>

              <div className="form-group full-width">
                <div className="input-wrapper">
                  <Paperclip
                    size={18}
                    strokeWidth={1.5}
                    className="input-icon"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    maxLength={100}
                    required
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <div className="input-border"></div>
                </div>
                <span className="input-hint">What's this about?</span>
              </div>

              <div className="form-group full-width">
                <div className="textarea-wrapper">
                  <MessageSquare
                    size={18}
                    strokeWidth={1.5}
                    className="input-icon"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    maxLength={500}
                    required
                    className="form-textarea"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="input-border"></div>
                </div>
                <div className="textarea-info">
                  <span className="char-count">
                    {formData.message.length}/500 characters
                  </span>
                  <span className="input-hint">Required</span>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSending ? (
                <>
                  <div className="spinner"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} strokeWidth={1.5} />
                </>
              )}
            </motion.button>

            <div className="form-note">
              <AlertCircle size={16} strokeWidth={1.5} />
              <span>I typically respond within 24 hours</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
