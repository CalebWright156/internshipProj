import { Box, Container } from '@mui/system'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import AppBar from '../components/appBar/index'
import Banner from '../components/banner/index'
import HeroSection from '../components/heroSection/index'
import Image from 'next/image';
import Yacht from '../public/assets/1.png'
import SelectedWorks from '../components/selectedWorks/index' 
import AwardSection from '../components/awardSection/index'
import Footer from '../components/footer/index'
import AppDrawer from '../components/drawer/index'

const Home: NextPage = () => {
  useEffect(() => {
    document.title = 'Front End Test'
  }, [])

  return (
    <Container 
      maxWidth={false}
      disableGutters
      sx={{
        background: '#FFF'
      }}
    >
        <Box sx={{position: 'relative', top: '-7vh'}}>
        <Box sx={{ position: 'relative', zIndex: 9, top: '9vh'}}>
          <AppBar />
        </Box>
          <Image src={Yacht} alt='yacht' layout='responsive'/>
          <Box sx={{ position: 'relative', top: '-8vh', zIndex: 2}}>
            <Banner />  
          </Box>
        </Box>
      <HeroSection />
      <SelectedWorks />
      <AwardSection />
      <Footer />
    </Container>
  )
}

export default Home
