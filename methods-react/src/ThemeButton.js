import React, {useContext} from 'react';
// import {useState} from 'react';
import {Context} from './context';
import StyledThemeButton from './styleditems/styledThemeButton'

const ThemeButton = (props) => {
    const {changeTheme} = useContext(Context)
    const buttonName = props.isDay ? 'DAY' : 'NIGHT' 

    return (
        <StyledThemeButton onClick={changeTheme}>Change theme to {buttonName}</StyledThemeButton>
    )
}

export default ThemeButton