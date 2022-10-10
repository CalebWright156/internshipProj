import { IconButton, Drawer, List, ListItemButton, ListItemText, Divider } from '@mui/material'
import React, { useState } from 'react'
import { AppBarContainer } from '../styles/AppBarStyles'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../public/assets/Logo.svg'
import Image from 'next/image'
import { Box } from '@mui/system'
import { AppBarProps } from '../../types/AppTypes'
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from '../styles/AppBarStyles';


const AppBarMobile:React.FC<AppBarProps> = ({ matches }) => {

  const [openDrawer, setOpenDrawer] = useState(false)


  return (
    <>
        <AppBarContainer>
      <IconButton disableFocusRipple={true} onClick={() => { setOpenDrawer(true)}}>
        <MenuIcon sx={{ color: 'black' }}/>
      </IconButton>
      <Box sx={{flex: 2, display: 'flex', justifyContent: 'center'}}>
        <Image src={Logo} alt='logo'/>
      </Box>
    </AppBarContainer>

    <Drawer open={openDrawer}>
    <List>
      <ListItemButton>
        <ListItemText>Expertise</ListItemText>
        <DrawerCloseButton onClick={() => {setOpenDrawer(false)}} disableFocusRipple={true} sx={{ paddingLeft: '20vw'}}>
          <CloseIcon />
        </DrawerCloseButton>
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText>Portfolio</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemText>Awards</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemText>Conact us</ListItemText>
      </ListItemButton>
    </List>
    </Drawer>
    </>

  )
}

export default AppBarMobile