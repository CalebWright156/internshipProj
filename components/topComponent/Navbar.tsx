import React from 'react'
import { Box, display, styled } from '@mui/system'
import yachtShot from '../../public/assets/1.png'
import Image from 'next/image';
import { Typography } from '@mui/material';
import Logo from '../../public/assets/Logo.svg'

const NavStyled = styled(Box)({
    position: 'absolute',
    width: '110em',
    height: '120px',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '53px 0px',
  })



const Navbar = () => {
  return (
    <>
    <NavStyled>
        <Typography variant='button' sx={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>EXPERTISE</Typography>
        <Typography variant='button'>PORTFOLIO</Typography>
        <Box sx={{width: {lg: '300px', md: '230px', sm: '170px', xs: '100px'}}}>
            <Image src={Logo} alt='logo' layout='responsive'/>  
        </Box>
        {/* add motion for these two */}
        <Typography variant='button'>AWARDS</Typography> 
        <Typography variant='button'>CONTACT US</Typography>
    </NavStyled>
    </>
  )
}

export default Navbar