import React from "react";
import "./Home.css";
import me from "./assets/me.png";
import { Link } from "react-router-dom";
import Resumee from './assets/Resumee.pdf'
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h3>HEY, I'M</h3>

        <h1>
          DEEPANSHI GUPTA <span>👋</span>
        </h1>

        <p className="title">
         Engineering Student | 2nd Year (CSE) | Aspiring Software Developer
        </p>

        <p className="description">
          I enjoy building responsive web applications, exploring modern
          technologies, and contributing to open-source projects. I'm passionate
          about learning, problem-solving, and creating user-friendly digital
          experiences.
        </p>

        <div className="buttons">
          <Link to="/projects">
            <button>View Projects</button>
          </Link>

          <a href={Resumee} download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={me} alt="Deepanshi" />
      </div>
    </div>
  );
};

export default Home;
