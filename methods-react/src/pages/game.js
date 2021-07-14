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
import {Context} from '../context';

const Game = () => {

    // const {setModeType, mode} = useContext(Context);
    // setModeType(MODE.GAME)
    // console.log(mode)
    const newList = useSelector((state) => state.methods);
    const data = newList.gameValue

    const [checkHidden, setCheckHidden] = useState('true')
    const [isDisabledMove, setIsDisabledMove] = useState(false)
    const submitAction = () => {
        setCheckHidden(false)
        setIsDisabledMove(true)
        //setIsDisabled(true)     
    }
    const newGame = () => {
        store.dispatch(resetTypes({mode: MODE.GAME}))
        setCheckHidden(true)
        setIsDisabledMove(false)
    }

    let srcLen = data.filter(item => item.type===LIST_TYPES.MAIN).length
    const isDisabled = srcLen > 0 ? true : false
    // const [isDisabled, setIsDisabled] = useState(true)
    // console.log('r',  isDisabled)
    // useEffect(()=>{
    //     setIsDisabled(srcLen > 0 ? true : false)
    // },[data])
    

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit onClick={submitAction} disabled={isDisabled}>SUBMIT</StyledSubmit>
                <StyledSubmit onClick={newGame}>NEW GAME</StyledSubmit>
            </div>
            <div style={style.container}>
                <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.GAME} checkHidden={checkHidden} isDisabledMove={isDisabledMove}/>
                <List header = {LIST_TYPES.MAIN} ismain='true' mode={MODE.GAME} checkHidden='true'/>
                <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.GAME} checkHidden={checkHidden} isDisabledMove={isDisabledMove}/>
            </div>
        </div>
    )
}

export default Game