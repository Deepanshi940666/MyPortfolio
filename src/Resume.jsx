import React from "react";
import "./Resume.css";
import Resumee from './assets/Resumee.pdf'
const Resume = () => {
  return (
    <section className="resume">
      <h2>MY RESUME</h2>

      <p className="resume-text">
        Interested in my work and experience? Feel free to download my resume
        to learn more about my skills, projects, and achievements.
      </p>

      <a
        href={Resumee}
        download
        className="resume-btn"
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;