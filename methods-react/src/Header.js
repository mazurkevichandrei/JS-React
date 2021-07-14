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
import StyledNaviSection from './styleditems/StyledNaviSection';
import StyledNaviContainer from './styleditems/StyledNaviContainer';
import StyledButtonContainer from './styleditems/styledButtonContainer';
import styled from 'styled-components';

const Header = ({data}) => {

    const {setModeType, mode} = useContext(Context);

    return(
        <div style={style.header}>
            <h1 style={style.h1}>{data}</h1>          
        <StyledNaviSection>
            <StyledNaviContainer>
                <StyledNavi>
                    <StyledNaviItem><SlyledLink to='/'      onClick={()=>setModeType('ABOUT')}>Home</SlyledLink></StyledNaviItem>
                    <StyledNaviItem><SlyledLink to='/learn'>Learn</SlyledLink></StyledNaviItem>
                    <StyledNaviItem><SlyledLink to='/game'>Game</SlyledLink></StyledNaviItem>
                </StyledNavi> 
                <span>MODE: {mode}</span>
                <StyledButtonContainer>
                    <ThemeButton />
                </StyledButtonContainer>
            </StyledNaviContainer> 
        </StyledNaviSection>

        </div>
    )
}

export default Header