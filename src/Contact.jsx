import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
const Contact = ({btn,BackgroundC,nameC,textColor,homeH2,contactCardBg,projectText}) => {
  return (
    <section className="contact">
      <h2 style={{
                  color: textColor
                }}>CONTACT ME</h2>

      <p style={{
                  color: nameC
                }} className="contact-text">
        I'm always open to discussing new opportunities, collaborations, and
        interesting projects. Feel free to reach out!
      </p>

      <div className="contact-container">
        <div  style={{ background: contactCardBg }} className="contact-card">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <p style={{ color: projectText }}>github.com/Deepanshi940666</p>
        </div>

        <div  style={{ background: contactCardBg }} className="contact-card">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <p style={{ color: projectText }}>linkedin.com/in/your-profile</p>
        </div>

        <div  style={{ background: contactCardBg }} className="contact-card">
          <MdEmail className="icon" />
          <h3>Email</h3>
          <p style={{ color: projectText }}>deepanshi102938@gmail.com</p>
        </div>
      </div>

      <a style={{ background:btn}} href="mailto:deepanshi102938@gmail.com" className="contact-btn">
        Let's Connect 🚀
      </a>
    </section>
  );
};

export default Contact;
