import { useState } from "react"
import '../components/estilos/Contador.css'

const ItemsCount = ({  initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial)

  const suma = () => {
    if (cantidad) {
      setCantidad(cantidad + 1)
    }
  }

  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <>

      <div className="Contador">

      <button onClick={suma}>+</button>
        <p>{cantidad} </p>
        <button onClick={resta}>-</button>
     

      </div>

      <button onClick={() => onAdd(cantidad)} >Agregar al carrito</button>
    </>
  )
}

export default ItemsCount