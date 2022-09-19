import React from 'react';
import {MdLaptopMac} from "react-icons/md";
import {SiHelpdesk} from "react-icons/si";
import {FiPercent} from "react-icons/fi";
import {RiMailOpenLine} from "react-icons/ri";

const Advantages = () => {

  const DataAdvantages = [
    {
      title: "Подберем ноут для любых ЗАДАЧ и бюджетов!",
      icon: <MdLaptopMac/>
    },
    {
      title: "Рассрочка по всему Кыргызстану",
      icon: <FiPercent/>
    },
    {
      title: "Консультация от специалистов",
      icon: <RiMailOpenLine/>
    },
  ]

  return (
    <section id='advantages'>
      <div className='container'>
        <div className='advantages'>
          <h1 className='advantages--title'>Почему именно мы?</h1>
          <p className='advantages--description'>Подберем ноут для любых ЗАДАЧ и бюджетов!</p>
          <div className='advantages--boxes'>
            {
              DataAdvantages.map(el => (
                <div className='advantages--boxes--card' data-aos="fade-up">
                  <div className='advantages--boxes--card--icon'>{el.icon}</div>
                  <h1>{el.title}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;