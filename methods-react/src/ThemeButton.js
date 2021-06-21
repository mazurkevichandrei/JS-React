import React, {useContext} from 'react';
import {Context} from './context';
import THEME_BUTTON_NAME from './const/themeButtonConst';
import StyledThemeButton from './styleditems/styledThemeButton'

const ThemeButton = (props) => {
    const {changeTheme} = useContext(Context)
    const buttonName = props.isDay ? THEME_BUTTON_NAME.BUTTON_TO_DAY : THEME_BUTTON_NAME.BUTTON_TO_NIGHT 

    return (
        <StyledThemeButton onClick={changeTheme}>{buttonName}</StyledThemeButton>
    )
}

export default ThemeButton