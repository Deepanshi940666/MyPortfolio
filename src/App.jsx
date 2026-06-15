import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
// import './App.css'

const App = () => {
  let [BackgroundC, setBackgroundC] = useState("#ffffff");
  let [nameC, setnameC] = useState("black");
  let [homeH2, setHomeH2] = useState("#2563eb");
  let [Bg, setBg] = useState("#f8f1e7");
  let [textColor, setTextColor] = useState("black");
  let [btn, setBtn] = useState("#fca311");
  let [footerBg, setFooterBg] = useState("#14213d");
  let[FooterH1,setFooterH1] =useState("#fca311")
  return (
    <div style={{ background: BackgroundC }}>
      <Nav
        BackgroundC={BackgroundC}
        setBackgroundC={setBackgroundC}
        nameC={nameC}
        setnameC={setnameC}
        homeH2={homeH2}
        setHomeH2={setHomeH2}
        Bg={Bg}
        setBg={setBg}
        textColor={textColor}
        setTextColor={setTextColor}
        btn={btn}
        setBtn={setBtn}
        footerBg={footerBg}
        setFooterBg={setFooterBg}
        FooterH1={FooterH1}
        setFooterH1={setFooterH1}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              Bg={Bg}
              BackgroundC={BackgroundC}
              nameC={nameC}
              homeH2={homeH2}
              textColor={textColor}
              btn={btn}
            />
          }
        >
          {" "}
        </Route>
        <Route path="/about" element={<About />}>
          {" "}
        </Route>
        <Route path="/skills" element={<Skills />}>
          {" "}
        </Route>
        <Route path="/projects" element={<Project />}>
          {" "}
        </Route>
        <Route path="/resume" element={<Resume />}>
          {" "}
        </Route>
        <Route path="/contact" element={<Contact />}>
          {" "}
        </Route>
      </Routes>

      {/* <Home/> */}
      {/* <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <Contact/>
       */}
      <Footer footerBg={footerBg} FooterH1={FooterH1}/>
    </div>
  );
};

export default App;
