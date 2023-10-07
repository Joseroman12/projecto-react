
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';

const CartWidget = () => {

  const {Totalesproductos} = useContext(CartContext);

  return (
     <div> 

        🛒
       <span>{Totalesproductos()|| ''} </span>
        
      </div>
  )
}

export default CartWidget