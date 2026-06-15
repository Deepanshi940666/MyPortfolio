import React, { useState } from "react";
import "./Home.css";
import me from "./assets/me.png";
import { Link } from "react-router-dom";
import Resumee from './assets/Resumee.pdf'
const Home = ({bg,BackgroundC,nameC,homeH2,textColor,btn}) => {
  return (
    <div style={{ background: BackgroundC}} className="home">
      <div className="home-content">
        <h3 style={{color: homeH2}}>HEY, I'M</h3>

        <h1 style={{color:nameC}}>
          DEEPANSHI GUPTA <span>👋</span>
        </h1>

        <p style={{color: homeH2}} className="title">
         Engineering Student | 2nd Year (CSE) | Aspiring Software Developer
        </p>

        <p style={{color:nameC}}  className="description">
          I enjoy building responsive web applications, exploring modern
          technologies, and contributing to open-source projects. I'm passionate
          about learning, problem-solving, and creating user-friendly digital
          experiences.
        </p>

        <div className="buttons">
          <Link to="/projects">
            <button style={{ background:btn}}>View Projects</button>
          </Link>

          <a href={Resumee} download>
            <button style={{ background:btn}}>Download Resume</button>
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
