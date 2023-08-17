import React, { useState, useEffect } from 'react'
import { getItems, getItemsCategory } from '../../services/firebase'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import useLoading from '../../services/useLoading';
import Loading from '../Loading/Loading';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { isLoading, initLoading, endLoading } = useLoading(true)
  const category = useParams().category




  useEffect(() =>{
    initLoading()
    if(category === undefined){
      getItems().then((respuesta) => setData(respuesta)).finally(()=>{
        endLoading()
    }).catch((error)=>{
      alert("Inesperated Error", error)
    })
      
    }

    else{
      getItemsCategory(category).then((respuestaFiltrada) => setData(respuestaFiltrada)).finally(() =>{
        endLoading()
      }).catch((error)=>{
        alert("Inesperated Error", error)
      });
    } 
  }, [category]);

  return isLoading ? <Loading/> : <ItemList data={data} /> 
    

  
}

export default ItemListContainer;