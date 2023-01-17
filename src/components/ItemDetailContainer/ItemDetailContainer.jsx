import React, { useState, useEffect } from 'react'
import { getSingleItem } from '../../services/promesas'
import { useParams } from "react-router-dom"
import './ItemDetailContainer.scss'
import { Heading } from '@chakra-ui/react'
import { 
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useToast,
    } from '@chakra-ui/react'



function ItemDetailContainer() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);
    let params = useParams();
    let cant = document.querySelector('#aña');
    let boton = document.querySelector('#dis');
    const toast = useToast()
    const titulo = data.title
    const [Stock, setStock] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const [isloading, setIsLoading] = useState(true)
    async function getData(){
        let respuesta = await getSingleItem(params.id)
        setData(respuesta);
        setIsLoading(false)
    }
    
    useEffect(() =>{  
        getData()
        setStock(data.stock)
    }, [] );
    

    // getSingleItem(params.id).then((respuesta) => setData(respuesta))

    function obtenerCantidad(event){
        setCantidad(event.target.value)
    }

    function migrarDatos(event) {
        // carrito.push(data) ;
        // console.log(carrito);
        // let datos = JSON.stringify(carrito)
        // console.log(datos) 
        // let asd = JSON.parse(datos)
        // console.log(asd)
        // localStorage.setItem("aña",carrito)

        let stock = data.stock
        let cant = cantidad
        
        setStock(stock-cant)
        console.log(Stock)
        toast({
            title: `El producto ${titulo} ha sido añadido a la Cartera`,
            description: "Puedes consultarlo con el botón de arriba a la derecha para visualizar la cartera",
            status: 'success',
            duration: 9000,
            position: 'bottom-right',
            isClosable: true,  
        })
        event.target.disabled = true
        
    }
    
    // if(data.stock <= 0){
    //     boton.disabled = true;
    //     cant.disabled = true;
    // }
    // else{
    //     boton.disabled = false
    //     cant.disabled = false
    // }
    
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
                        <span>{data.stock <= 0 ? "No está disponible" : `Stock: ${Stock} und` }</span>
                    </div>
                    <div className="sell">
                        <label htmlFor="">Precio Unitario:</label>
                        <h3> S/{data.price}</h3>
                    </div>
                    <div className="sell">
                        <label >Cantidad: </label>
                        <NumberInput 
                            onBlur={obtenerCantidad}
                            defaultValue={1}
                            min={1} 
                            max={data.stock}
                            disabled={ data.stock === 0 ? true:false}
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
                    <Heading>{"Total: S/"}</Heading>
                    <Button onClick={migrarDatos}
                          
                          colorScheme='teal' variant='outline'
                          bg='rgb(1, 8, 10)'
                          disabled={data.stock === 0 ? true:false}
                        >Agregar a la cartera</Button>
                </div>
            </div>
        </div>
        
    </div>
    
    )
    }

export default ItemDetailContainer;