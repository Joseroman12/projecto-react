import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ productos })=> {
    const {id} = useParams ()
    const filteredProducts = productos.filter((productos) => productos.id == id)
    

   



 



    return (
        <div>
              {filteredProducts.map((p) => {
           {/* {productos.map((p) =>*/}
                return (
                    <div> 
                        <Center p='1rem'  key={p.id}>

                    <Card>  
                        <CardHeader>
                            <Heading gsize='md'>{p.nombre}</Heading>
                        </CardHeader>
                        <CardBody>
                            <text>{p.description}</text>
                            <text>{p.category}</text>
                        </CardBody>
                        <CardFooter>
                            <ItemCount />
                        </CardFooter>
            
                    </Card>     

                    </Center>     
                    </div>


                )
            })}
        </div>
    )

 }
export default React.memo(ItemDetail);