import React, {useContext} from 'react';
import {Context} from './context';
import StyledThemeButton from './styleditems/styledThemeButton';
import theme from './themeStyles';

const ThemeButton = () => {
    const {changeTheme, isDayTheme} = useContext(Context)
    return (
        <StyledThemeButton onClick={changeTheme} isDayTheme={isDayTheme}></StyledThemeButton>
    )
}

export default ThemeButton