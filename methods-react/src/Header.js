import React from 'react';
import style from './style';

const Header = ({data}) => {
    return(
        <div style={style.header}><h1>{data}</h1></div>
    )
}

export default Header