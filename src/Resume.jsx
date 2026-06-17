import React from "react";
import "./Resume.css";
import Resumee from './assets/Resumee.pdf'
const Resume = ({btn,BackgroundC,nameC,textColor,homeH2}) => {
  return (
    <section className="resume">
      <h2 style={{
                  color: textColor
                }}>MY RESUME</h2>

      <p style={{
                  color: nameC
                }}  className="resume-text">
        Interested in my work and experience? Feel free to download my resume
        to learn more about my skills, projects, and achievements.
      </p>

      <a
        href={Resumee}
        download
        className="resume-btn"
        style={{ background:btn, boxShadow:btn}}
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;