import React from "react";
import "./Nav.css";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
            <Link to={"/"}>
              <h1>PORTFOLIO OF DEEPS</h1>
            </Link>
          </li>
          <Link to={"/"}>
            <li>🏠 Home</li>
          </Link>

          <Link to={"/about"}>
            {" "}
            <li>👩‍💻 About</li>
          </Link>

          <Link to={"/skills"}>
            {" "}
            <li>🛠 Skills</li>
          </Link>

          {/* <Link to={"/"}>
            {" "}
            <li>🛠 Skills</li>
          </Link> */}

          <Link to={"/projects"}>
            <li>📂 Projects</li>
          </Link>

          <Link to={"/resume"}>
            {" "}
            <li>📄 Resume</li>
          </Link>

          <Link to={"/contact"}>
            <li>📞 Contact</li>
          </Link>

          <li className="theme-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/12180/12180724.png"
              alt="Theme"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
