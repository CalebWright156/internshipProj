import { styled } from '@mui/material/styles'
import { Box, textAlign } from '@mui/system'

export const ButtonStyled = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '12vw',
    borderRadius: '50%',
    paddingTop: '1.5vh',
    paddingBottom: '1vh',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        paddingTop: '1vh',
        width: '13vw',
        paddingBottom: '0.5vh'
    },
    '&:hover': {
        curser: 'pointer',
        color: 'white'
    }
}))