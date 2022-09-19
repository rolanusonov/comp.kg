import React from 'react';
import Macbook from '../../assets/img/Macbook.svg'
import Lenevo from '../../assets/img/Lenevo.svg'
import Acer from '../../assets/img/Acer.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <section id='hero'>
      <div className='container'>
        <div className='hero'>
          <div className='hero--items'>
            <h1>Территория низких цен</h1>
            <div className='hero--items--description'>
              <div></div>   Профессиональная сборка <br/> компьютеров, и продажа ноутбуков!
            </div>
            <button className='hero--items--btn'>Купить</button>
          </div>
          <div className='hero--slider'>
           <Slider {...settings}>
             <img src={Macbook} alt=""/>
             <img src={Lenevo} alt=""/>
             <img src={Acer} alt=""/>
           </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;