import { ListItemText, Typography } from '@mui/material'
import React from 'react'
import { AppBarContainer, HeaderList, ListTextStyles } from '../styles/AppBar/AppBarStyles'
import Logo from '../../public/assets/Logo.svg'
import Image from 'next/image'
import { AppBarProps } from './appBarTypes'

const AppBarDesktop: React.FC = () => {
  return (
   <AppBarContainer>
        <HeaderList type='row' sx={{}}>
            <ListTextStyles primary='expertise' />
            <ListTextStyles primary='Portfolio' />
            <Image src={Logo} alt='logo' />
            <ListTextStyles primary='awards' />
            <ListTextStyles primary='contact us' />
        </HeaderList>
   </AppBarContainer>
  )
}

export default AppBarDesktop