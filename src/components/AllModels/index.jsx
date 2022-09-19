import React, {useState,useEffect} from 'react';
import {DataModels, DataTab} from "../Data";
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
  console.log(category)


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
                product.filter(el => el.category === "Для программирования").map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "office"}>
            <div className='models--all'>
              {
                DataModels.filter(el => el.type === "office").map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "gaming"}>
            <div className='models--all'>
              {
                DataModels.filter(el => el.type === "gaming").map(el => (
                  <ModelsCard el={el}/>
                ))
              }
            </div>
          </div>

          <div hidden={tab !== "accessories"}>
            <div className='models--all'>
              {
                DataModels.filter(el => el.type === "accessories").map(el => (
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