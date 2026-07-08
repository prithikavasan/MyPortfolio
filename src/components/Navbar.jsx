import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaUser, FaTools, FaProjectDiagram, FaPhoneAlt, FaCertificate, FaTrophy, FaBars, FaTimes, FaPalette, FaSun, FaMoon, FaAdjust } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { id: "about", label: "About", icon: <FaUser className="nav-link-icon" /> },
    { id: "skills", label: "Skills", icon: <FaTools className="nav-link-icon" /> },
    { id: "project", label: "Projects", icon: <FaProjectDiagram className="nav-link-icon" /> },
    { id: "certificates", label: "Certifications", icon: <FaCertificate className="nav-link-icon" /> },
    { id: "achievements", label: "Achievements", icon: <FaTrophy className="nav-link-icon" /> },
    { id: "contact", label: "Contact", icon: <FaPhoneAlt className="nav-link-icon" /> }
  ];

  const themes = [
    { id: "light", label: "Light", icon: <FaSun /> },
    { id: "dark", label: "Dark", icon: <FaMoon /> },
    { id: "gradient", label: "Gradient", icon: <FaPalette /> },
    { id: "minimal", label: "Minimal", icon: <FaAdjust /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Prithika-Sri_Resume.pdf';
    link.download = 'Prithika-Sri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getThemeIcon = () => {
    switch(theme) {
      case 'light': return <FaSun />;
      case 'gradient': return <FaPalette />;
      case 'minimal': return <FaAdjust />;
      case 'dark':
      default:
        return <FaMoon />;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-text">Prithika Sri S</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-item ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Theme & Resume) */}
        <div className="nav-actions">
          {/* Theme switcher */}
          <div className="theme-switcher-container">
            <button 
              className="theme-toggle-btn" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              title="Switch Theme"
              aria-label="Switch Theme"
            >
              {getThemeIcon()}
              <span className="theme-btn-text">{theme}</span>
            </button>

            {dropdownOpen && (
              <ul className="theme-dropdown">
                {themes.map((t) => (
                  <li key={t.id}>
                    <button
                      className={`theme-dropdown-item ${theme === t.id ? "active" : ""}`}
                      onClick={() => {
                        setTheme(t.id);
                        setDropdownOpen(false);
                      }}
                    >
                      {t.icon}
                      <span>{t.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Resume button */}
          <button 
            className="resume-nav-btn" 
            onClick={() => window.open("/Prithika-Sri_Resume.pdf", "_blank")}
          >
            Resume
          </button>

          {/* Mobile hamburger icon */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`mobile-nav-item ${activeSection === link.id ? "active" : ""}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            </li>
          ))}
          <li className="mobile-resume-li">
            <button 
              className="mobile-resume-btn" 
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
            >
              Download Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
