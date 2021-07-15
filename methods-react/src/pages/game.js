import React, { useState, useContext, useEffect } from 'react';
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
import { increaseGameCorrect, increaseGameErrors, resetGame } from '../store/reducers/test';
import {Context} from '../context';
import methodsList from '../const/methodsListMain';

const Game = () => {

    const results = useSelector((state) => state.counter);
    const correctAnswert = results.gameCorrect;
    const incorrectAnswert = results.gameErrors;

    const newList = useSelector((state) => state.methods);
    const data = newList.gameValue

    const hiddenState = useSelector((state) => state.buttonsProps);
    const checkIconIsHidden = hiddenState.checkHidden
    const isDisabledMove =  hiddenState.changeTypesInactive
    const isDisabled = hiddenState.submitBtnInactive

    const flag = hiddenState.flag
    const srcLen = data.filter(item => item.type===LIST_TYPES.MAIN).length

    const lengthSOurce = flag == 0 ? srcLen: flag

    lengthSOurce == 0 ? store.dispatch(turnsubmitBtn({val: false})) :  store.dispatch(turnsubmitBtn({val: true}))

    const submitAction = () => {
        store.dispatch(turnCheckHidden({val: false}))
        store.dispatch(turnChangeMethodBtn({val: true}))
        store.dispatch(turnsubmitBtn({val: true}))
        store.dispatch(turnFlag({val: 1}))
        checkResult()
    }
    const newGame = () => {
        store.dispatch(resetTypes({mode: MODE.GAME}))
        store.dispatch(turnCheckHidden({val: true}))
        store.dispatch(turnChangeMethodBtn({val: false}))
        store.dispatch(turnsubmitBtn({val: true}))
        store.dispatch(turnFlag({val: 0}))
        store.dispatch(resetGame())
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
                <StyledSubmit onClick={submitAction} disabled={isDisabled}>SUBMIT</StyledSubmit>
                <StyledSubmit onClick={newGame}>NEW GAME</StyledSubmit>
                 <h5>Result | Correct: {correctAnswert}</h5><h5>Errors: {incorrectAnswert}</h5>
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