import React from 'react'

const ItemDetail = (props) => {
    return (
    <div className="detail-container">
        <div className="left-container">
            <div className="image-detail">
                <img src={props.url} alt={props.alt} />
            </div>
            <div className="info-detail">
                <h4>{props.caracter}</h4>
            </div>
        </div>
        <div className="right-container">
            <div className="header-container">
                <h2>{props.title}</h2>
                <div className="info-detail">
                    <small>Anime: {props.anime}</small>
                    <small>{props.autor}</small>
                </div>
            </div>
            <h3 className="desc-det">{props.desc}</h3>
            <div className="detail-sell">
                <div className="cant">
                    <label htmlFor="">Cantidad: </label>
                    <input type="number" placeholder="asd"/>
                </div>
                <div className="sell">
                    <label htmlFor="">Precio: {props.price}</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail