import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';
import StyledSubmit from '../styleditems/styledSubmit';
import ResutlList from '../ResultList';
import store from '../store/store';
import { resetTypes } from '../store/methods';
import {Context} from '../context';

const Game = () => {
    const {setModeType, mode} = useContext(Context);
    setModeType(MODE.GAME)
    // const List = useSelector((state) => state.methods);
    // const data = List.gameValue
    const [m, setM] = useState('')
    const [n, setN] = useState('')

    const submitAction = () => {
        setM(LIST_TYPES.MUTATING)
        setN(LIST_TYPES.NON_MUTATING)
    }

    const newGame = () => {
        setM('')
        setN('')
        store.dispatch(resetTypes({mode: MODE.GAME}))
    }


    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit onClick={submitAction}>SUBMIT</StyledSubmit>
                <StyledSubmit onClick={newGame}>NEW GAME</StyledSubmit>
            </div>
            <div style={style.container}>
                <ResutlList header = {m}/>
                <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.GAME}/>
                <List header={LIST_TYPES.MAIN} ismain='true' mode={MODE.GAME}/>
                <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.GAME}/>
                <ResutlList header = {n}/>
            </div>
        </div>
    )
}

export default Game