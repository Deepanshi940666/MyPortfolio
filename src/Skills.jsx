import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div>
         <section className="skills">
      <h2>MY SKILLS</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="skills-container">
        <div className="skill-card">HTML5</div>
        <div className="skill-card">CSS3</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React.js</div>
        <div className="skill-card">Git</div>
        <div className="skill-card">GitHub</div>
        <div className="skill-card">Java</div>
        <div className="skill-card">C</div>
        <div className="skill-card">Responsive Design</div>
        <div className="skill-card">VS Code</div>
      </div>
    </section>
    </div>
  )
}

export default Skills