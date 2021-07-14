import React, { useState, useContext } from 'react';
// import { useSelector } from 'react-redux';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';
import StyledSubmit from '../styleditems/styledSubmit';
// import ResutlList from '../ResultList';
import store from '../store/store';
import { resetTypes } from '../store/methods';
import {Context} from '../context';

const Game = () => {

    const {setModeType, mode} = useContext(Context);
    setModeType(MODE.GAME)

    const [checkHidden, setCheckHidden] = useState('true')
    const submitAction = () => {
        setCheckHidden(!checkHidden)
    }
    const newGame = () => {
                store.dispatch(resetTypes({mode: MODE.GAME}))
                setCheckHidden('true')
    }

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit onClick={submitAction}>SUBMIT</StyledSubmit>
                <StyledSubmit onClick={newGame}>NEW GAME</StyledSubmit>
            </div>
            <div style={style.container}>
                <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.GAME} checkHidden={checkHidden}/>
                <List header = {LIST_TYPES.MAIN} ismain='true' mode={MODE.GAME} checkHidden='true'/>
                <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.GAME} checkHidden={checkHidden}/>
            </div>
        </div>
    )
}

export default Game