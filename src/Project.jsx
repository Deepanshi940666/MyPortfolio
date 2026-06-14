import React from "react";
import "./Project.css";
import Web from "./assets/Website.png";
const Project = () => {
  return (
    <div>
      <div className="project-card">
        <h2>MY PROJECT</h2>
        <div className="image-card">
          <img
            src={Web}
            alt="Sugar Cosmetics Clone"
            className="project-image"
          />
        </div>

        <div className="project-content">
          <h3>Sugar Cosmetics Clone</h3>

          <p className="project-desc">
            A fully responsive clone of the Sugar Cosmetics website built using
            HTML, CSS, and JavaScript. The project replicates the original
            website's user interface and provides a seamless browsing experience
            across desktop, tablet, and mobile devices.
          </p>

          <h4>✨ Features</h4>
          <ul>
            <li>Fully Responsive Design</li>
            <li>Interactive Navigation Bar</li>
            <li>Product Listing Sections</li>
            <li>Modern and Attractive UI</li>
            <li>Optimized for Multiple Devices</li>
          </ul>

          <h4>🛠 Tech Stack</h4>
          <div className="tech-stack">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>

          <h4>👩‍💻 Role</h4>
          <p>Designed and developed the complete frontend independently.</p>

          <h4>📚 What I Learned</h4>
          <ul>
            <li>Responsive Web Design</li>
            <li>CSS Flexbox and Grid</li>
            <li>DOM Manipulation</li>
            <li>Building Real-World UI Clones</li>
          </ul>

          <h4>🚀 Challenges</h4>
          <ul>
            <li>Making the website responsive on all screen sizes.</li>
            <li>Replicating the original website's layout and styling.</li>
          </ul>

          <div className="project-links">
            <a
              href=" https://deepanshi940666.github.io/SugarCosmatic/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Deepanshi940666/SugarCosmatic"
              target="_blank"
              rel="noreferrer"
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
