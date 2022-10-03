import { AppBar, Toolbar, Typography } from '@mui/material'
import { flexbox, styled } from '@mui/system'
import Image from 'next/image'
import Logo from '../../public/assets/Logo.svg'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: 'space-around',
  alignItems: 'center'

});

const Navbar = () => {
  return (
    <AppBar position='static'>
        <StyledToolbar>
            <Typography variant='button'>Expertise</Typography>
            <Typography variant='button'>Portfolio</Typography>
            <Image src={Logo} alt='logo' width={329} height={18} />
            <Typography variant='button'>Awards</Typography>
            <Typography variant='button'>Contact Us</Typography>
        </StyledToolbar>
    </AppBar>

  )
}

export default Navbar