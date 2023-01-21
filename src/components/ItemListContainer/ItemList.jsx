import React, { useContext } from 'react'
import Flex from '../Flex-box/Flex'
import Item from './Item'
import { cartContext } from '../../Storage/CarContext'


function ItemList(props){
  const context = useContext(cartContext)
  
  console.log(context)
  return (
    <>
    <Flex
        titulo={"CATALOGO DE PRODUCTOS"}
        descripcion="Aquí encontrarás los mejores productos de alta calidad y a un precio cómodo">
        {props.data.map((item,i)=>{
          return (
            <Item
            key={i}
            id={item.id}
            url={item.url}
            alt={item.alt}
            title={item.title}
            description={item.desc|| item.sinopsis}
            price={item.price}
            stock={item.stock}
            anime={item.anime}
            autor={item.autor}
            name={item.title}
            />
          )
        })}
    </Flex>
    </>
  )
}

export default ItemList