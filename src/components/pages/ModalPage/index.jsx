import React from 'react';
import {VscEye} from "react-icons/vsc";
import {IoIosArrowBack} from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import modal_1 from "../../../assets/img/modal-img.svg"
import modal_2 from "../../../assets/img/modal-img2.svg"

const ModalPage = ({card, setModal, modal}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
      <button onClick={() => setModal(true)}
              className='models--all--card--items--buttons--btn'>
        <VscEye/></button>

      <div
        onClick={() => setModal(false)}
        style={{
          display: modal ? 'block' : 'none',
          transition: '.37s',
        }}
        className='bg-modal'
      >
        {' '}
      </div>


      <div style={{
        transform: modal ? 'scale(1)' : 'scale(0)',
        transition: '.35s',
      }}
           className='modal'>

        <div className="modal--items">
          <div onClick={() => setModal(false)} className='modal--items--back'>
            <IoIosArrowBack/>
          </div>
          <div className='modal--items--slider'>
            <Slider {...settings} >
              <img src={modal_1} alt=""/>
              <img src={modal_2} alt=""/>
              <img src={modal_1} alt=""/>
            </Slider>
            <h3>{card.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPage;