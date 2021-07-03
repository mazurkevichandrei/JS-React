import React, {useContext} from 'react';
import {Context} from './context';
import StyledLi from './styleditems/styledLi';
import StyledButton from './styleditems/styledButton';
import StyledButtonBackToSource from './styleditems/styledButtonBackToSource';
import style from './style';
import LIST_TYPES from './const/indexConst';
import SlyledLink from './styleditems/styledLink'

import store from './store/store';
import {changeType} from './store/methods';

function ListItem (props) {

    const {takeMethod} = useContext(Context)

    const btn = (toHide) => {
        return(
            <StyledButtonBackToSource  isShow={toHide}
            type={props.type}
            onClick={
                ()=>{store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.MAIN}))}
                }>X</StyledButtonBackToSource>
        )
    }

    return(
        <StyledLi  ismutable={props.ismutable} ismain={props.ismain}>
            <StyledButton isShow={props.type===LIST_TYPES.MUTATING}
            onClick={
                ()=>{store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.MUTATING}))
            console.log(props.type===LIST_TYPES.MUTATING)}
            }>M</StyledButton>
            {btn(props.type===LIST_TYPES.NON_MUTATING)}
                <span style={style.itemtext} data-type = 'tooltip' methodname = {props.data.type} ismutable={props.ismutable} ismain={props.ismain}>
                <SlyledLink to='/methoddesc' onClick={takeMethod} name={props.data.name}>{props.data.name}</SlyledLink>
                </span>
            {btn(props.type===LIST_TYPES.MUTATING)}
            <StyledButton isShow={props.type===LIST_TYPES.NON_MUTATING}
            onClick={ 
                ()=>{store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.NON_MUTATING}))
                console.log(props.type===LIST_TYPES.NON_MUTATING)}
            }>N</StyledButton>
        </StyledLi>   
    )
}

export default ListItem