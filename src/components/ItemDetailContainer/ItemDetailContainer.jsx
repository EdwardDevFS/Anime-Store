import React, { useState, useEffect,useContext } from 'react'
import { getItems, getSingleItem } from '../../services/firebase'
import { useParams } from "react-router-dom"

import { cartContext } from '../../Storage/CarContext'

import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'



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

            <Loading/>
            :
            <ItemDetail data={data}/>

        
    
    )
    }

export default ItemDetailContainer;