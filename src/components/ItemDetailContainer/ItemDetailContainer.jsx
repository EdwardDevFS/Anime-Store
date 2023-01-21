import React, { useState, useEffect,useContext } from 'react'
import { getItems, getSingleItem } from '../../services/firebase'
import { useParams } from "react-router-dom"

import { cartContext } from '../../Storage/CarContext'

import ItemDetail from './ItemDetail'
import Cargando from '../Cargando/Cargando'



function ItemDetailContainer() {
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(true)
    let params = useParams();


    async function getData(){
        let respuesta = await getSingleItem(params.id)
        setData(respuesta);
        setIsLoading(false)
    }
    
    useEffect(() =>{  
        getData()
        getItems()
    }, [] );
    

    // getSingleItem(params.id).then((respuesta) => setData(respuesta))


    
    
    return (
        
            isloading ?

            <Cargando/>
            :
            <ItemDetail data={data}/>

        
    
    )
    }

export default ItemDetailContainer;