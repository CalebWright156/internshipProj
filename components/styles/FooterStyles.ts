import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const FooterContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 3,
    background: 'transparent',
    marginBottom: '-1vh',
}))

export const FooterContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column'
}))

export const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '-1vh',
    zIndex: 2,

}))

export const CaptionStyles = styled(Typography)(() => ({
    fontSize: '0.7vw'
}))