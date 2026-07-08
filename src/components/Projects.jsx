import React from 'react';
import { FaGithub } from 'react-icons/fa';
import "./Projects.css";
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "LocalBazaar",
      subtitle: "Online Marketplace & Auction Platform",
      img: "/images/auction.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      description:
        "LocalBazaar is an online marketplace connecting local sellers and buyers. It features product listings, active bidding auctions, and secure payments for top bidders. Designed with scalability and smooth interfaces in mind.",
      codeLink: "https://github.com/prithikavasan/local-bazaar",
      featured: true
    },
    {
      title: "LearnFocus",
      subtitle: "Intelligent Learning Assistant",
      img: "/images/learnfocus.png",
      tags: ["React", "Node.js", "MongoDB", "OpenAI API"],
      description:
        "An AI-powered learning assistant designed to optimize study habits. Features automated note summarization, custom learning roadmap generation, and smart flashcard quizzes. Built to help students save time and grasp complex concepts easily.",
      codeLink: "https://github.com/prithikavasan/LearnFocus",
      featured: true
    },
    {
      title: "AlgoArena",
      subtitle: "Coding Event Platform",
      img: "/images/algoarena.png",
      tags: ["HTML", "CSS", "JavaScript", "Firebase", "Piston API"],
      description:
        "Designed to test and enhance programming skills through competitive rounds including conceptual questions, debugging, and coding challenges. Features real-time leaderboards, scores tracker, and an interactive compiler.",
      codeLink: "https://github.com/prithikavasan/Algo-Arena",
      featured: true
    },
    {
      title: "Nanman",
      subtitle: "Farmer Advisor",
      img: "/images/nanman.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      description:
        "Designed a web application inspired by a Smart India Hackathon problem to help farmers optimize fertilizer usage for higher yield. Integrates multi-language support to enhance accessibility for rural and illiterate farmers.",
      codeLink: "https://github.com/prithikavasan/Nanman",
      featured: true
    },
    {
      title: "Console-Based Employee Management System",
      subtitle: "Console CLI Application",
      img: "/images/ems.png",
      tags: ["Java", "OOP", "Collections Framework", "Exception Handling", "MySQL"],
      description: [
        "Developed a Java-based console application to efficiently manage employee records. Implemented CRUD (Create, Read, Update, Delete) operations for employee management. Designed a menu-driven interface with proper input validation and exception handling."
      ],
      codeLink: "https://github.com/prithikavasan",
      featured: false
    },
    {
      title: "Student Management System",
      subtitle: "Console CLI Application",
      img: "/images/sms.png",
      tags: ["Java", "OOPs", "CLI"],
      description:
        "A console-based mini-project built in Java to manage student information records. It allows administrators to perform CRUD operations on student records through a simple terminal interface using Object-Oriented principles.",
      codeLink: "https://github.com/prithikavasan/Student-info-console-based-mini-project-in-java",
      featured: false
    }
  ];

  return (
    <section id="project" className="projects-section">
      <ScrollReveal>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Have a look at some of the web applications and tools I've developed:</p>
      </ScrollReveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <div className="project-card">
              {/* Image with hover zoom */}
              <div className="project-image-wrapper">
                <img src={project.img} alt={project.title} className="project-card-image" />
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>

              {/* Text content */}
              <div className="project-card-content">
                <div className="project-header-group">
                  <h3>{project.title}</h3>
                  <span className="project-subtitle-text">{project.subtitle}</span>
                </div>

                {Array.isArray(project.description) ? (
                  <ul className="project-card-description-list">
                    {project.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="project-card-description">{project.description}</p>
                )}

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card-actions">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-btn github-btn"
                      title="View Source Code"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}

                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
