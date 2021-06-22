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

const Header = ({data}) => {

    return(
        <div style={style.header}>
            <h1>{data}</h1>
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