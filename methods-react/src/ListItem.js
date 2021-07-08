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
import {increaseSteps, increaseCorrect, decreaseCorrect, increaseErrors} from './store/reducers/test'

//import methodstest from './const/methodsListMain'
import methodsList from './const/methodsListMain';

function ListItem (props) {

    const {takeMethod} = useContext(Context)

    const btn = (toHide, selectedMethod, toType) => {
        const methodList = methodsList[toType]
        const isCorrect = methodList.includes(selectedMethod)

        return(
            <StyledButtonBackToSource  isShow={toHide}
            type={props.type}
            onClick={
                ()=>{
                    store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.MAIN}))
                    store.dispatch(increaseSteps())
                    isCorrect ? store.dispatch(decreaseCorrect()) : console.log()
                    // console.log(header )
                }
                }>X</StyledButtonBackToSource>
        )
    }

    const checkIsCorrectMethod = (selectedMethod, toType, header) => {
        const methodList = methodsList[toType]
        const editedList = methodsList[header]
        const isCorrect = methodList.includes(selectedMethod)
        const isEdit = editedList.includes(selectedMethod)
        isCorrect ? store.dispatch(increaseCorrect()) : store.dispatch(increaseErrors())
        isEdit && header !='Source' ? store.dispatch(decreaseCorrect()) : console.log()
        //console.log(methodList)
        //console.log(isCorrectEdit)
    }

    return(
        <StyledLi  ismutable={props.ismutable} ismain={props.ismain}>
            <StyledButton isShow={props.type===LIST_TYPES.MUTATING}
            onClick={
                ()=>{
            store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.MUTATING}))
            store.dispatch(increaseSteps())
            checkIsCorrectMethod(props.data.name, LIST_TYPES.MUTATING, props.methodType)
                }
            }>M</StyledButton>
            {btn(props.type===LIST_TYPES.NON_MUTATING, props.data.name, LIST_TYPES.MUTATING)}
                <span style={style.itemtext} data-type = 'tooltip' methodname = {props.data.type} ismutable={props.ismutable} ismain={props.ismain}>
                <SlyledLink to='/methoddesc' onClick={takeMethod} name={props.data.name}>{props.data.name}</SlyledLink>
                </span>
            {btn(props.type===LIST_TYPES.MUTATING, props.data.name, LIST_TYPES.NON_MUTATING)}
            <StyledButton isShow={props.type===LIST_TYPES.NON_MUTATING}
            onClick={ 
                ()=>{
            store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.NON_MUTATING}))
            store.dispatch(increaseSteps())
            checkIsCorrectMethod(props.data.name, LIST_TYPES.NON_MUTATING, props.methodType)
                }
            }>N</StyledButton>
        </StyledLi>   
    )
}

export default ListItem