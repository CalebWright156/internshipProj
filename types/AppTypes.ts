/////////////////
//AppBar Types
////////////////
export interface AppBarProps {
    matches: boolean
}

export type AppBarStyleTypes = {
    type: string
}

//////////////
//Button types
/////////////

export interface ButtonProps {
    text: string,
    width: string,
    height: string
}

//////////////////
//Award component
/////////////////

export interface AwardProps {
    number: string,
    award: string,
    type: string
}