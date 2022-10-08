import React from 'react'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import AppBarDesktop from './appBarDesktop'
import AppBarMobile from './appBarMobile'
import { Box } from '@mui/system';

const AppBar = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
        {matches ? (<AppBarMobile matches={matches} />) : (<AppBarDesktop matches={matches} />)}
    </>
  )
}

export default AppBar