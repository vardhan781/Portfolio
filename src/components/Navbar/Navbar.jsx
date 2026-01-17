import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, User, Download, Home, Briefcase, Mail } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sidebarRef = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".nav-menu") &&
        isSidebarOpen
      ) {
        closeSidebar();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isSidebarOpen) {
        closeSidebar();
      }
    };

    // Handle touch outside for mobile
    const handleTouchOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".nav-menu") &&
        isSidebarOpen
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("touchstart", handleTouchOutside);

    // Toggle body scroll
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("touchstart", handleTouchOutside);
      document.body.classList.remove("sidebar-open");
    };
  }, [isSidebarOpen]);

  const handleClick = (link) => {
    setActiveLink(link);
    closeSidebar();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
    closeSidebar();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const sectionIds = ["home", "projects", "about", "contact"];
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Work", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <motion.div
        className={`nav-main ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-links">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={activeLink === item.id ? "active" : ""}
              onClick={() => handleClick(item.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">
                <item.icon size={16} strokeWidth={1.5} />
              </span>
              {item.label}
              {activeLink === item.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="nav-right">
          <motion.button
            onClick={handleDownload}
            className="cv-download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} strokeWidth={1.5} />
            <span>Resume</span>
          </motion.button>

          <div className="profile-container">
            <motion.div
              className="profile-img-wrapper"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="profile-icon" size={32} strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>

        <motion.button
          className="nav-menu"
          onClick={toggleSidebar}
          aria-label="Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </motion.div>

      {/* Sidebar Overlay */}
      <motion.div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSidebarOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeSidebar}
      />

      {/* Enhanced Mobile Sidebar */}
      <motion.aside
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        initial={false}
        animate={{
          x: isSidebarOpen ? 0 : -300,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="sidebar-profile">
              <User
                className="sidebar-profile-icon"
                size={40}
                strokeWidth={1.5}
              />
              <h3>Vardhansinh</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>

          <div className="sidebar-links">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "active" : ""}
                onClick={() => handleClick(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={20} strokeWidth={1.5} />
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={handleDownload}
            className="sidebar-download"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} strokeWidth={1.5} />
            Download Resume
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
};

export default Navbar;
