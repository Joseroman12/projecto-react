import Item from "./Item"
import Loader from "../components/Loader"
import '../components/estilos/item.css'

const ItemList = ({ productos }) => {

  const loading = []
  
    return (
      <div  className="container">
         {
        loading ? <Item productos={productos}/> : <Loader/>
      }
          
      </div> 
    )
}

export default ItemList