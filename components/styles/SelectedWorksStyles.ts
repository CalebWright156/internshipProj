import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const LeftSideContent = styled(Box)(() => ({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '4vw',
}))

export const RightSideContent = styled(Box)(() => ({
    width: '50%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative',
}))

export const ButtonStyles = styled(Button)(() => ({
    color: 'white',

}))

export const ButtonContainer = styled(Box)(() => ({
    display: 'flex',
    padding: '2vh 1vw'
}))

export const LinkButtonStyles = styled(Box)(() => ({
    width: '300px'
}))