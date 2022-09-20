import React, {useState,useEffect} from 'react';
import ModelsCard from "../pages/ModelsCard";
import api from "../../api/Api";

const AllModels = () => {

  const [tab, setTab] = useState("Для программирования")
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])

  const getProduct = async () => {
    const url = await api("product/")
    const {data} = await url
    await setProduct(data)
  }

  const getCategory = async () => {
    const url = await api("category/")
    const {data} = await url
    await setCategory(data)
  }

  useEffect(() => {
    getProduct()
    getCategory()
  },[])


  return (
    <section id='models'>
      <div className="container">
        <div className="models">
          <h1 className='models--title'>Все модели</h1>
          <div className='models--item'>
            <div className='models--item--tab'>
              {
                category.map(el => (
                  <h3 onClick={() => setTab(el.name)}
                      className={`${tab === el.name? "active" : ""}`}
                  >{el.name}</h3>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "Для программирования"}>
            <div className='models--all'>
              {
                product.filter(el => el.category === 2).map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "Офисные"}>
            <div className='models--all'>
              {
                product.filter(el => el.category === 3).map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "Игровые"}>
            <div className='models--all'>
              {
                product.filter(el => el.category === 4).map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "Аксессуары"}>
            <div className='models--all'>
              {
                product.filter(el => el.category === 5).map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AllModels;