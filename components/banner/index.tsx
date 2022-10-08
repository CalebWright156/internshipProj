import React from 'react'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { BannerContainer, BannerContent, BannerDescription, BannerFooter } from '../styles/BannerStyles'
import Logo from '../../public/assets/Logo.svg'
import Image from 'next/image';
import { Box } from '@mui/system';


const Banner = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <BannerContainer>
        <BannerContent>
          <Box sx={{ alignSelf: 'center', width: '100%' }}>
            <Image src={Logo} alt='logo' layout='responsive'/>
          </Box>
        </BannerContent>
        <BannerFooter>
          <BannerDescription variant='caption' sx={{paddingRight: '12em'}}>+64 9 480 6800 info@bakewell-white.com</BannerDescription>
          <BannerDescription variant='caption'>Bakewell-white Yacht Design LTD Pace with grace / © 2022</BannerDescription>
          <BannerDescription variant='caption' sx={{paddingLeft: '12em'}}>Est. 1994 auckland / new zealand
        </BannerDescription>
        </BannerFooter>
    </BannerContainer>
  )
}

export default Banner