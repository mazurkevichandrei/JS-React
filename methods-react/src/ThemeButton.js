import React, {useContext} from 'react';
import {Context} from './context';
import StyledThemeButton from './styleditems/styledThemeButton'

const ThemeButton = () => {
    const {changeTheme, theme} = useContext(Context)
    const buttonName = theme.buttonName
    return (
        <StyledThemeButton onClick={changeTheme}>{buttonName}</StyledThemeButton>
    )
}

export default ThemeButton