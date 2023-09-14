{/*import ItemListContainer from './components/ItemListContainer';*/}
{/*import CounterComponent from './components/CounterComponent';*/}
{/*import ChildrenComponent from './components/ChildrenComponent';*/}
{/*import TaskFilter from './components/TaskFilter';*/}
{/*import React from 'react';*/}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Home from './components/Home';
import About from './components/About';
import Cart from './Cart';
import ProductDetail from './components/ProductDetail'
import  Form from './components/Form';

const App = () => {
{/*const comision ="Coderhouse"*/}  

const productos = [
  { id: 1, nombre: "Producto A", descripcion: "Descripcion de Producto A", stock: 5, categoria: "A"},
  { id: 2, nombre: "Producto B", descripcion: "Descripcion de Producto B", stock: 10, categoria: "A"},
  { id: 3, nombre: "Producto C", descripcion: "Descripcion de Producto C", stock: 20, categoria: "B"},
  { id: 4, nombre: "Producto D", descripcion: "Descripcion de Producto D", stock: 15, categoria: "B"},
  { id: 5, nombre: "Producto E", descripcion: "Descripcion de Producto E", stock: 25, categoria: "C"},
  { id: 6, nombre: "Producto F", descripcion: "Descripcion de Producto F", stock: 30, categoria: "C"},
 
]
  return (
    <BrowserRouter>
 {/*<ItemListContainer />*/}
    <NavBar  productos={productos} />
     {/* <ItemDetailContainer /> */}

  


    <Routes>
    
      <Route exact path= '/' element={<ItemListContainer  productos={productos} />}  />
      <Route exact path= '/category/:categoryId' element={<ItemListContainer productos={productos} />}  />
       <Route exact path= '/about' element={<About />}  />
  <Route exact path= '/cart' element={<Cart />}  />

      <Route  path= '/product/:id' element={<ProductDetail />}  />
      <Route exact path='/item/:id' element={<ItemDetailContainer productos={productos} />}  />
   


    </Routes>
     
    
       {/*greeting="Bienvenido a la tienda de indumentaria St.Marie" />
      <ItemListContainer />
    {/*}  <CounterComponent />
      <ChildrenComponent title="Titulo del Componente">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorum. Cupiditate quam asperiores maxime fugiat minima provident eius saepe quasi.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta maiores, culpa harum nemo ab quod quibusdam id laborum nulla?</p>
      </ChildrenComponent>
  
    <div>
      <h1>Aplicación de Tareas</h1>
      <TaskFilter />
  </div>*/}

       </BrowserRouter> 

   

  );
};

export default App;