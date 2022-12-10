import React, { useState, useEffect } from 'react'
import { getSingleItem } from '../../services/promesas'
import { useParams } from "react-router-dom"
import './ItemDetailContainer.scss'


function ItemDetailContainer() {
    const [data, setData] = useState([]);
    let params = useParams();

    useEffect(() =>{  
    getSingleItem(params.id).then((respuesta) => setData(respuesta))
    }, []);

    return (
    <div className="container">
        <div className="detail-container">
            <div className="left-container">
                <div className="image-detail">
                    <div className="fav-iconn">
                        <span>♥</span>
                    </div>
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
                        <small>{"By: "+data.autor}</small>
                    </div>
                </div>
                <div className="desc-det">
                    <h2>{"Sinapsis de "+data.anime || "Descripción del producto"}</h2>
                    <h3>{data.desc || data.sinopsis}</h3>
                </div>
                <div className="detail-sell">
                    <div className="sell">
                        <label htmlFor="">Precio Unitario:</label>
                        <h3> S/{data.price}</h3>
                    </div>
                    <div className="cant">
                        <label htmlFor="">Cantidad: </label>
                        <input type="number" className="form-control " id="validationTooltip05" required="" placeholder="asd"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }

export default ItemDetailContainer;