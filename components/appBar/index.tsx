import React from 'react'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import AppBarDesktop from './appBarDesktop'
import AppBarMobile from './appBarMobile'

const AppBar = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
        {matches ? <AppBarMobile /> : <AppBarDesktop />}
    </>
  )
}

export default AppBar