import React from 'react';
import {MdLocationPin} from "react-icons/md";
import {BsYoutube} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
import {AiFillInstagram, AiTwotonePhone} from "react-icons/ai";

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container">
        <h1 className='contact--title'>Контакты</h1>
        <div className="contact">
          <div className='contact--dates'>
            <div className='contact--dates--link'>
              <a href="https://goo.gl/maps/nSit8Unu2ZfPaVng9" target="_blank"
                 className='contact--dates--link--items'>
                <MdLocationPin className='icon-links'/> Жибек-жолу 150, ТЦ-Табылга, Бутик А-14
              </a>

              <a href="tel:+996702 12 30 00"
                 className='contact--dates--link--items'>
                <AiTwotonePhone className='icon-links'/> +996702 12 30 00
              </a>
            </div>
            <div className='contact--dates--icons'>
              <a href="https://telegram.com" target="_blank"><FaTelegramPlane/></a>
              <a href="https://whatsapp.com" target="_blank"><IoLogoWhatsapp/></a>
              <a href="https://instagram.com" target="_blank"><AiFillInstagram/></a>
              <a href="https://youtube.com" target="_blank"><BsYoutube/></a>
            </div>
          </div>
          <div className='contact--dates--map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.2923730800103!2d74.63642241534014!3d42.887777779154966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb79e160f7e79%3A0x762ef4d51c1574df!2sThe%20Tabylga%20Shopping%20Center!5e0!3m2!1sru!2skg!4v1663506155093!5m2!1sru!2skg"
             allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;