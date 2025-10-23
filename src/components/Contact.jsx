import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Reach out to me via any of the following ways</p>
      </div>

      <div className="contact-grid">
        {/* Phone */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h4>Phone</h4>
          <p>+91 8608494381</p>
        </div>

        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prithikavasan512@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              prithikavasan512@gmail.com
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h4>Address</h4>
          <p>40/1, Sathya Nagar, Selvapuram, Coimbatore - 641026</p>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h4>LinkedIn</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/prithika-sri-672b58292/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/prithika
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h4>GitHub</h4>
          <p>
            <a
              href="https://github.com/prithikavasan"
              target="_blank"
              rel="noreferrer"
            >
              github.com/prithikavasan
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
