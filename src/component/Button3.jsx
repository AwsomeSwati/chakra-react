import React from 'react'
import style from "./nav.module.css"
import { Button, ButtonGroup , Stack, useDisclosure, } from '@chakra-ui/react'

const Button3 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>

<Stack direction='row' spacing={4} align='center'>
 
  <Button colorScheme='teal' variant='ghost'>
    Learn Design
  </Button>
  <Button colorScheme='teal' variant='ghost' style={{borderRadius:"0px"}}>
   Hire Designers
  </Button>
  
</Stack>
    
    </div>
  )
}

export default Button3