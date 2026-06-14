import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="contact">
      <h2>CONTACT ME</h2>

      <p className="contact-text">
        I'm always open to discussing new opportunities, collaborations, and
        interesting projects. Feel free to reach out!
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <p>github.com/Deepanshi940666</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/your-profile</p>
        </div>

        <div className="contact-card">
          <MdEmail className="icon" />
          <h3>Email</h3>
          <p>yourmail@gmail.com</p>
        </div>
      </div>

      <a href="mailto:deepanshi102938@gmail.com" className="contact-btn">
        Let's Connect 🚀
      </a>
    </section>
  );
};

export default Contact;
