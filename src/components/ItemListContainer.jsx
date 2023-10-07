import ItemList from '../components/ItemList'
import { useParams } from "react-router-dom"

import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from "react"
import Loader from '../components/Loader'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const { categoria } = useParams()

  useEffect(()=>{
    const db = getFirestore()

    const itemsCollection = collection(db, "indumentarias")

    getDocs(itemsCollection).then((snapshot)=>   {
    const docs = snapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id}; 
    });
    setProductos(docs)
     })
  }, [])

  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

  return (
    <>

    <div>
    { 
      productos.length === 0 ?  <Loader /> : 
      categoria ? <ItemList  productos={filteredProducts} /> : < ItemList  productos={productos}/> 

    }
    </div>
      
   

    </>
    );
};


export default ItemListContainer