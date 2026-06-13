import React from 'react'
import "./About.css";
const About = () => {
  return (
    <div>
        <section className="about">
      <h2>ABOUT ME</h2>

      <p>
        Hello! I'm <strong>Deepanshi Gupta</strong>, an Engineering Student
        with a passion for software development and web technologies.
      </p>

      <p>
        I enjoy creating responsive and user-friendly web applications while
        continuously exploring new technologies. My journey in tech started
        with curiosity about how websites work, and it has grown into a strong
        interest in front-end development, React, and open-source contributions.
      </p>

      <p>
        I love solving problems, learning new concepts, and turning ideas into
        real-world projects. Through academic work, personal projects, and
        community contributions, I am constantly improving my technical and
        professional skills.
      </p>

      <div className="about-highlights">
        <div>🎓 Engineering Student</div>
        <div>💻 Aspiring Software Developer</div>
        <div>⚛️ Learning React & Web Development</div>
        <div>🌟 Open Source Contributor</div>
        <div>📚 Lifelong Learner</div>
      </div>

      <blockquote>
        "Every project is an opportunity to learn, improve, and create
        something meaningful."
      </blockquote>
    </section>
    </div>
  )
}

export default About