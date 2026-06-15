import React from "react";
import "./Footer.css";
const Footer = ({footerBg, FooterH1}) => {
  return (
    <div>
      <footer style={{ background: footerBg}} className="footer">
        <h2 style={{ color:FooterH1}}>Thank You! </h2>

        <p>
          Thank you for taking the time to explore my portfolio. I'm always
          excited to connect, learn, and collaborate on new opportunities. Feel
          free to reach out anytime!
        </p>

        <p style={{ color:FooterH1}} className="footer-end">Made with ❤️ by Deepanshi Gupta</p>
      </footer>
    </div>
  );
};

export default Footer;
