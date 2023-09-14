import React from "react";
import  Form  from "./components/Form";

const cart = [1]

const Cart = () => {
    return (
        <div>Mi Carrito
         
         {cart.length > 0?
          <Form />
          :
          <button>Regresa a la pantalla principal</button>
            
         }


        </div>
    )
}

export default Cart