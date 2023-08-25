import React from "react"
import {
    
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        Flex, Box, Spacer, Img

      } from '@chakra-ui/react'
      import CartWidget from "./CartWidget"

      


const NavBar = () => {
    return (
        <div>

        
           <Flex>
             <Box p='4'>
                 <h3>Indumentaria St.Marie</h3>
             </Box>
             <Spacer />
             <Box p='4'>
                   
            <Menu>
                <MenuButton>
                 Categorias
                </MenuButton>
                <MenuList>
                <MenuItem>Categoria A</MenuItem>
                <MenuItem>Cayegoria B</MenuItem>
                <MenuItem>Cayegoria C</MenuItem>
    
                </MenuList>
            </Menu>
             </Box>
             <Spacer />
             <Box p='4' >
                <CartWidget />
             </Box>
           </Flex>

           <div className="navbar"> 
      <h1>Informacion de mis articulos</h1>
      <h3>jose roman</h3>


    </div>


   

    
        </div>
    )
    
}
export default NavBar