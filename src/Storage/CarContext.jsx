import React from 'react'
import { createContext } from 'react'

const cartContext =  createContext([])
const Provider = cartContext.Provider;
const value= {
    cart: [],
    saludo: "hola desde context prro"
}








function CarContextProvider(props) {
  return (
    <Provider value= {value}>
        {props.children}
    </Provider>
  )
}

export { cartContext, CarContextProvider };