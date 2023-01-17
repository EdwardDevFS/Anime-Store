import React, { useState, useEffect } from 'react'
import getItems, { getItemsCategory } from '../../services/promesas'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);
  const category = useParams().category
  useEffect(() =>{
    if(category === undefined){
      getItems().then((respuesta) => setData(respuesta))
    }
    else{
      getItemsCategory(category).then((respuestaFiltrada) => setData(respuestaFiltrada));
    } 
  }, [category]);

  return <ItemList data={data} />;
}

export default ItemListContainer;