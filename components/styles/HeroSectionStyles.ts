import { Hidden } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

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