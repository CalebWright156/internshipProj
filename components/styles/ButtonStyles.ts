import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const ButtonStyled = styled(Box)(() => ({
    backgroundColor: 'transparent',
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    borderRadius: '50%',
    padding: '30px 40px'
}))