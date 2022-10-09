import { Hidden, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

// Image Styles
export const BackgroundImage = styled(Box)(() => ({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    opacity: 0.2,
}))

export const MiddleImageStyles = styled(Box)(() => ({
    width: '60%',
    position: 'relative',
    top: '20%',
    left: '20%',
    transform: 'translate(-33%, -135%)',
    marginBottom: '-32%',
    zIndex: 3,
}))

export const MiddleImageText = styled(Box)(() => ({
    position: 'absolute',
    zIndex: 1,
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
    zIndex: 1,
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

// h1 stylings

export const LeftTitleStyles = styled(Box)(() => ({
    textTransform: 'uppercase',
    position: 'absolute',
    zIndex: 3,
    top: '5%',
    marginLeft: '2vw'
}))

export const RightTitleStyles = styled(Box)(() => ({
    textTransform: 'uppercase',
    position: 'absolute',
    zIndex: 3,
    bottom: '10%',
    width: '40%',
    left: '56%'
}))

export const MeshStyles = styled(Box)(() => ({
    position: 'absolute',
    top: '2%',
    left: '0%',
    width: '99vw',
    zIndex: 2
}))