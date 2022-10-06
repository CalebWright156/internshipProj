import { Container } from '@mui/system'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import AppBar from '../components/appBar/index'

const Home: NextPage = () => {
  useEffect(() => {
    document.title = 'React Material UI - Homepage'
  }, [])

  return (
    <Container 
      maxWidth='xl'
      sx={{
        background: '#FFF'
      }}
    >
      <AppBar />
      
      {/* 
          Banner
          Header Bottom
          Hero section
          Products
          Awards section
          Footer
      */}
    </Container>
  )
}

export default Home
