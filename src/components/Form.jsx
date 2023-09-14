import { useState } from "react";

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idPurchase, setIdpurchase] = useState("123456")

    const handleSubmit = (e) =>{
        e.preventDefault()
        nombre === "" ? alert("campo nombre vacio") : alert("Bienvenido, ${nombre}")  
        email=== "" ? alert("campo nombre vacio") : alert("registrado con el email, ${email}")
        
        console.log("informacion enviada")
    }

    return(
      <>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
        <input type="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">enviar</button>
      </form>
      <h3>id de tu compra: {idPurchase}</h3>
      
      </>


    )
}
export default Form


