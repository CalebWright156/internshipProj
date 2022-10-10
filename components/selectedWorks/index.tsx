import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from '../../public/assets/3.png'
import Image2 from '../../public/assets/4.png'
import Image3 from '../../public/assets/5.png'
import { LeftSideContent, RightSideContent, ButtonStyles, ButtonContainer, LinkButtonStyles} from '../styles/SelectedWorksStyles'
import BWButton from '../Reusables/BWButton'
 

const SelectedWorks = () => {

    const [zImage3, setZImage3] = useState(false)
    const [zImage2, setZImage2] = useState(false)
    const [zImage1, setZImage1] = useState(true)

    const image3Click = () => {
        setZImage3(!zImage3)
        setZImage2(false)
        setZImage1(false)
    }

    const image2Click = () => {
        setZImage2(!zImage2)
        setZImage3(false)
        setZImage1(false)
    }

    const image1Click = () => {
        setZImage1(!zImage1)
        setZImage2(false)
        setZImage3(false)
    }

  return (
    <Box 
        sx={{
            background: 'linear-gradient(180deg, hsl(240deg 8% 5%) 0%, hsl(233deg 7% 10%) 11%, hsl(228deg 9% 15%) 22%, hsl(224deg 10% 19%) 33%, hsl(220deg 12% 24%) 44%, hsl(217deg 13% 29%) 56%, hsl(214deg 14% 33%) 67%, hsl(211deg 16% 38%) 78%, hsl(209deg 17% 43%) 89%, hsl(207deg 18% 48%) 100%)',
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
            <Box sx={{ marginTop: '5vh', paddingBottom: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'start', marginRight: '15vw'}}>

                <ButtonContainer>
                    <Box sx={{paddingRight: '1vw', paddingTop: '1.5vh'}}>
                        <Typography sx={{fontFamily: 'Oxygen Mono', fontSize: '0.7vw', opacity: zImage3 ? 1 : 0.5}}>[01]</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <ButtonStyles disableRipple={true} onClick={image3Click} sx={{opacity: zImage3 ? 1 : 0.5, fontSize: zImage3 ? '3vw' : '1vw'}}>Case study</ButtonStyles>
                        <Typography variant='body1' sx={{fontSize: '0.8vw', display: zImage3 ? 'block' : 'none', paddingTop: '1vh', paddingLeft: '1vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.</Typography>   
                    </Box>
                </ButtonContainer>

                <ButtonContainer>
                    <Box sx={{paddingRight: '1vw', paddingTop: '1.5vh'}}>
                        <Typography sx={{fontFamily: 'Oxygen Mono', fontSize: '0.7vw', opacity: zImage2 ? 1 : 0.5}}>[02]</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <ButtonStyles disableRipple={true} onClick={image2Click} sx={{opacity: zImage2 ? 1 : 0.5, fontSize: zImage2 ? '3vw' : '1vw'}}>Case study</ButtonStyles>
                        <Typography variant='body1' sx={{fontSize: '0.8vw', display: zImage2 ? 'block' : 'none', paddingTop: '1vh', paddingLeft: '1vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.</Typography>
                    </Box>
                </ButtonContainer>

                <ButtonContainer>
                    <Box sx={{paddingRight: '1vw', paddingTop: '1.5vh'}}>
                        <Typography sx={{fontFamily: 'Oxygen Mono', fontSize: '0.7vw', opacity: zImage1 ? 1 : 0.5}}>[03]</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <ButtonStyles disableRipple={true} onClick={image1Click} sx={{opacity: zImage1 ? 1 : 0.5, fontSize: zImage1 ? '3vw' : '1vw'}}>Case study</ButtonStyles>
                        <Typography variant='body1' sx={{fontSize: '0.8vw', display: zImage1 ? 'block' : 'none', paddingTop: '1vh', paddingLeft: '1vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.</Typography>
                    </Box>
                </ButtonContainer>
            </Box>
            <LinkButtonStyles>
                <BWButton text='see all designs' width='15vw' height="8vh" />
            </LinkButtonStyles>

        </LeftSideContent>

        <RightSideContent>
           <Box sx={{ position: 'relative', zIndex: zImage3 ? 5 : 1, top: '15vw', transform: 'translate(10vh, -5vw)', overflow: 'hidden', opacity: zImage3 ? 1 : 0.5}}>
                <Image src={Image3}/>
            </Box>
            <Box sx={{ position: 'relative', zIndex: zImage2 ? 5 : 2, top: '18vw', transform: 'translate(6vh, -28vw)', opacity: zImage2 ? 1 : 0.5}}>
                <Image src={Image2}/>
            </Box>
            <Box sx={{ position: 'absolute', zIndex: zImage1 ? 5: 3, transform: 'translate(2vh, -28vw)', opacity: zImage1 ? 1 : 0.5}}>
                <Image src={Image1}/>
            </Box>
        </RightSideContent>
    </Box>
    </Box>
  )
}

export default SelectedWorks