import React, { useState, useEffect } from 'react'
import getItems from '../../services/promesas'
import ItemList from './ItemList'


function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() =>{  
    getItems().then((respuesta) => setData(respuesta))
  }, []);

  return <ItemList data={data} />;
}

export default ItemListContainer;