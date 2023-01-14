import React, { useContext } from 'react'
import { cartContext } from '../Storage/CarContext';



function Contacto() {
    const context = useContext(cartContext)
    console.log(context);
    return (
        <div>Contacto</div>
    )
}

export default Contacto;