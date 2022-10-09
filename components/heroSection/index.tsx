import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { BackgroundImage, LeftTitleStyles, RightTitleStyles, MeshStyles} from '../styles/HeroSectionStyles'
import BackgroundYacht from '../../public/assets/2.png'
import { Button, Typography } from '@mui/material'
import MiddleImage from './MiddleImage'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import Mesh from '../../public/assets/Mesh.svg'

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
      <LeftTitleStyles>
        <Typography variant='h1' sx={{fontSize: '4vw'}}>we are an <br /> Award-winning</Typography>
      </LeftTitleStyles>
      <RightTitleStyles>
        <Typography variant='h1' sx={{fontSize: '4vw'}} align='right'>Boutique Design <br /> Studio</Typography>
      </RightTitleStyles>
      <MeshStyles>
            <Image src={Mesh} layout='responsive' />
      </MeshStyles>
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