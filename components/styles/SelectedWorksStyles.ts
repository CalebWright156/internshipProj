import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const LeftSideContent = styled(Box)(() => ({
    width: '50%'
}))

export const RightSideContent = styled(Box)(() => ({
    width: '50%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}))