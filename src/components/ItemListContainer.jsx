import React, { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail";

import  ItemList  from "./ItemList";

const ItemListContainer = ({productos}) => { 
  
  const getProducts = async () => {
   
      const response = await fetch("https://fakestoreapi.com/products");
       const data = await response.json();
       
       return data
      }
    
     const [product, setProduct] = useState([])
    
      
     useEffect(() =>{ 
      getProducts() .then((product) => setProduct(product))
 
     }, [])
    
  return (
    <>  
      <ItemList productos={product} />
    </>
  ) 
} 
  
  export default ItemListContainer;