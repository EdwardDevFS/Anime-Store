import React, { useState, useEffect } from 'react'
import getItems, { getItemsCategory } from '../../services/promesas'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Cargando from '../Cargando/Cargando';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);
  const category = useParams().category
  useEffect(() =>{
    if(category === undefined){
      getItems().then((respuesta) => setData(respuesta))
      setTimeout((resolve)=>{
        resolve(setIsLoading(false));
    },3000);
    }
    else{
      getItemsCategory(category).then((respuestaFiltrada) => setData(respuestaFiltrada));
      setTimeout((resolve)=>{
        resolve(setIsLoading(false));
    },3000);
    } 
  }, [category]);

  return isLoading ? <Cargando/> : <ItemList data={data} /> 
    

  
}

export default ItemListContainer;