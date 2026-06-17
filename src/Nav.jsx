import React, { useState } from "react";
import "./Nav.css";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
const Nav = ({
  BackgroundC,
  setBackgroundC,
  nameC,
  setnameC,
  homeH2,
  setHomeH2,
  Bg,
  setBg,
  textColor,
  setTextColor,
  btn,
  setBtn,
  footerBg,
  setFooterBg,
  FooterH1,
  setFooterH1,
  ProCard,
  setProCard,
  projectHeading,
  setProjectHeading,
  projectText,
  setProjectText,
   projectBtnBg,
  setProjectBtnBg,
  projectBtnHover,
  setProjectBtnHover,
  contactCardBg,
  setContactCardBg
}) => {
  function funct(Bg) {
    console.log("fahhh");
    if (Bg == "#f8f1e7") {
      let Bg = "#628141";
      setBg(Bg);
    } else if (Bg == "#628141") {
      let Bg = "#f8f1e7";
      setBg(Bg);
    }

    if (textColor == "black") {
      let Text = "#EBD5AB";
      setTextColor(Text);
    } else if (textColor == "#EBD5AB") {
      let Text = "black";
      setTextColor(Text);
    }

    if (BackgroundC == "#ffffff") {
      let BackG = "#1B211A";
      setBackgroundC(BackG);
    } else if (BackgroundC == "#1B211A") {
      let BackG = "#ffffff";
      setBackgroundC(BackG);
    }

    if (nameC == "black") {
      let name = "#8BAE66";
      setnameC(name);
    } else if (nameC == "#8BAE66") {
      let name = "black";
      setnameC(name);
    }

    if (homeH2 == "#2563eb") {
      let e = "#E8F5BD";
      setHomeH2(e);
    } else if (homeH2 == "#E8F5BD") {
      let e = "#2563eb";
      setHomeH2(e);
    }
    if (btn == "#fca311") {
      let e = "#EBD5AB";
      setBtn(e);
    } else if (btn == "#EBD5AB") {
      let e = "#fca311";
      setBtn(e);
    }

    if (footerBg == "#14213d") {
      let e = "#628141";
      setFooterBg(e);
    } else if (footerBg == "#628141") {
      let e = "#14213d";
      setFooterBg(e);
    }
    if (FooterH1 == "#fca311") {
      let e = "#1B211A";
      setFooterH1(e);
    } else if (FooterH1 == "#1B211A") {
      let e = "#fca311";
      setFooterH1(e);
    }
    if (ProCard == "#c2185b") {
      let e = "#8BAE66";
      setProCard(e);
    } else if (ProCard == "#8BAE66") {
      let e = "#c2185b";
      setProCard(e);
    }

    if (projectHeading === "#fca311") {
      setProjectHeading("#a3b18a");
    } else {
      setProjectHeading("#fca311");
    }

    if (projectText === "#444") {
      let e = "#fefae0";
      setProjectText(e);
    } else if (projectText === "#fefae0") {
      let e = "#444";
      setProjectText(e);
    }

    if (projectBtnBg === "#14213d") {
  setProjectBtnBg("#8BAE66"); 
} else {
  setProjectBtnBg("#14213d"); 
}

if (projectBtnHover === "#fca311") {
  setProjectBtnHover("#EBD5AB"); 
} else {
  setProjectBtnHover("#fca311"); 
}

if (contactCardBg === "#ffffff") {
  let e = "#8BAE66";
  setContactCardBg(e);
} else if (contactCardBg === "#8BAE66") {
  let e = "#ffffff";
  setContactCardBg(e);
}
  }
  return (
    <div>
      <nav style={{ background: Bg, color: textColor }}>
        <ul>
          <li className="logo">
            <Link to={"/"}>
              <h1
                style={{
                  color: textColor,
                }}
              >
                PORTFOLIO OF DEEPS
              </h1>
            </Link>
          </li>
          <Link to={"/"}>
            <li style={{ color: textColor }}>🏠 Home</li>
          </Link>

          <Link to={"/about"}>
            <li style={{ color: textColor }}>👩‍💻 About</li>
          </Link>

          <Link to={"/skills"}>
            <li style={{ color: textColor }}>🛠 Skills</li>
          </Link>

          {/* <Link to={"/"}>
            {" "}
            <li>🛠 Skills</li>
          </Link> */}

          <Link to={"/projects"}>
            <li style={{ color: textColor }}>📂 Projects</li>
          </Link>

          <Link to={"/resume"}>
            <li style={{ color: textColor }}>📄 Resume</li>
          </Link>

          <Link to={"/contact"}>
            <li style={{ color: textColor }}>📞 Contact</li>
          </Link>

          <li className="theme-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/12180/12180724.png"
              alt="Theme"
              onClick={() => {
                funct(Bg);
              }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
