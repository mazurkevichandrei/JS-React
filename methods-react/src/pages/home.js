import React from 'react';
import style from '../style';
import {useState} from 'react';

const Home = () => {

    const styleText={
        border: '1px solid black',
        padding: '5px',
        borderRadius: '5px',
        maxWidth: '400px',
        width: '100%',
    }

    const INITIAL_TEXT='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const [isHide, SetIsHide] = useState('true')
    const text = isHide ? INITIAL_TEXT.substring(0,50) : INITIAL_TEXT
    const buttonName = isHide ? ' ...' : ' Hide text'

    const showOrHideText = () => {
        SetIsHide(!isHide)
    }
        
    return(
        <div style={style.container}>

            <div style={styleText}>{text}<span onClick={showOrHideText} style={{color: 'red', cursor: 'pointer'}}>{buttonName}</span></div>

            <h1>Home Page</h1>
        </div>
    )
}

export default Home