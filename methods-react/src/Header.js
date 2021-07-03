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
import {increaseState} from './store/reducers/test'
import {decreaseState} from './store/reducers/test'
import {resetCounter} from './store/reducers/test'
import StyledButton from './styleditems/styledButton'

const Header = ({data}) => {
    const count = useSelector((state) => state.counter);
    
    return(
        <div style={style.header}>
            <h1>{data}</h1>
            <span>
            <StyledButton onClick={()=>store.dispatch(increaseState())}>PLUS</StyledButton>
            <StyledButton onClick={()=>store.dispatch(resetCounter())}>RESET</StyledButton>
            <StyledButton onClick={()=>store.dispatch(decreaseState())}>MINUS</StyledButton>
            </span>
            <h3>Count: {count.value}</h3>
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