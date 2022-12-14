import React from 'react';
import logo from "../../assets/img/image 5 (Traced).svg"

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <img src={logo} alt=""/>
          <a href="https://motion-web.io/" target={"_blank"}>Developed by Motion Web LLC</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;