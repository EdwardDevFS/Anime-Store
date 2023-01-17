import React from 'react'
import { createContext } from 'react'

const cartContext =  createContext([])
const Provider = cartContext.Provider;
const value= {
  favorito: false,
  cart: []
}




//TODO SE NECESITA LA FUNCIONALIDAD PARA AÑADIR COSAS A LA TIENDA, CREAR BOLETA Y SI SE PUEDE DARLE UNA VALIDACIÓN


function CarContextProvider(props) {
  return (
    <Provider value={{value}}>
        {props.children}
    </Provider>
  )
}

export { cartContext, CarContextProvider };