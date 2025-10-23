import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const certificates = [
    { id: 1, img: "/images/css.jpg", title: "CSS Certificate" },
    { id: 2, img: "/images/js.jpg", title: "JavaScript Certificate" },
    { id: 3, img: "/images/fullstack.jpg", title: "Fullstack Certificate" },
    { id: 4, img: "/images/react.jpg", title: "React Certificate" },
    { id: 5, img: "/images/nptel.jpg", title: "NPTEL Certificate" },
  ];

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section id="certificates" className="cert-section">
      <h1 className="cert-title">Certificates</h1>
      <p className="cert-subtitle">Some of my achievements and certifications</p>
      
      <div className="cert-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-box" onClick={() => openLightbox(cert.img)}>
            <img src={cert.img} alt={cert.title} />
            <h4>{cert.title}</h4>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="certificate" />
        </div>
      )}
    </section>
  );
};

export default Certificates;
