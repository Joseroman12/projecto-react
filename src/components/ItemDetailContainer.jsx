import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { useParams } from "react-router-dom"
import Loader from "./Loader"


const ItemDetailCotainer = () => {
  const {id} = useParams()
  const [producto, setProducto] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    
    const itemsCollection = collection(db, "indumentarias")
    getDocs(itemsCollection).then((snapshot)=>   {
    const docs = snapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id};
    });
    setProducto(docs)
     })
  }, [])


  

  
  
  
  const productoFiltrado = producto.filter((producto) => producto.id == id)
  
  return (
    <div>
        {
        productoFiltrado.length > 0 ?
        productoFiltrado.map(p => {
          return(
            <ItemDetail producto={p} key={p.id}/>
            )
          })
          : <Loader/>
        }
    </div>
  )
}

export default ItemDetailCotainer