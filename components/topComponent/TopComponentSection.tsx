import { Box, display, styled } from '@mui/system'
import yachtShot from '../../public/assets/1.png'
import React from 'react'
import Image from 'next/image';
import { Typography } from '@mui/material';
import Logo from '../../public/assets/Logo.svg'

const TopStyled = styled(Box)({
  position: 'absolute',
  background: `linear-gradient(0deg, #79858C, #79858C)`,
  width: 'auto',
  height: '1080px',
  backgroundBlendMode: 'hue, normal'
})

const NavStyled = styled(Box)({
  position: 'absolute',
  height: '120px',
  width: '100%',
  zIndex: '2',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '53px 0px'
})

const BottomStyled = styled(Box)({
  position: 'absolute',
  height: '220px',
  background: 'linear-gradient(180deg, rgba(14, 18, 25, 0) 0%, #0E1219 36.72%)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '990px'
})

const TopComponent = () => {
  return (
    <>
    {/* Top Style */}
      <TopStyled>
        <NavStyled>
          <Typography variant='button' sx={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>EXPERTISE</Typography>
          <Typography variant='button'>PORTFOLIO</Typography>
          <Box sx={{paddingRight: '795px'}}>
            <Image src={Logo} alt='logo' height={17.95} width={329.02}/>  
          </Box>
        </NavStyled>
        <Image src={yachtShot} alt='yacht' />
        {/* Bottom Style */}
        <BottomStyled>
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
        </BottomStyled>
      </TopStyled>
    </>
  )
}

export default TopComponent