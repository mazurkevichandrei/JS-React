import React from 'react';
import style from './style';
import StyledNavi from './styleditems/styledNavi';
import StyledNaviItem from './styleditems/styledNaviItem';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';


const Header = ({data}) => {
    return(
        <div style={style.header}>
            <h1>{data}</h1>
            <StyledNavi>
                <StyledNaviItem><Link to='/'>Home</Link></StyledNaviItem>
                <StyledNaviItem><Link to='/methods'>Methods</Link></StyledNaviItem>
                <StyledNaviItem><Link to='/test'>Test</Link></StyledNaviItem>
            </StyledNavi>
        </div>
    )
}

export default Header