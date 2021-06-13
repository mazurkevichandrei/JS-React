import React, {useContext} from 'react';
import {Context} from './context';
import StyledLi from './styleditems/styledLi';
import StyledButton from './styleditems/styledButton';
import style from './style';
import LIST_TYPES from './const/indexConst';

function ListItem (props) {
    const {changeMethodType} = useContext(Context)
    return(
        <StyledLi  ismutable={props.ismutable} ismain={props.ismain}>
            <StyledButton ismutable={props.ismutable} onClick={() => changeMethodType(LIST_TYPES.MUTATING, props.data.name)}>M</StyledButton>
                <span style={style.itemtext} data-type = 'tooltip' methodName = {props.data.type}
                ismutable={props.ismutable} ismain={props.ismain}>
                    {props.data.name}
                </span>
            <StyledButton ismutable={props.ismutable} onClick={() => changeMethodType(LIST_TYPES.NON_MUTATING, props.data.name)}>U</StyledButton>
        </StyledLi>   
    )
}

export default ListItem