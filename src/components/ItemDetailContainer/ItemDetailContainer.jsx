import React, { useState, useEffect } from 'react'
import { getSingleItem } from '../../services/promesas'
import './ItemDetailContainer.scss'


function ItemDetailContainer() {
  const [data, setData] = useState([]);

  useEffect(() =>{  
    getSingleItem().then((respuesta) => setData(respuesta))
  }, []);

  return (
    <div className="Contain">
      <div className="detail-container">
          <div className="left-container">
              <div className="image-detail">
                  <img src={data.url} alt={data.alt} />
              </div>
              <div className="info-detail">
                  <h4>Caracteristicas: {data.caracter || "El item no cuenta con características"}</h4>
              </div>
          </div>
          <div className="right-container text-center">
              <div className="header-container">
                  <h2>{data.title}</h2>
                  <div className="info-detail">
                      <small>Anime: {data.anime}</small>
                      <small>{data.autor}</small>
                  </div>
              </div>
              <h3 className="desc-det">{data.desc || data.sinopsis}</h3>
              <div className="detail-sell">
                  <div className="cant">
                      <label htmlFor="">Cantidad: </label>
                      <input type="number" className="text-bg-dark" placeholder="asd"/>
                  </div>
                  <div className="sell">
                      <label htmlFor="">Precio: {data.price}</label>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer;