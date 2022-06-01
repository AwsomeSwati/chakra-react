import React from 'react'
import style from "./nav.module.css"
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    isOpen,
    onClose,
    onOpen,
    useColorModeValue,
  
   
} from "@chakra-ui/react"


const Button2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Menu isOpen={isOpen}>
    <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
    >
        Inspiration 
    </MenuButton>
    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>Explore Design Work</MenuItem>
        <MenuItem>New and Net worthy </MenuItem>
      
    </MenuList>
</Menu>

  )
}

export default Button2