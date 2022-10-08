import { IconButton } from '@mui/material'
import React from 'react'
import { AppBarContainer } from '../styles/AppBarStyles'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Logo from '../../public/assets/Logo.svg'
import Image from 'next/image'
import { Box } from '@mui/system'
import { AppBarProps } from '../../types/AppTypes'



const AppBarMobile:React.FC<AppBarProps> = ({ matches }) => {
  return (
    <AppBarContainer>
      <IconButton>
        <MenuIcon sx={{ color: 'black' }}/>
      </IconButton>
      <Box sx={{flex: 2, display: 'flex', justifyContent: 'center'}}>
        <Image src={Logo} alt='logo'/>
      </Box>
    </AppBarContainer>
  )
}

export default AppBarMobile