import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'


export const BannerContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(180deg, rgba(14, 18, 25, 0) 0%, #0E1219 36.72%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '0xp 0px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: '2vh'
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        fontSize: '8px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '4px',
    }
}))

export const BannerFooter = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2em 2em',
}))
