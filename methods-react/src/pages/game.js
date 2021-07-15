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
import {Context} from '../context';

const Game = () => {

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
    }
    const newGame = () => {
        store.dispatch(resetTypes({mode: MODE.GAME}))
        store.dispatch(turnCheckHidden({val: true}))
        store.dispatch(turnChangeMethodBtn({val: false}))
        store.dispatch(turnsubmitBtn({val: true}))
        store.dispatch(turnFlag({val: 0}))
    }

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit onClick={submitAction} disabled={isDisabled}>SUBMIT</StyledSubmit>
                <StyledSubmit onClick={newGame}>NEW GAME</StyledSubmit>
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