import React from "react";
import './Nav.css'
import Logo from './assets/logo.png';
const Nav = () => {

  return (
    <div>
   <nav>
  <ul>
    <li className="logo">
      <h1>PORTFOLIO OF DEEPS</h1>
    </li>

    <li>🏠 Home</li>
    <li>👩‍💻 About</li>
    <li>🛠 Skills</li>
    <li>📂 Projects</li>
    <li>📄 Resume</li>
    <li>📞 Contact</li>

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
