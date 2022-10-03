import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        h1: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '84px',
            lineHeight: '84px',
            color: '#F7F7F7',
            '@media (max-width:480px)': {
                fontSize: '36px',
                lineHeight: '36px',
            }
        },
        h2: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '64px',
            lineHeight: '64px',
            color: '#F7F7F7',
            '@media (max-width:480px)': {
                fontSize: '24px',
                lineHeight: '24px'
            }
        },
        h3: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '32px',
            color: '#F7F7F7',
            '@media (max-width:480px)': {
                fontSize: '18px',
                lineHeight: '18px'
            }
        },
        // subheading
        subtitle1: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            color: '#F7F7F7',
            '@media (max-width:480px)': {
                fontSize: '16px',
                lineHeight: '20px'
            }
        },
        // paragraph
        body1: {
            fontFamily: 'Archvio, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#F7F7F7',
            '@media (max-wdith:480px)': {
                fontSize: '14px',
                lineHeight: '22px'
            }
        },
        button: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: 'auto',
            letterSpacing: '3.2px',
            color: '#F7F7F7',
            '@media (max-width:480px)': {
                fontSize: '12px',                
            }
        },
        caption: {
            fontFamily: 'Oxygen Mono, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '14px',
            letterSpacing: '10%',
            color: '#F7F7F7',
        }
    }
})