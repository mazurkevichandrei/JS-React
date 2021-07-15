import React, { useState, useContext, useEffect } from 'react';
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

    const filteredData = ob.filter(item => item.mode === MODE.LEARN)
    //    console.log('f', ob) 
    //    console.log('fil', filteredData) 

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit>Clear Stat</StyledSubmit>
            </div>
            <h5> Learn MODE Stat:
                {filteredData.map(item => {
                    return(
                    <h4> 
                        <span>USER: {item.user}</span>
                        <span> STEPS: {item.steps}</span>
                        <span> TOTAL: {item.total} %</span>
                    </h4>
                    )
                })}
            </h5>
        </div>     
    )
}

export default Result;