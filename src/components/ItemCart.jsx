import { CartContext } from '../Context/CartContext'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'


const ItemCart = ({producto}) => {
    const {sacarDelCart} = useContext(CartContext)
  return (
    <div>
        <div>
          <img src={producto.imagen} alt="imagen indumentaria" />
        </div>
        <div>
          <h2>  {producto.nombre} </h2>
          <p> Precio:$ {producto.precio} </p>
          <p> Cantidad: {producto.cantidad} </p>
          <p>Subtotal: $ {producto.cantidad * producto.precio}</p>
          <Button color='#ff66b2' margin='10px'
           onClick={() => sacarDelCart(producto.id)} >Eliminar</Button>
        </div>
    </div>
  )
}

export default ItemCart