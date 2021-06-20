import React, {useContext} from 'react';
// import {useState} from 'react';
import {Context} from './context';

const ThemeButton = (props) => {
    const {changeTheme} = useContext(Context)
    const buttonName = props.isDay ? 'DAY' : 'NIGHT' 

    return (
        <button onClick={() => changeTheme(props.isDay)}>{buttonName}</button>
    )
}

export default ThemeButton