import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Prithika Sri</h3>
        <p>Information Technology Student | MERN Stack Developer</p>
        <div className="footer-social-icons">
          <a href="https://www.linkedin.com/in/prithika-sri-672b58292/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/prithikavasan" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:prithikavasan512@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Prithika Sri S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
