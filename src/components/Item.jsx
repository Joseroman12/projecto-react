import React from "react";
import {Card, Image, Stack, Text, CardBody,Divider, Button, ButtonGroup, CardFooter, Heading } from "@chakra-ui/react";

const Item = ({ product }) => {
  return (
        <div>
     <Card maxW='sm'>
        <CardBody>
            <Image
                src={product.image}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{product.title}</Heading>
            <Text>
            {product.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
            $ {product.price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                Detalle
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card> 
    
    </div>
  );
};

export default Item;
