import React from 'react';
// import { useSelector } from 'react-redux';
// import LIST_TYPES from '../const/indexConst';
// import List from '../List';
import style from '../style';
import MODE from '../const/mode';
import StyledSubmit from '../styleditems/styledSubmit';
// // import ResutlList from '../ResultList';
// import store from '../store/store';
// import { resetTypes } from '../store/methods';
// import { turnCheckHidden, turnChangeMethodBtn, turnsubmitBtn, turnFlag } from '../store/reducers/buttonsProps';
// import {Context} from '../context';

const Result = () => {

    const keys=Object.keys(localStorage)

    const filtered = keys.map(item => 
        localStorage.getItem(item).split(',')
        )
    const ob = filtered.map(item => ({mode: item[0], user: item[1], steps: item[2], correct: item[3], errors: item[4], total: item[5]}))

    const filteredDataLearn = ob.filter(item => item.mode === MODE.LEARN)
    const filteredDataGame = ob.filter(item => item.mode === MODE.GAME)

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit>Clear Stat</StyledSubmit>
            </div>
            <h5> {MODE.LEARN} Mode STAT:
                {filteredDataLearn.map(item => {
                    return(
                    <h4> 
                        <span>USER: {item.user}</span>
                        <span> STEPS: {item.steps}</span>
                        <span> TOTAL: {item.total} %</span>
                    </h4>
                    )
                })}
            </h5>
            <h5> {MODE.GAME} Mode STAT:
                {filteredDataGame.map(item => {
                    return(
                    <h4> 
                        <span>USER: {item.user}</span>
                        <span> CORRECT: {item.correct}</span>
                        <span> ERRORS: {item.errors}</span>
                        <span> TOTAL: {item.total} %</span>
                    </h4>
                    )
                })}
            </h5>
        </div>     
    )
}

export default Result;