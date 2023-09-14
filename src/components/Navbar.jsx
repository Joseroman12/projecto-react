import React from "react"
import {
    
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        Flex, Box, Spacer, Image

      } from '@chakra-ui/react'
      import CartWidget from "./CartWidghet"
import { Link } from "react-router-dom"

const NavBar = ({productos}) => {
    return (
    <div>

        <Flex >
        <Box p='4'>

            <Link to={'/'}>
            <h3>Indumentaria St.Marie</h3>
            </Link>

        </Box>
        <Spacer />
        <Box p='4'>

        <Menu>
            <MenuButton>
            Categorias
            </MenuButton>
            <MenuList>
        {
            productos.map((p) =>{
                return(
                <> 
                    <MenuItem key={p.id} >
                        <Link to={'/item/'+p.id}>
                        <h3>Categoria {p.categoria}</h3>
                        </Link>
                    </MenuItem>
                </>
                )
            })
        }
        </MenuList>
        </Menu>
    </Box>
    <Spacer />
    <Box p='4' >
        <Link to={'/Cart'}>
            <CartWidget />
        </Link>
    </Box>
    </Flex>
    </div >
    )
}
export default NavBar