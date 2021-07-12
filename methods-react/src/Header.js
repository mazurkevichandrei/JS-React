import React, { useState, useContext } from 'react';
import {Context} from './context';
// import {useState} from 'react';
import style from './style';
import StyledNavi from './styleditems/styledNavi';
import StyledNaviItem from './styleditems/styledNaviItem';
import MODE from './const/mode'
// import {
//     Link
//   } from 'react-router-dom';
import ThemeButton from './ThemeButton'
import SlyledLink from './styleditems/styledLink';
import StyledNaviContainer from './styleditems/StyledNaviContainer';

import { useSelector } from 'react-redux';
import store from './store/store';
import { resetCounter} from './store/reducers/test'
import { resetTypes } from './store/methods';

const Header = ({data}) => {

    const {setModeType, mode} = useContext(Context);

    const count = useSelector((state) => state.counter);
    const total = count.steps===0 ? 0 : Math.round(count.correct/count.steps*100)

    const restart = () => {
        store.dispatch(resetCounter())
        store.dispatch(resetTypes())
    }
    const restartButton = () =>{ if (count.steps>0){
        return (
            <button onClick={restart}>Try again</button>
            )
        }
    }

    return(
        <div style={style.header}>
            <h1 style={style.h1}>{data}</h1>          
        <StyledNaviContainer>
            <StyledNavi>
                <StyledNaviItem><SlyledLink to='/'      onClick={()=>setModeType('')}>Home</SlyledLink></StyledNaviItem>
                <StyledNaviItem><SlyledLink to='/learn' onClick={()=>setModeType(MODE.LEARN)}>Learn</SlyledLink></StyledNaviItem>
                <StyledNaviItem><SlyledLink to='/game'  onClick={()=>setModeType(MODE.GAME)}>Game</SlyledLink></StyledNaviItem>
            </StyledNavi> 
            <ThemeButton />     
        </StyledNaviContainer>

        <span>
            <span>Steps: {count.steps} | </span>
            <span>Correct: {count.correct} (33) | </span>
            <span>Errors: {count.errors} </span>
            </span>
            <span>Total: {total} % | {restartButton()} | MODE: {mode}</span>

        </div>
    )
}

export default Header