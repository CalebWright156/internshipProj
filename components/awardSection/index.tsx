import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { AwardSectionContainer, LeftSideStyles, RightSideStyles} from '../styles/AwardSectionStyles'
import AwardList from './AwardList' 
import { awards } from './awardData'
import Image from 'next/image'
import mesh2 from '../../public/assets/Mesh2.svg'


const AwardSection = () => {
  return (
    <AwardSectionContainer>
        <LeftSideStyles sx={{ paddingLeft: '3vw', paddingTop: '5vh'}}>
            <Typography variant='h1' sx={{ color: 'black', fontSize: '3.5vw'}}>Award-Winning Designs</Typography>
            <Box sx={{position: 'relative', zIndex: 1, top: '50vh', left: '-25vw', width: '70vw', marginBottom: '40vh'}}>
                <Image src={mesh2} />
            </Box>
        </LeftSideStyles>
        <RightSideStyles>
            {awards.map((project, projectIndex) => (
                <AwardList 
                    key={projectIndex}
                    number={project.number}
                    award={project.award}
                    type={project.type}
                />
            ))}
        </RightSideStyles>
    </AwardSectionContainer>
  )
}

/* 
    container
    left side
    h1
    svg
    right side
    container with list items with border on the top and bottom
    each item in the list in a box with borders on the top and bott
*/

export default AwardSection