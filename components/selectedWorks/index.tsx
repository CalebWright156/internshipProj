import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from '../../public/assets/3.png'
import Image2 from '../../public/assets/4.png'
import Image3 from '../../public/assets/5.png'
import { LeftSideContent, RightSideContent} from '../styles/SelectedWorksStyles'
import BWButton from '../Reusables/BWButton'
 

const SelectedWorks = () => {
    const [newZindex, setNewZindex] = useState(false)

    const clickHandle = () => {
        setNewZindex(true)
    }

  return (
    <Box 
        sx={{
            background: 'linear-gradient(180deg, rgba(14,18,25,1) 25%, rgba(67,65,73,0.5074404761904762) 100%)',
            width: '100%',
            marginTop: '-15vh',
            zIndex: 1,
        }}
    >
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
        <LeftSideContent >
            <Box>
                <Typography variant='h1' sx={{ fontSize: '5vw', lineHeight: '100%'}}>SELECTED <br /> WORKS</Typography>
            </Box>
            <Box sx={{ paddingTop: '10vh', paddingBottom: '10vh'}}>
                <Button onClick={clickHandle}>Cycle Through Image</Button>
            </Box>
            <BWButton text='see all designs' />
        </LeftSideContent>

        <RightSideContent>
            {newZindex ? (<Box sx={{ position: 'relative', zIndex: 5, top: '15vw', transform: 'translate(10vh, -5vw)', overflow: 'hidden'}}>
                <Image src={Image3}/>
            </Box>) : (<Box sx={{ position: 'relative', zIndex: 1, top: '15vw', transform: 'translate(10vh, -5vw)', overflow: 'hidden'}}>
                <Image src={Image3}/>
            </Box>)}
            <Box sx={{ position: 'relative', zIndex: 2, top: '18vw', transform: 'translate(6vh, -28vw)'}}>
                <Image src={Image2}/>
            </Box>
            <Box sx={{ position: 'absolute', zIndex: 3, transform: 'translate(2vh, -28vw)'}}>
                <Image src={Image1}/>
            </Box>
        </RightSideContent>
    </Box>
    </Box>
  )
}

export default SelectedWorks