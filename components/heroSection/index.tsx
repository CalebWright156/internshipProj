import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { BackgroundImage } from '../styles/HeroSectionStyles'
import BackgroundYacht from '../../public/assets/2.png'
import { Button, Typography } from '@mui/material'
import MiddleImage from './MiddleImage'
import BWButton from '../Reusables/BWButton'

const HeroSection = () => {
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
      <BWButton />
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