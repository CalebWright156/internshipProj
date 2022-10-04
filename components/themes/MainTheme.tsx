import { createTheme } from '@mui/material'
import { responsiveFontSizes } from './ResponsiveFontSizes'

const breakpoints = {
    values: {
        xs: 0,
        sm: 480, // Phone
        md: 768, // Tablet/Laptop
        lg: 1024, // Desktop
        xl: 1200
    }
}

export const theme = createTheme({
    breakpoints,
    typography: {
        h1: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '84px',
            lineHeight: '84px',
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
            fontSize: '20px',
            lineHeight: '28px',
            color: '#F7F7F7',

        },
        // paragraph
        body1: {
            fontFamily: 'Archvio, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#F7F7F7',

        },
        button: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: 'auto',
            letterSpacing: '0.2em',
            color: '#F7F7F7',
            ...responsiveFontSizes({ xs:6, sm: 12, md: 14, lg: 16})

        },
        caption: {
            fontFamily: 'Oxygen Mono, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '14px',
            letterSpacing: '10%',
            color: '#F7F7F7',
            textTransform: 'uppercase'
        }
    }
})