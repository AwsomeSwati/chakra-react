import { styled } from '@chakra-ui/react'
import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import style from "./nav.module.css"
import { Button, ButtonGroup ,Stack } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <div className={style.main}>
    
        <div className={style.logo}>
          <h2>LOGO</h2>        
      </div>
    <div>  <Button1 /></div> 
    <div>   <Button2 /></div> 
    <div>   <Button3 /></div> 
    
    <div >
  <div >
{/* <Stack direction='row' spacing={4} align='center'> */}
<div className={style.second}>
<Button colorScheme='teal' variant='link'>
Sign In 
</Button>
<Button colorScheme='pink' variant='solid'>
Sign-Up  
</Button>

</div>
</div>
</div>    
</div>
    </div>
  )
}

export default Navbar