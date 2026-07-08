import React from 'react';
import { FaTrophy, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import './Achievements.css';
import ScrollReveal from './ScrollReveal';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaTrophy className="ach-icon trophy" />,
      title: "Algo Arena Organizer",
      description: "Successfully created, managed, and organized 'Algo Arena', a gamified competitive coding event with 50+ participants, featuring debugging and algorithmic challenges."
    },
    {
      id: 2,
      icon: <FaGraduationCap className="ach-icon academic" />,
      title: "Academic Milestone",
      description: "Maintained a cumulative CGPA of 8.7 in B.Tech Information Technology at Sri Shakthi Institute of Engineering and Technology, demonstrating deep dedication to technical learning."
    },
    {
      id: 4,
      icon: <FaCertificate className="ach-icon cert" />,
      title: "Professional Certification",
      description: "Acquired credentials in Full Stack Development (NoviTech), React JS (Udemy), and JavaScript (Infosys Springboard) to build industry-ready development skills."
    },
    {
      id: 5,
      icon: <FaCode className="ach-icon leetcode" />,
      title: "Data Structures & Algorithms",
      description: "Solved 300+ Data Structures & Algorithms problems across multiple coding platforms, strengthening problem-solving and algorithmic thinking."
    }
  ];

  return (
    <section id="achievements" className="ach-section">
      <ScrollReveal>
        <h1 className="ach-title">Achievements</h1>
        <p className="ach-subtitle">Milestones and recognition of my technical journey</p>
      </ScrollReveal>

      <div className="ach-grid">
        {achievements.map((ach, index) => (
          <ScrollReveal key={ach.id} delay={index * 100}>
            <div className="ach-card">
              <div className="ach-icon-container">
                {ach.icon}
              </div>
              <div className="ach-content">
                <h3>{ach.title}</h3>
                <p>{ach.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
