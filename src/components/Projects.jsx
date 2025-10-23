import React from 'react'
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "AlgoArena",
      img: "/images/algoarena.png",
      description:
        "Designed to test and enhance programming skills through multiple rounds including conceptual questions, debugging, and coding challenges. Built using HTML, CSS, JavaScript, and integrated with Firebase for real-time score tracking and user data management. Supports multiple languages (C, C++, Java, Python) via Piston API, offering an interactive compiler and a competitive environment for students.",
      liveLink: "https://resonant-dieffenbachia-359a10.netlify.app/",
      codeLink: "https://github.com/prithikavasan/Algo-Arena"
    },
    {
      title: "Nanman",
      img: "/images/nanman.jpg",
      description:
        "Designed a web app using HTML, CSS, JavaScript, and Firebase to help farmers optimize fertilizer usage for higher yield. Integrated multi-language support for better accessibility, especially for illiterate farmers. Inspired by a Smart India Hackathon problem statement.",
      liveLink: "https://your-nanman-live-link.com",
      codeLink: "https://github.com/prithikavasan/Nanman"
    },
    {
      title: "Local-Bazaar",
      img: "/images/auction.jpg",
      description:
        "LocalBazaar is an online marketplace connecting local sellers and buyers. It features product listings, auctions, and secure payments for top bidders. Built using React, Node.js, and MongoDB for a smooth and dynamic experience.",
      liveLink: "https://your-localbazaar-live-link.com",
      codeLink: "https://github.com/yourusername/local-bazaar"
    },
    {
      title: "Clean-Track",
      img: "/images/cleantrack.png",
      description:
        "CleanTrack is a waste management web app built using the MERN stack. It helps users report garbage locations and track waste collection status in real time. Admins can monitor reports, assign cleaners, and ensure timely cleanup operations. Built with React, Node.js, Express, and MongoDB for efficient and scalable management.",
      liveLink: "https://your-cleantrack-live-link.com",
      codeLink: "https://github.com/yourusername/clean-track"
    },
    {
      title: "Student Management System",
      img: "/images/sms.png",
      description:
        "A console-based mini project built in Java to manage student information efficiently. It allows users to add, update, delete, and view student records through a simple text interface. The project demonstrates strong use of Object-Oriented Programming principles.",
      liveLink: "https://your-StudentManagementSystem-live-link.com",
      codeLink: "https://github.com/prithikavasan/Student-info-console-based-mini-project-in-java"
    }


  ];

  return (
    <section id="project">
      <div className="pro-con">
        <h1>Projects</h1>
        <p>Have a look at some of the rolled-out projects I'm proud of:</p>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="algo"
          onClick={() => window.open(project.liveLink, "_blank")}
        >
          <div className="algo-img">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="alg-text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button
              className="view-code-btn"
              onClick={(e) => {
                e.stopPropagation(); // prevents live link from opening
                window.open(project.codeLink, "_blank");
              }}
            >
              View Code
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
