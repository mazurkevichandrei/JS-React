import React from 'react';
// import {Context} from './context';
// import { useState } from 'react';
import './App.css';
// import ListItem from './ListItem';
// import style from './style';
// import StyledUl from './styleditems/styledUl'
// import StyledResetButton from './styleditems/StylerReset'
import StyledInput from './styleditems/styledInput'


const Input = ({action, value}) => {
    return (
        <StyledInput type='text' value = {value} onChange={action}></StyledInput>
    )
}

export default Input