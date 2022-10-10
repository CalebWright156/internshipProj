import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { AwardListStyles } from '../styles/AwardSectionStyles'
import { AwardProps } from '../../types/AppTypes'


const AwardList:React.FC<AwardProps> = ({ number, award, type}) => {
  return (
    <AwardListStyles>
        <Box sx={{ display: 'flex'}}>
            <Typography variant='caption' sx={{ color: 'black', paddingRight: '0.5vw', fontSize: '0.8vw'}}>{number}</Typography>
            <Typography variant='h2' sx={{color: 'black', fontSize: '2vw'}}>{award}</Typography>
        </Box>
        <Box>
            <Typography variant='body1' sx={{color: 'black', fontSize: '0.7vw'}}>{type}</Typography>
        </Box>
    </AwardListStyles>  

    )
}

export default AwardList