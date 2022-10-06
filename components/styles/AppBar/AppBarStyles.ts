import { List, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { AppBarStyleTypes } from './AppBarTypes'


// Container
export const AppBarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
    background: '#CCC'
}))

export const HeaderList = styled(List)<AppBarStyleTypes>(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}))

export const ListTextStyles = styled(ListItemText)(() => ({
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '14px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#F7F7F7',
}))