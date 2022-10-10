import React from 'react'
import { Box } from '@mui/system'
import { FooterContainer, FooterContent, ImageContainer, CaptionStyles } from '../styles/FooterStyles'
import { Typography } from '@mui/material'
import BWButton from '../Reusables/BWButton'
import Image from 'next/image'
import footerPic from '../../public/assets/6.png'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"

const Footer = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))


  return (
    <Box sx={{position: 'relative'}}>
    <FooterContainer>
        <FooterContent sx={{ paddingLeft: '4vw', paddingTop: '4vh'}}>
            <CaptionStyles variant='caption'>info@bakewell-white.com</CaptionStyles>
            <CaptionStyles variant='caption'>+64 9 480 6800</CaptionStyles>
            <CaptionStyles variant='caption'>EST. 1994</CaptionStyles>
        </FooterContent>
        <FooterContent sx={{alignItems: 'center', marginRight: '3vw', paddingTop: '3vh'}}>
            <Typography variant='h1' sx={{ fontSize: '4vw'}}>Get in touch</Typography>
            <BWButton width='12vw' height='7vh' text='Contact us'/>
        </FooterContent>
        <FooterContent sx={{ paddingRight: '4vw', paddingTop: '4vh'}}>
            <CaptionStyles variant='caption'>Privacy</CaptionStyles>
            <CaptionStyles variant='caption'>Facebook</CaptionStyles>
            <CaptionStyles variant='caption'>Linkedin</CaptionStyles>
        </FooterContent>
    </FooterContainer>
    <ImageContainer>
      <Image src={footerPic} />
    </ImageContainer>
    </Box>

  )
}

export default Footer