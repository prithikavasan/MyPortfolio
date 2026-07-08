import React from 'react'
import "./Home.css"
import ScrollReveal from './ScrollReveal'

const Home = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
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

  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <ScrollReveal delay={100}>
            <div className="badge-container">
              <span className="hero-badge">Welcome to my portfolio</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name-highlight">Prithika Sri S</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="hero-subtitle">
              Final Year IT Student | MERN Stack Developer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="hero-description">
              I’m an enthusiastic Information Technology student with a strong interest in web development and problem-solving.
              I enjoy learning new technologies and applying them to create meaningful projects.
              I’m passionate about improving my logical thinking and communication skills to grow both personally and professionally.
              I believe in continuous learning and love taking on challenges that enhance my creativity and technical skills.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="hero-cta-buttons">
              <button 
                className="btn-primary-glow"
                onClick={() => handleScrollTo('project')}
              >
                View Projects
              </button>
              
              <button 
                className="btn-secondary-outline"
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>

              <button 
                className="btn-tertiary-link"
                onClick={() => handleScrollTo('contact')}
              >
                Contact Me
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Profile Image and Graphics */}
        <div className="hero-graphics-container">
          <ScrollReveal delay={300} className="image-reveal-wrapper">
            <div className="profile-img-frame">
              {/* Graphic overlays */}
              <div className="shape-overlay shape-1"></div>
              <div className="shape-overlay shape-2"></div>
              
              {/* Profile Image */}
              <div className="profile-img-container">
                <img className="prithika" src="/images/prithikasri.jpg" alt="Prithika Sri S" />
              </div>

              {/* Float badge overlay */}
              <div className="float-badge code-badge">
                <span className="badge-icon">&lt;/&gt;</span>
                <span className="badge-text">MERN Stack</span>
              </div>
              
              <div className="float-badge exp-badge">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">Problem Solver</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </section>
  )
}

export default Home
