import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("")
  const [direccion, setDireccion] = useState("")
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handelSubmit = (e) => {
    e.preventDefault();
    nombre === ""
      ? alert("Campo de nombre Vacio")
      : alert(`Gracias por su compra realizada ${nombre}`);
    email === ""
      ? alert("Ingrese correo electronico para comprar")
      : alert(`Fue enviado a su correo electronico ${email}`);
    celular === ""
      ? alert("Ingrese el numero del celular para comprar")
      : alert(`Le llegara un mensaje a su celular. Gracias por la compra realizada ${celular}`);
      direccion === ""
      ? alert("Ingrese tu Direccion para comprar")
      : alert(`Le llegara un mensaje a su direccion. Gracias por la compra realizada${direccion}`);

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));

  };

  const order = {
    nombre,
    email,
    celular,
    direccion
  };

  const ordersCollection = collection(db, "orden");

  return (
    <>
      

        <div>
          <form onSubmit={handelSubmit}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                type="text"
                onChange={(e) => setNombre(e.target.value)}
              />

              <FormLabel>Celular</FormLabel>
              <Input
                id="celular"
                name="celular"
                placeholder="Celular"
                type="number"
                onChange={(e) => setCelular(e.target.value)}
              />

              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>direccion</FormLabel>
              <Input
                id="direccion"
                name="direccion"
                placeholder="direccion"
                type="direccion"
                onChange={(e) => setDireccion(e.target.value)}
              />

              <Button
                color="#ff66b2"
                className="btnComprar"
                type="submit"
                padding="20px"
                margin="20px"
              >
                Realizar Compra del articulo
              </Button>
            </FormControl>
          </form>

          <div> realizamos su id de compra {orderId}</div>
        </div>
     
    </>
  );
};

export default Form;