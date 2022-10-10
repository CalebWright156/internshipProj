import React, { useState } from 'react'
import { ButtonStyled, ButtonText } from '../styles/ButtonStyles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Arrow from '../../public/assets/Arrow.svg'
import Image from 'next/image';
import { ButtonProps } from '../../types/AppTypes'
import { Box } from '@mui/system';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import ArrowIcon from '../icons/ArrowIcon'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';



const BWButton:React.FC<ButtonProps>  = ({ text, width, height }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const white = 'white'
  
  return (
    <ButtonStyled sx={{width: width, height: height, ':hover .child': {color: '#2E3941', fill: '#2E3941', stroke: '#2E3941', cursor: 'pointer'}, ':hover': { cursor: 'pointer', backgroundColor: '#D8D8D8'}}}>
        <ButtonText variant='button' className='child'>{text}</ButtonText>
          <svg width="6vw" height="0.7em" viewBox="0 0 63 18" fill="white" xmlns="http://www.w3.org/2000/svg" className='child'>
          <line x1="1" y1="9" x2="59" y2="9" stroke='white' stroke-width="2" stroke-linecap="round" className='child'/>
          <path d="M53 1L61 9L53 17" stroke='white' stroke-width="2" stroke-linecap="round" className='child'/>
          </svg>
    </ButtonStyled>

  )
}

export default BWButton