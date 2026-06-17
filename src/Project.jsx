import React from "react";
import "./Project.css";
import Web from "./assets/Website.png";
const Project = ({
  btn,
  BackgroundC,
  nameC,
  textColor,
  homeH2,
  ProCard,
  projectHeading,
  projectText,
  projectBtnBg,
  projectBtnHover,
}) => {
  return (
    <div>
      <div style={{ background: BackgroundC }} className="project-card">
        <h2
          style={{
            color: textColor,
          }}
        >
          MY PROJECT
        </h2>
        <div style={{ background: ProCard }} className="image-card">
          <img
            src={Web}
            alt="Sugar Cosmetics Clone"
            className="project-image"
          />
        </div>

        <div className="project-content">
          <h3 style={{ color: ProCard }}>Sugar Cosmetics Clone</h3>

          <p style={{ color: textColor }} className="project-desc">
            A fully responsive clone of the Sugar Cosmetics website built using
            HTML, CSS, and JavaScript. The project replicates the original
            website's user interface and provides a seamless browsing experience
            across desktop, tablet, and mobile devices.
          </p>

          <h4 style={{ color: projectHeading }}>✨ Features</h4>
          <ul>
            <li style={{ color: projectText }}>Fully Responsive Design</li>
            <li style={{ color: projectText }}>Fully Responsive Design</li>
            <li style={{ color: projectText }}>Interactive Navigation Bar</li>
            <li style={{ color: projectText }}>Product Listing Sections</li>
            <li style={{ color: projectText }}>Modern and Attractive UI</li>
            <li style={{ color: projectText }}>
              Optimized for Multiple Devices
            </li>
          </ul>

          <h4 style={{ color: projectHeading }}>🛠 Tech Stack</h4>
          <div className="tech-stack">
            <span style={{ background: btn }}>HTML5</span>
            <span style={{ background: btn }}>CSS3</span>
            <span style={{ background: btn }}>JavaScript</span>
          </div>

          <h4 style={{ color: projectHeading }}>👩‍💻 Role</h4>
          <p style={{ color: projectText }}>
            Designed and developed the complete frontend independently.
          </p>

          <h4 style={{ color: projectHeading }}>📚 What I Learned</h4>
          <ul>
            <li style={{ color: projectText }}>Responsive Web Design</li>
            <li style={{ color: projectText }}>CSS Flexbox and Grid</li>
            <li style={{ color: projectText }}>DOM Manipulation</li>
            <li style={{ color: projectText }}>
              Building Real-World UI Clones
            </li>
          </ul>

          <h4 style={{ color: projectHeading }}>🚀 Challenges</h4>
          <ul>
            <li style={{ color: projectText }}>
              Making the website responsive on all screen sizes.
            </li>
            <li style={{ color: projectText }}>
              Replicating the original website's layout and styling.
            </li>
          </ul>

          <div
           
            className="project-links"
          >
            <a
              href=" https://deepanshi940666.github.io/SugarCosmatic/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: projectBtnBg,
                color: "white",
              }}
               style={{ "--btn-hover": projectBtnHover }}
              className={
                projectBtnBg === "#8BAE66" ? "project-dark" : "project-light"
              }
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Deepanshi940666/SugarCosmatic"
              target="_blank"
              rel="noreferrer"
              style={{
                background: projectBtnBg,
                color: "white",
              }}
               style={{ "--btn-hover": projectBtnHover }}
              className={
                projectBtnBg === "#8BAE66" ? "project-dark" : "project-light"
              }
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
