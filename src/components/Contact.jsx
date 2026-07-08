import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      // Reset form after a brief delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <ScrollReveal>
        <div className="contact-header">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">Get in touch! I'm always open to discussing placements, internship opportunities, or projects.</p>
        </div>
      </ScrollReveal>

      <div className="contact-container">
        {/* Left Side: Contact Information Cards */}
        <ScrollReveal delay={150}>
          <div className="contact-info-panel">
            <h3 className="panel-title">Let's Connect</h3>
            <p className="panel-description">Feel free to reach out via email, phone, or LinkedIn. I will do my best to respond within 24 hours.</p>

            <div className="contact-info-list">
              {/* Phone */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="info-text">
                  <span>Call Me</span>
                  <p>+91 8608494381</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <span>Email</span>
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
              </div>

              {/* Address */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <span>Location</span>
                  <p>40/1, Sathya Nagar, Selvapuram, Coimbatore - 641026</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-section">
              <span>Follow / Connect</span>
              <div className="contact-social-icons">
                <a
                  href="https://www.linkedin.com/in/prithika-sri-672b58292/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn linkedin"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/prithikavasan"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn github"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Contact Form */}
        <ScrollReveal delay={300}>
          <div className="contact-form-panel">
            <h3 className="panel-title">Send a Message</h3>
            
            {formSubmitted ? (
              <div className="form-success-alert">
                <div className="success-icon">✓</div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you, {formData.name || "there"}. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunity / Collaboration"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Hi Prithika, I'd love to talk about..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Send Message</span>
                  <FaPaperPlane className="submit-icon" />
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
