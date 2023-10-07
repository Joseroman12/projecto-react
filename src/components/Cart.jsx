import {  Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import ItemCart from '../components/ItemCart';
import Form from "../components/Form";



const Cart = () => {
  const { cart, vaciarCarrito, precioTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div className="carrito-vacio">Su carrito esta vacio, aprete el boton para regresar.</div>
        <div>
          <Link to={"/"}>
            <Button color="#ff66b2" margin='15px' >
              Regresar a catalogo
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
    <div>
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto} />
        ))}
    </div>
        <div>
          <Button onClick={vaciarCarrito}>Limpiar Carrito</Button>
        </div>
        <div>
          <p>Total: ${precioTotal()}</p>
        </div>
      

      <Form />
      
    </div>
  );
};

export default Cart;