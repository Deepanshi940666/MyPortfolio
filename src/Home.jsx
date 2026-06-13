import React from "react";
import "./Home.css";
import me from './assets/me.png';
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h3>HEY, I'M</h3>

        <h1>
          DEEPANSHI GUPTA <span>👋</span>
        </h1>

        <p className="title">
          Engineering Student | Aspiring Software Developer
        </p>

        <p className="description">
          I enjoy building responsive web applications, exploring modern
          technologies, and contributing to open-source projects. I'm
          passionate about learning, problem-solving, and creating
          user-friendly digital experiences.
        </p>

        <div className="buttons">
          <button>View Projects</button>
          <button>Download Resume</button>
        </div>
      </div>

      <div className="home-image">
        <img
          src={me}
          alt="Deepanshi"
        />
      </div>
    </div>
  );
};

export default Home;