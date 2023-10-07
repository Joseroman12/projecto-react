
import ItemDetailCotainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import Cart from './components/Cart'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'

function App() {


  return (
    <>



      <BrowserRouter>

        <CartProvider>
        <NavBar/>

          <Routes>

            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailCotainer />} />
            <Route exact path='/cart' element={<Cart />} />

          </Routes>
          
        </CartProvider>

      </BrowserRouter>

    </>
  )
}

export default App