import { Box, display, styled } from '@mui/system'
import yachtShot from '../../public/assets/1.png'
import React from 'react'
import Image from 'next/image';
import { Typography } from '@mui/material';
import Logo from '../../public/assets/Logo.svg'
import Navbar from './Navbar'

const BottomSectionStyled = styled(Box)({
    position: 'absolute',
    height: '220px',
    background: 'linear-gradient(180deg, rgba(14, 18, 25, 0) 0%, #0E1219 36.72%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '990px'
  })

const BottomSection = () => {
  return (
    <BottomSectionStyled>
    <Box sx={{width: '100%', paddingLeft: '60px', paddingRight: '60px'}}>
        <Image src={Logo} alt='logo' layout='responsive'/>
    </Box>
    <Box sx={{marginTop:'30px', marginBottom: '41px', width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
            <Typography variant='caption'>+64 9 480 6800 info@bakewell-white.com</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', marginLeft: '400px', marginRight: '400px'}}>
            <Typography variant='caption'>Bakewell-white Yacht Design LTD Pace with grace / © 2022</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Typography variant='caption'>Est. 1994 auckland / new zealand</Typography>
        </Box>
    </Box>
  </BottomSectionStyled>
  )
}

export default BottomSection