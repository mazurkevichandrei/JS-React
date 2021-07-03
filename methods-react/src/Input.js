import React from 'react';
import './App.css';
import StyledInput from './styleditems/styledInput'


const Input = ({action, value}) => {
    return (
        <StyledInput type='text' value = {value} onChange={action}></StyledInput>
    )
}

export default Input