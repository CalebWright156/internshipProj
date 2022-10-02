import type { NextPage } from 'next'
import { ThemeProvider, Typography } from '@mui/material'
import { theme } from  '../components/themes/MainTheme'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h1'>No love </Typography>
      </div>
    </ThemeProvider>
  )
}

export default Home
