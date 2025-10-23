import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <section id="about" className="body"> {/* changed from div to section and added id */}
      <h1 className="name">Hi, I'm Prithika Sri S</h1>
      <p>
        I’m an enthusiastic Information Technology student with a strong interest in web development and problem-solving.
        I enjoy learning new technologies and applying them to create meaningful projects.
        I’m passionate about improving my logical thinking and communication skills to grow both personally and professionally.
        I believe in continuous learning and love taking on challenges that enhance my creativity and technical skills.
      </p>
      <img className="prithika" src="/images/prithikasri.jpg" alt="Prithika" />
    </section>
  )
}

export default Home
