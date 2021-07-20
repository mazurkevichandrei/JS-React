import React, {useContext} from 'react';
import {Context} from './context';
import StyledThemeButton from './styleditems/styledThemeButton';

const ThemeButton = () => {

    interface IContext {
        changeTheme: ()=>any
        isDayTheme: boolean
    }
    
    const {changeTheme, isDayTheme}:IContext = useContext(Context)
    return (
        <StyledThemeButton onClick={changeTheme} isDayTheme={isDayTheme}></StyledThemeButton>
    )
}

export default ThemeButton