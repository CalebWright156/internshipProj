import { createTheme } from '@mui/material'


export const theme = createTheme({
    typography: {
        h1: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '84px',
            color: '#F7F7F7',

        },
        h2: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '64px',
            lineHeight: '64px',
            color: '#F7F7F7',
  
        },
        h3: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '32px',
            color: '#F7F7F7',

        },
        // subheading
        subtitle1: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            color: '#F7F7F7',

        },
        // paragraph
        body1: {
            fontFamily: 'Archvio, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: '#F7F7F7',

        },
        button: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: 'auto',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#F7F7F7',
            cursor: 'pointer'
        },
        caption: {
            fontFamily: 'Oxygen Mono, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            letterSpacing: '10%',
            color: '#F7F7F7',
            textTransform: 'uppercase',
        }
    }
})