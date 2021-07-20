import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Context} from '../context';
import { useSelector } from 'react-redux';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';
import StyledSubmit from '../styleditems/styledSubmit';
// import ResutlList from '../ResultList';
import store from '../store/store';
import { resetTypes } from '../store/methods';
import { turnCheckHidden, turnChangeMethodBtn, turnsubmitBtn, turnFlag } from '../store/reducers/buttonsProps';
import { increaseGameCorrect, increaseGameErrors, resetGame, pubGameResult, Ss } from '../store/reducers/test';
import methodsList from '../const/methodsListMain';
import ERROR from '../const/errorMessage';

const Game = () => {
    const {setTop, setMessage, setCorrecrtPopUp} = useContext(Context)
    const userData = useSelector((state) => state.userName);
    const name = userData.name

    const results = useSelector((state) => state.counter);

    const newList = useSelector((state) => state.methods);
    const data = newList.gameValue;
    
    const hiddenState = useSelector((state) => state.buttonsProps);
    const checkIconIsHidden = hiddenState.checkHidden
    const isDisabledMove =  hiddenState.changeTypesInactive
    const isDisabled = hiddenState.submitBtnInactive

    const flag = hiddenState.flag
    const srcLen = data.filter(item => item.type===LIST_TYPES.MAIN).length

    const lengthSource = flag == 0 ? srcLen: flag

    lengthSource == 0 ? store.dispatch(turnsubmitBtn({val: false})) :  store.dispatch(turnsubmitBtn({val: true}))

    const submitAction = () => {
        store.dispatch(turnCheckHidden({val: false}))
        store.dispatch(turnChangeMethodBtn({val: true}))
        store.dispatch(turnsubmitBtn({val: true}))
        store.dispatch(turnFlag({val: 1}))
        checkResult()
        store.dispatch(pubGameResult({mode: MODE.GAME, name: name}))
        setMessage(`Result was saved`)
        setCorrecrtPopUp(true)
        setTop('0')
    }

    const newGame = () => {
        store.dispatch(resetTypes({mode: MODE.GAME}))
        store.dispatch(turnCheckHidden({val: true}))
        store.dispatch(turnChangeMethodBtn({val: false}))
        store.dispatch(turnsubmitBtn({val: true}))
        store.dispatch(turnFlag({val: 0}))
        store.dispatch(resetGame())
    }

    const check = () => {
        setCorrecrtPopUp(false)
        setTop('0') 
        setMessage(ERROR)
    }
    const submitActionCheck = () => {
        name === 'User' ? check() :  submitAction() 
    }

    const checkResult = () =>{
        const mutInit = methodsList[LIST_TYPES.MUTATING]
        const nonMutInit = methodsList[LIST_TYPES.NON_MUTATING]
        const mutG = data.filter(item => item.type===LIST_TYPES.MUTATING)
        const nMutG = data.filter(item => item.type===LIST_TYPES.NON_MUTATING)
        mutG.map(
            item => mutInit.includes(item.name) ? store.dispatch(increaseGameCorrect()) : store.dispatch(increaseGameErrors()) 
            )
        nMutG.map(
            item => nonMutInit.includes(item.name) ? store.dispatch(increaseGameCorrect()) : store.dispatch(increaseGameErrors()) 
            )
        }

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit onClick={submitActionCheck} disabled={isDisabled}>SUBMIT</StyledSubmit>
                <StyledSubmit onClick={newGame}>NEW GAME</StyledSubmit>
                 <h5>Result | Correct: {results.gameCorrect}</h5><h5>Errors: {results.gameErrors}</h5>
            </div>
            <div style={style.container}>
                <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.GAME} checkHidden={checkIconIsHidden} isDisabledMove={isDisabledMove}/>
                <List header = {LIST_TYPES.MAIN} ismain='true' mode={MODE.GAME} checkHidden='true'/>
                <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.GAME} checkHidden={checkIconIsHidden} isDisabledMove={isDisabledMove}/>
            </div>
        </div>
    )
}

export default Game