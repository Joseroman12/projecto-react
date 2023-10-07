import React from 'react'
import { Spinner } from '@chakra-ui/react'

const loader = () => {
  return (
    <div>
        <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='pink.500'
  size='xl'
/>
    </div>
  )
}

export default loader