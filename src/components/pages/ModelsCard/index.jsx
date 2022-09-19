import React, {useState} from 'react';
import ModalPage from "../ModalPage";


const ModelsCard = ({el}) => {
  const [modal, setModal] = useState(false)
  return (
    <div className='models--all--card'>
      <img src={el.img} alt=""/>
      <h3 className='models--all--card--title'>{el.name}</h3>
      <p className='models--all--card--description'>{el.characteristic}</p>
      <div className='models--all--card--items'>
        <h2>{el.price}</h2>
        <div className='models--all--card--items--buttons'>
          <a href={`${el.link}?text=%20Здравствуйте,
      %20Меня%20итересует%20этот%20товар%20"${el.name}", (${el.price})`}
             target="_blank">Купить</a>
          <ModalPage card={el} setModal={setModal} modal={modal}/>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;