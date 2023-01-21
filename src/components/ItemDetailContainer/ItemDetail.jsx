import React, { useState, useContext } from 'react'
import './ItemDetailContainer.scss'
import { Heading } from '@chakra-ui/react'
import { Carga } from '../Cargando/Cargando'
import { 
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useToast,
    } from '@chakra-ui/react'
import Carrito from '../Carrito/Carrito'
import { cartContext } from '../../Storage/CarContext'


function ItemDetail({ data }) {
    const {addToCart, removeItem} = useContext(cartContext);

    const [cantidad, setCantidad] = useState(1);
    const [itemsIn, setItemsIn] = useState(false);
    
    const toast = useToast();  
    const titulo = data.title;
    const cantidad_en_carrito = useContext(cartContext)
    
    function obtenerCantidad(event){
        let cant = parseInt(event)
        setCantidad(cant)
        // cant = event.target.value
        // setCantidad(cant)
        
        // parseInt(cantidad)
        // console.log(cantidad)

    }
    
    function migrarDatos() {

        // let stock = data.stock
        // let cant = cantidad
        addToCart(data,cantidad)
        toast({
            title: `El producto ${titulo} ha sido añadido a la Cartera`,
            description: "Puedes consultarlo con el botón de arriba a la derecha para visualizar la cartera",
            status: 'success',
            duration: 9000,
            position: 'bottom-right',
            isClosable: true,  
        })
        setItemsIn(true)

    }


    return (
        <div className="todo">

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
                    <Heading>{data.title}</Heading>
                        <div className="info-detail">
                            <small>Anime: {data.anime}</small>
                            <small>{data.autor? "Por "+data.autor: ""}</small>
                        </div>
                    </div>
                    <div className="desc-det">
                        <h2>{"Sinapsis de "+data.anime || "Descripción del producto"}</h2>
                        <h3>{data.desc || data.sinopsis}</h3>
                    </div>
                    <div className="detail-sell">
                        <div className="sell mt-2">
                            <span>{data.stock <= 0 ?
                                "No está disponible" :
                                cantidad ? 
                                `Stock: ${data.stock - cantidad} und`
                                :
                                "Stock: "+data.stock+" und"
                            }</span>
                        </div>
                        <div className="sell">
                            <label htmlFor="">Precio Unitario:</label>
                            <h3> S/{data.price}</h3>
                        </div>
                        <div className="sell">
                            <label >Cantidad: </label>
                            <NumberInput 
                                onChange={obtenerCantidad}
                                defaultValue={1}
                                min={1} 
                                max={data.stock}
                                disabled={ data.stock === 0 ? true:false || itemsIn ? true : false}
                                id="sell" 
                                >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                        </div>
                        
                        
                    </div>
                    <div className="agregar text-dark mt-5">
                        {cantidad ? 
                        <Heading>{`Total: S/${cantidad*data.price}`}</Heading>
                        :
                        <></>
                        }
                        {
                            itemsIn ?
                        
                            <Carrito clase="carrito px-3">Ir a la cartera</Carrito>
                            :
                            <Button onClick={migrarDatos}
                            colorScheme='teal' variant='outline'
                            bg='rgb(1, 8, 10)'
                            disabled={data.stock === 0 ? true:false}
                        >Agregar a la cartera</Button>
                        
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
                
  )
}

export default ItemDetail