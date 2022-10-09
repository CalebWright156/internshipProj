import React from 'react'
import { ButtonStyled } from '../styles/ButtonStyles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Arrow from '../../public/assets/Arrow.svg'
import Image from 'next/image';
import { ButtonProps } from '../../types/AppTypes'
import { Box } from '@mui/system';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"


const BWButton:React.FC<ButtonProps>  = ({ text }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ButtonStyled>
        <Typography variant='button' sx={{paddingBottom: '0.5vh', fontSize: '0.7vw'}}>{text}</Typography>
        <Box sx={{ width: '4vw' }}>
          <Image src={Arrow} layout='responsive' />
        </Box>
    </ButtonStyled>

  )
}

export default BWButton