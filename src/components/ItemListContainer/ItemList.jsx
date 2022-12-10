import React from 'react'
import Flex from '../Flex-box/Flex'
import Item from './Item'

function ItemList(props){
  return (
    <Flex
        titulo="CATALOGO DE PRODUCTOS"
        descripcion="Aquí encontrarás los mejores productos de alta calidad y a un precio cómodo">
        {props.data.map((item)=>{
          return (
            <Item
            id={item.id}
            url={item.url}
            alt={item.alt}
            title={item.title}
            description={item.desc|| item.sinopsis}
            price={item.price}
            stock={item.stock}
            anime={item.anime}
            autor={item.autor}
            />
          )
        })}
    </Flex>
  )
}

export default ItemList