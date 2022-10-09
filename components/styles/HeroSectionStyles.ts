import { Hidden, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

// Image Styles
export const BackgroundImage = styled(Box)(() => ({
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
    width: '100%',
    opacity: 0.2,
}))

export const MiddleImageStyles = styled(Box)(() => ({
    zIndex: 1,
    width: '60%',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,0)',
}))

export const MiddleImageText = styled(Box)(() => ({
    position: 'absolute',
    zIndex: 2,
    width: '90%',
    height: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}))

// Button positioning
export const ButtonPositions = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '55%',
    left: '100%',
    zIndex: 3,
    transform: 'translate(-50%, -50%)',
}))



// Subheading stylings
export const SubHeadingContainer = styled(Box)(() => ({
    padding: '0vh 1vh',
    paddingBottom: '1vh',
    width: '90%'
}))

export const SubHeadingStyles = styled(Typography)(({ theme }) => ({
    fontSize: '1.5vw'
}))


export const BodyContainer = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    width: '80%'
}))

