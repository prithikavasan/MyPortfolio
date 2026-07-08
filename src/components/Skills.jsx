import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaDatabase, FaArrowRight } from "react-icons/fa";
import { SiExpress, SiMongodb, SiC } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
        { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
        { name: "React JS", icon: <FaReact className="skill-icon react" /> },
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node JS", icon: <FaNodeJs className="skill-icon node" /> },
        { name: "Express JS", icon: <SiExpress className="skill-icon express" /> },
        { name: "MongoDB", icon: <SiMongodb className="skill-icon mongo" /> },
        { name: "MySQL", icon: <FaDatabase className="skill-icon sql" /> },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="skill-icon c-lang" /> },
        { name: "Java", icon: <FaJava className="skill-icon java" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <ScrollReveal>
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">Technologies and tools I specialize in to build applications</p>
      </ScrollReveal>

      <div className="skills-categories-grid">
        {skillCategories.map((category, catIndex) => (
          <ScrollReveal key={category.title} delay={catIndex * 150}>
            <div className="skills-category-card">
              <h3>{category.title}</h3>
              <div className="skills-chips-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="cv-button-container">
          <button 
            className="cv-btn" 
            onClick={() => window.open("/Prithika-Sri_Resume.pdf", "_blank")}
          >
            <span>View Resume / CV</span>
            <FaArrowRight className="cv-btn-icon" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
