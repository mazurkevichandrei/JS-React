import React, {useContext} from 'react';
import {Context} from '../context';
import { useSelector } from 'react-redux';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';
import store from '../store/store';
import { resetCounter} from '../store/reducers/test'
import { resetTypes } from '../store/methods';
import StyledRestart from '../styleditems/styledRestart';

const Learn = () => {

    const count = useSelector((state) => state.counter);
    const total = count.steps===0 ? 0 : Math.round(count.correct/count.steps*100)

    const restart = () => {
        store.dispatch(resetCounter())
        store.dispatch(resetTypes({mode: MODE.LEARN}))
    }
    const restartButton = () =>{ if (count.steps>0){
        return (
            <StyledRestart onClick={restart}>Try again</StyledRestart>
            )
        }
    }
    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <h5>Steps: {count.steps}</h5>
                <h5>| Correct: {count.correct} (33)</h5>
                <h5>| Errors: {count.errors}</h5>
                <h5>| Total: {total} % |</h5>
                {restartButton()}
            </div>
            <div style={style.container}>
                <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.LEARN}/>
                <List header={LIST_TYPES.MAIN} ismain='true' mode={MODE.LEARN}/>
                <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.LEARN}/>
            </div>
        </div>
    )
}

export default Learn