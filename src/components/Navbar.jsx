import React from 'react';
import { Link } from 'react-router-dom';
import '../components/estilos/navbar.css'
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/">indumentarias st.marie</Link>
      </div>
      <ul className='links'>
        <li>
          <Menu>
            <MenuButton className='link-dropdown'>Productos</MenuButton>
            <MenuList>
              <MenuItem color="black">
                <Link to={`/categoria/${"babuchas"}`}>babuchas</Link>
              </MenuItem>
              
              <MenuItem color="black">
                <Link to={`/categoria/${"pantalon"}`}>pantalon</Link>
              </MenuItem>
              <MenuItem color="black">
                <Link to={`/categoria/${"buzos"}`}>buzos</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
