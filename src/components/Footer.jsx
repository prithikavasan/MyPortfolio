import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Prithika Sri</h3>
        <p>Building my skills and sharing my projects online.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/prithika-sri-672b58292/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/prithikavasan" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:prithikavasan512@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Prithika Vasan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
