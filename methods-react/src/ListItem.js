import React, {useContext} from 'react';
import {Context} from './context';
import StyledLi from './styleditems/styledLi';
import StyledButton from './styleditems/styledButton';
import StyledButtonBackToSource from './styleditems/styledButtonBackToSource';
import style from './style';
import LIST_TYPES from './const/indexConst';
import MODE from './const/mode';
import SlyledLink from './styleditems/styledLink'
import { useSelector } from 'react-redux';
import store from './store/store';
import {changeType} from './store/methods';
import {increaseSteps, increaseCorrect, decreaseCorrect, increaseErrors} from './store/reducers/test'

import methodsList from './const/methodsListMain';
import StyledResultListItem from './styleditems/resultListItem';

function ListItem (props) {

    const {takeMethod} = useContext(Context)

    const btn = (toHide, selectedMethod, toType) => {
        const methodList = methodsList[toType]
        const isCorrect = methodList.includes(selectedMethod)

        return(
            <StyledButtonBackToSource  isShow={toHide}
            type={props.type} disabled={props.isDisabledMove}
            onClick={
                ()=>{
                    store.dispatch(changeType({name: props.data.name, type: LIST_TYPES.MAIN, mode: props.mode}))
                    props.mode === MODE.LEARN ? store.dispatch(increaseSteps()) : console.log()
                    props.mode === MODE.LEARN ? (
                        isCorrect ? store.dispatch(decreaseCorrect()) : console.log()
                        ) : console.log()
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
        isEdit && header !=='Source' ? store.dispatch(decreaseCorrect()) : console.log()
    }

    const learnActions = (name,type, methodType) => {
        store.dispatch(changeType({name: name, type: type, mode: props.mode}))
        store.dispatch(increaseSteps())
        checkIsCorrectMethod(name,type,methodType)
    }

    const gameActions = (name,type) => {
        store.dispatch(changeType({name: name, type: type, mode: props.mode}))
    }

    const action = props.mode === MODE.LEARN ? learnActions: gameActions

    return(
        
        <StyledLi  ismutable={props.ismutable} ismain={props.ismain}>
            {/* {checkResult(props.data.name, props.type)} */}
            <StyledButton isShow={props.type===LIST_TYPES.MUTATING}  disabled={props.isDisabledMove}
            onClick={
                ()=>{
                    action(props.data.name,LIST_TYPES.MUTATING,props.methodType)
                }
            }>M</StyledButton>
            {btn(props.type===LIST_TYPES.NON_MUTATING, props.data.name, LIST_TYPES.MUTATING)}
                <span style={style.itemtext} data-type = 'tooltip' methodname = {props.data.type} ismutable={props.ismutable} ismain={props.ismain}>
                <SlyledLink to='/methoddesc' onClick={takeMethod} name={props.data.name}>{props.data.name}</SlyledLink>
                </span>
            {btn(props.type===LIST_TYPES.MUTATING, props.data.name, LIST_TYPES.NON_MUTATING)}
            <StyledButton isShow={props.type===LIST_TYPES.NON_MUTATING}  disabled={props.isDisabledMove}
            onClick={ 
                ()=>{
                    action(props.data.name,LIST_TYPES.NON_MUTATING,props.methodType)
                }
            }>N</StyledButton>
        </StyledLi>   
    )
}

export default ListItem