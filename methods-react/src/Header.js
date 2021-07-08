import React from 'react';
// import {useState} from 'react';
import style from './style';
import StyledNavi from './styleditems/styledNavi';
import StyledNaviItem from './styleditems/styledNaviItem';
// import {
//     Link
//   } from 'react-router-dom';
import ThemeButton from './ThemeButton'
import SlyledLink from './styleditems/styledLink'

import { useSelector } from 'react-redux';
import store from './store/store';
import {counter, resetCounter} from './store/reducers/test'
import StyledButton from './styleditems/styledButton'
import { resetTypes } from './store/methods';

const Header = ({data}) => {
    const count = useSelector((state) => state.counter);
    const newList = useSelector((state) => state.methods);
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
            <h1>{data}</h1>
            <span>
            {/* <StyledButton onClick={()=>store.dispatch(resetCounter())}>RESET</StyledButton> */}
            </span>
            <span>
            <span>Steps: {count.steps} | </span>
            <span>Correct: {count.correct} | </span>
            <span>Errors: {count.errors} </span>
            </span>
            <span>Total: {total} %</span>
            {restartButton()}
            
            <StyledNavi>
                <StyledNaviItem><SlyledLink to='/'>Home</SlyledLink></StyledNaviItem>
                <StyledNaviItem><SlyledLink to='/methods'>Methods</SlyledLink></StyledNaviItem>
                <StyledNaviItem><SlyledLink to='/test'>Test</SlyledLink></StyledNaviItem>
            </StyledNavi>       
        <ThemeButton />
        </div>
    )
}

export default Header