import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/system'
import { MiddleImageStyles, MiddleImageText } from '../styles/HeroSectionStyles'
import SmallYacht from '../../public/assets/2.png'
import { Typography } from '@mui/material'




const MiddleImage = () => {
  return (
    <MiddleImageStyles>
      <MiddleImageText>
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px 150px'}}>
          <Box sx={{ marginBottom: '20px'}}>
              <Typography variant='subtitle1' align='center'>We can offer a complete design service to all vessels, power and sail. Whether it is conceptual design work or full naval architecture and engineering, no job is too big or too small for our team.</Typography>
          </Box>
          <Box sx={{display: 'flex', padding: '60px 50px'}}>
            <Typography variant='body1' align='right' sx={{paddingRight: '20px'}}>We believe that success is to a large part a matter of design process, and a good designer will have a design process that will produce a successful outcome whether it be a yacht, a powerboat, an aeroplane, or a ballpoint pen.</Typography>
            <Typography variant='body1' align='left'> We undertake a wide variety of craft from radio yachts, to racing yachts, offshore powerboats, to 90m motoryachts, pilotboats, kayaks, Arabian dhows, cargo barges and fishing boats. As a result we are exposed to a wide variety of conditions, design problems and novel solutions, and if we were restricted to designing only one type of craft then we would not see this rich variety of thinking.</Typography>
          </Box>
        </Box>
      </MiddleImageText>
      <Box sx={{opacity: 0.4}}>
        <Image src={SmallYacht} alt='oooh' />
      </Box>
    </MiddleImageStyles>
  )
}

/*

*/

export default MiddleImage