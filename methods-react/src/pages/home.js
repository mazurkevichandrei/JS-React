import React, {useContext} from 'react';
import style from '../style';
import {useState} from 'react';
import {Context} from '../context';

const Home = () => {
        
    return(
        <div style={style.container}>

            {/* <div style={styleText}>{text}<span onClick={showOrHideText} style={{color: 'red', cursor: 'pointer'}}>{buttonName}</span></div> */}

            <h1>Home Page</h1>
        </div>
    )
}

export default Home