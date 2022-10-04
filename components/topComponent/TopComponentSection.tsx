import { Box, display, styled } from '@mui/system'
import yachtShot from '../../public/assets/1.png'
import React from 'react'
import Image from 'next/image';
import BottomSection from './BottomSection'

const TopStyled = styled(Box)({
  position: 'absolute',
  background: `linear-gradient(-180deg, #79858C, #79858C)`,
  width: '110em',
  height: '1080px',
  backgroundBlendMode: 'hue, normal',
})


const TopComponent = () => {
  return (
    <>
      <TopStyled>
        <Box>
          <Image src={yachtShot} alt='yacht' layout='responsive'/>
        </Box>
        <BottomSection />
      </TopStyled>
    </>
  )
}

export default TopComponent