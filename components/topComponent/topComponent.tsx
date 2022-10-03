import React from 'react'
import Image from 'next/image'
import yachtPhoto from '../../public/assets/1.png'
import { Box } from '@mui/system'

const TopComponent = () => {
  return (
    <>
    <Box>
      <Image src={yachtPhoto} alt='yachPhoto' />
    </Box>
    </>
  )
}

export default TopComponent