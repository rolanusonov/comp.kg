import React from 'react';
import logo from "../../assets/img/image 5 (Traced).svg"

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <img src={logo} alt=""/>
          <p>Developed by Motion Web LLC</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;