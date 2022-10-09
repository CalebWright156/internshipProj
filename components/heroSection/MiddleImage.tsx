import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/system'
import { MiddleImageStyles, MiddleImageText, ButtonPositions, SubHeadingStyles, SubHeadingContainer, BodyContainer} from '../styles/HeroSectionStyles'
import SmallYacht from '../../public/assets/2.png'
import { Typography } from '@mui/material'
import BWButton from '../Reusables/BWButton'




const MiddleImage = () => {
  return (
    <MiddleImageStyles>
      <MiddleImageText>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%'}}>
          <SubHeadingContainer>
              <SubHeadingStyles variant='subtitle1' align='center'>We can offer a complete design service to all vessels, power and sail. Whether it is conceptual design work or full naval architecture and engineering, no job is too big or too small for our team.</SubHeadingStyles>
          </SubHeadingContainer>
          <BodyContainer>
              <Box sx={{marginLeft: '5vw'}}>
                  <Typography align='right' variant='body1' sx={{ fontSize: '0.7vw', paddingRight: '1vw'}}>We believe that success is to a large part a matter of design process, and a good designer will have a design process that will produce a successful outcome whether it be a yacht, a powerboat, an aeroplane, or a ballpoint pen.</Typography>
              </Box>
              <Box>
                  <Typography variant='body1' sx={{ fontSize: '1vw'}}>We undertake a wide variety of craft from radio yachts, to racing yachts, offshore powerboats, to 90m motoryachts, pilotboats, kayaks, Arabian dhows, cargo barges and fishing boats. As a result we are exposed to a wide variety of conditions, design problems and novel solutions, and if we were restricted to designing only one type of craft then we would not see this rich variety of thinking.</Typography>
              </Box>
          </BodyContainer>
        </Box>
      </MiddleImageText>
      <Box sx={{backgroundColor: 'black'}}>
        <Image src={SmallYacht} alt='oooh' />
      </Box>
      <ButtonPositions>
        <BWButton text='SEE EXPERTISE'/>
      </ButtonPositions>
    </MiddleImageStyles>
  )
}

/*

*/

export default MiddleImage