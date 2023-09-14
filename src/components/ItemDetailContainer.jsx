import React from 'react'
import ItemDetail from './ItemDetail';



const ItemDetailContainer = ({productos}) => {
   


// const getProductos = new Promise ((resolve, reject) =>{
//     if (productos.length > 0) {
//         setTimeout(() =>{
//             resolve(productos)
//         }, 2000)
//     } else {
//         reject(new Error("no hay datos"))
//     }
// })

// getProductos
// .then((res) =>{ 
// })
// .catch((error) => {
//     console.log(error)
// })

return (
    <>  
       <ItemDetail
        productos={productos}
       />

    
    </>
)

}
export default ItemDetailContainer