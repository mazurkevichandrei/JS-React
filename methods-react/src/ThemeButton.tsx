import React, {useContext} from 'react';
import {Context} from './context';
import StyledThemeButton from './styleditems/styledThemeButton';

const ThemeButton = () => {

    interface IContext {
        changeTheme: ()=>any
    }
    
    const {changeTheme}:IContext = useContext(Context)
    return (
        <StyledThemeButton onClick={changeTheme}></StyledThemeButton>
    )
}

export default ThemeButton