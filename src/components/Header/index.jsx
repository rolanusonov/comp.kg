import React, {useState} from 'react';
import logo from '../../assets/img/image 5 (Traced).svg'

const Header = () => {

  const [burger, setBurger] = useState(false)

  return (
    <header id='header'>
      <div className="container">
        <div className="header">
          <div className='header--logo'>
            <img src={logo} alt=""/>
          </div>
          <nav className='header--nav'>
            <a href="#models">Продукт</a>
            <a href="#about-me">О&nbsp;нас</a>
            <a href="#contact">Контакты</a>
          </nav>
          <div onClick={() => setBurger(true)} className="header--burger">
            <svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="41" height="4" rx="2" fill="#D9D9D9"/>
              <rect y="9" width="41" height="4" rx="2" fill="#D9D9D9"/>
              <rect y="18" width="41" height="4" rx="2" fill="#D9D9D9"/>
            </svg>
          </div>

          <div className='header--navBurger' style={{
            transform: burger ? "translateY(0)" : "translateY(-150%)",
            transition: ".4s",
          }}>

            <a href="#models">Продукт</a>
            <a href="#about-me">О&nbsp;нас</a>
            <a href="#contact">Контакты</a>

            <svg onClick={() => setBurger(false)} className="header--navBurger--close" width="67" height="18"
                 viewBox="0 0 67 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M3 15L33.5 3L64 15" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            </svg>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;