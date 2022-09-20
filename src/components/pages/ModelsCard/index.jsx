import React, {useState} from 'react';
import ModalPage from "../ModalPage";

const myNumber = 996702123000

const ModelsCard = ({el}) => {
  const [modal, setModal] = useState(false)
  return (
    <div className='models--all--card'>
      <img src={el.image} alt=""/>
      <h3 className='models--all--card--title'>{el.name}</h3>
      <p className='models--all--card--description'>{el.discriptions}</p>
      <div className='models--all--card--items'>
        <h2>{el.price}</h2>
        <div className='models--all--card--items--buttons'>
          <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте!
      %20Меня%20интересует%20этот%20товар%20"${el.name}" (${el.price})`}
             target="_blank">Купить</a>
          <ModalPage card={el} setModal={setModal} modal={modal}/>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;