import { Card, Image, Stack, Text, Divider, Heading, ButtonGroup, Button, CardBody,  CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Item = ({ productos }) => {
  return (
    <>
      {productos.map((p) => (
        
        <Card key={p.id} maxW='sm'>
          <CardBody>
            <Image 
              src={p.imagen}
              alt='imagen'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{p.nombre}</Heading>
              <Text>{p.description}</Text>
              <Text color='#ff66b2' fontSize='35px' display='flex' justifyContent='center'>
                ${p.precio}
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' color=' #ff66b2' width='350px'display='flex' >
                <Link to={`/item/${p.id}`}> lick aqui para ver los detalles</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Item;
