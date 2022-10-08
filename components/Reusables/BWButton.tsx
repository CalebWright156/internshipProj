import React from 'react'
import { ButtonStyled } from '../styles/ButtonStyles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Arrow from '../../public/assets/Arrow.svg'
import Image from 'next/image';


const BWButton = ({ text }) => {
  return (
    <ButtonStyled>
        <Typography variant='button' sx={{paddingBottom: '5px'}}>{text}</Typography>
        <Image src={Arrow} />
    </ButtonStyled>

  )
}

export default BWButton