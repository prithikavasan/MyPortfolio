import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiC } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skillW"> {/* add id="skills" */}
      <h1 className="font">Skills</h1>
      <div className="skillB">
        <div className="s1"><FaHtml5 className="icon html" /> HTML</div>
        <div className="s1"><FaCss3Alt className="icon css" /> CSS</div>
        <div className="s1"><FaJs className="icon js" /> JavaScript</div>
        <div className="s1"><FaReact className="icon react" /> React JS</div>
        <div className="s1"><SiExpress className="icon express" /> Express JS</div>
        <div className="s1"><SiMongodb className="icon mongo" /> MongoDB</div>
        <div className="s1"><FaNodeJs className="icon node" /> Node JS</div>
        <div className="s1"><SiC className="icon c" /> C</div>
        <div className="s1"><FaJava className="icon java" /> JAVA</div>
        <div className="s1"><FaDatabase className="icon sql" /> MySQL</div>
      </div>
      <button className="btn" onClick={() => window.open("/Prithika-Sri_Resume.pdf", "_blank")}>Here is my CV</button>
    </section>
  );
};

export default Skills;
