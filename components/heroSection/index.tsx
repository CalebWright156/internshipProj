import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { BackgroundImage } from '../styles/HeroSectionStyles'
import BackgroundYacht from '../../public/assets/2.png'
import { Button, Typography } from '@mui/material'
import MiddleImage from './MiddleImage'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"

const HeroSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ position: 'relative', top: '-15vh'}}>
      <Box sx={{ backgroundColor: 'black', width: '100%', height: '100%'}}>
        <BackgroundImage>
          <Image src={BackgroundYacht} alt='background' layout='responsive' objectFit='cover'/>
        </BackgroundImage>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <MiddleImage />
        </Box>
      </Box>
    </Box>


  )
}
/* 
    h1 * 2
    hero section {
      background image 
      subheading
      paragraph
    }
    button


*/
export default HeroSection