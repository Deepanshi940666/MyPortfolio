import React from 'react'
import './Skills.css'
const Skills = ({btn,BackgroundC,nameC,textColor,homeH2}) => {
  return (
    <div >
         <section  className="skills">
      <h2 style={{
                  color: textColor
                }}>MY SKILLS</h2>
      <p style={{
                  color: nameC
                }} className="skills-subtitle">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="skills-container">
        <div style={{ background:btn}} className="skill-card">HTML5</div>
        <div style={{ background:btn}} className="skill-card">CSS3</div>
        <div style={{ background:btn}} className="skill-card">JavaScript</div>
        <div style={{ background:btn}} className="skill-card">React.js</div>
        <div style={{ background:btn}} className="skill-card">Git</div>
        <div style={{ background:btn}} className="skill-card">GitHub</div>
        <div style={{ background:btn}} className="skill-card">Java</div>
        <div style={{ background:btn}} className="skill-card">C</div>
        <div style={{ background:btn}} className="skill-card">Responsive Design</div>
        <div style={{ background:btn}} className="skill-card">VS Code</div>
      </div>
    </section>
    </div>
  )
}

export default Skills