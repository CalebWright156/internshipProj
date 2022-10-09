import * as React from 'react';
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function ArrowIcon() {
    return (
        <SvgIcon sx={{width: '12vw', ':hover .Child': {cursor: 'pointer', fill: 'black', stroke: 'black'}, paddingRight: '1vw'}}>
           <svg width="63" height="18" viewBox="0 0 63 18" fill="white" xmlns="http://www.w3.org/2000/svg" className='Child'>
            <line x1="1" y1="9" x2="59" y2="9" stroke='white' stroke-width="2" stroke-linecap="round" className='Child'/>
            <path d="M53 1L61 9L53 17" stroke='white' stroke-width="2" stroke-linecap="round" className='Child'/>
            </svg>
        </SvgIcon>
    )
}

export default ArrowIcon