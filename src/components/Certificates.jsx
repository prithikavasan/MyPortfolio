import React, { useState } from "react";
import "./Certificates.css";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Certificates = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const certificates = [
    { id: 1, img: "/images/css.jpg", title: "CSS Certificate", issuer: "Udemy / External Course" },
    { id: 2, img: "/images/js.jpg", title: "JavaScript Certificate", issuer: "Infosys Springboard" },
    { id: 3, img: "/images/fullstack.jpg", title: "Fullstack Certificate", issuer: "NoviTech" },
    { id: 4, img: "/images/react.jpg", title: "React Certificate", issuer: "Udemy Bootcamp" },
    { id: 5, img: "/images/nptel.jpg", title: "NPTEL Certificate", issuer: "NPTEL Online Certification" },
    { id: 6, img: "/images/Mern.png", title: "MERN Stack & GenAI Certificate", issuer: "Udemy / Masynctech Coding School" },
  ];

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section id="certificates" className="cert-section">
      <ScrollReveal>
        <h1 className="cert-title">Certifications</h1>
        <p className="cert-subtitle">Credentials and professional training completed</p>
      </ScrollReveal>
      
      <div className="cert-container">
        {certificates.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={index * 100}>
            <div className="cert-box" onClick={() => openLightbox(cert.img)}>
              <div className="cert-image-wrapper">
                <img src={cert.img} alt={cert.title} />
                <div className="cert-hover-overlay">
                  <FaSearchPlus className="overlay-preview-icon" />
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="certificate detail" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
