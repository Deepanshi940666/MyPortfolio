import React from "react";
import "./About.css";
const About = ({ btn, BackgroundC, nameC, textColor, homeH2 }) => {
  return (
    <div style={{ background: BackgroundC }}>
      <section className="about">
        <h2
          style={{
            color: textColor,
          }}
        >
          ABOUT ME
        </h2>

        <p
          style={{
            color: nameC,
          }}
        >
          Hello! I'm <strong>Deepanshi Gupta</strong>, an Engineering Student
          with a passion for software development and web technologies.
        </p>

        <p
          style={{
            color: nameC,
          }}
        >
          I enjoy creating responsive and user-friendly web applications while
          continuously exploring new technologies. My journey in tech started
          with curiosity about how websites work, and it has grown into a strong
          interest in front-end development, React, and open-source
          contributions.
        </p>

        <p
          style={{
            color: nameC,
          }}
        >
          I love solving problems, learning new concepts, and turning ideas into
          real-world projects. Through academic work, personal projects, and
          community contributions, I am constantly improving my technical and
          professional skills.
        </p>

        <div className="about-highlights">
          <div style={{ background: btn }}>🎓 Engineering Student</div>
          <div style={{ background: btn }}>💻 Aspiring Software Developer</div>
          <div style={{ background: btn }}>
            ⚛️ Learning React & Web Development
          </div>
          <div style={{ background: btn }}>🌟 Open Source Contributor</div>
          <div style={{ background: btn }}>📚 Lifelong Learner</div>
        </div>

        <blockquote style={{ color: homeH2 }}>
          "Every project is an opportunity to learn, improve, and create
          something meaningful."
        </blockquote>
      </section>
    </div>
  );
};

export default About;
