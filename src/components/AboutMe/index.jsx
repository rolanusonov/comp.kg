import React from 'react';
import blue from "../../assets/img/blue-comp.svg"
import black from "../../assets/img/black-comp.svg"
import red from "../../assets/img/computer.svg"

const AboutMe = () => {
  return (
    <section id='about-me'>
      <div className="container">
        <h1 className='about-me--title'>О нас</h1>
        <div className="about-me">
          <div className='about-me--images'>
            <img className='about-me--images--blue' src={blue} alt=""/>
            <img className='about-me--images--black' src={black} alt=""/>
            <img className='about-me--images--red' src={red} alt=""/>
          </div>
          <ul className='about-me--text'>
            <li>НОУТБУКИ | MACBOOK | ( compkg )</li>
            <li>
              🇰🇬 РАССРОЧКА ПО ВСЕМУ KG

            </li>
            <li>Подберем ноут для любых ЗАДАЧ и бюджетов!</li>
            ️
            <li> Консультация от специалистов
              📲 WhatsApp⤵️
              <a href="https://wa.me/996702123000" target={"_blank"}>  api.whatsapp.com/send?phone=996702123000</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;