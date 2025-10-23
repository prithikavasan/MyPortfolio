import React from "react";
import "./Navbar.css";
import { FaUser, FaTools, FaProjectDiagram, FaPhoneAlt, FaCertificate } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="main">
      <div className="name">
        <h2><b>My Portfolio</b></h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#about"><FaUser className="icon" /> About</a>
          </li>
          <li>
            <a href="#skills"><FaTools className="icon" /> Skills</a>
          </li>
          <li>
            <a href="#project"><FaProjectDiagram className="icon" /> Project</a>
          </li>
          <li>
            <a href="#certificates"><FaCertificate className="icon" /> Certificates</a>
          </li>
          <li>
            <a href="#contact"><FaPhoneAlt className="icon" /> Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
