import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'


export const AwardSectionContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '200px, 200px',
}))


export const LeftSideStyles = styled(Box)(() => ({
    display: 'flex',
    width: '50%'

}))

export const RightSideStyles = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingTop: '8vh',
    paddingBottom: '8vh',
    paddingLeft: '3vw',
    paddingRight: '3vw'
}))

export const AwardListStyles = styled(Box)(() => ({
    display: 'flex',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    justifyContent: 'space-between',
    alignItems: 'center',
}))


