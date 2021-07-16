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
import StyledTable from '../styleditems/resultPageItems/styledTable';
import StyledTr from '../styleditems/resultPageItems/styledTr';
import StyledTh from '../styleditems/resultPageItems/styledTh';
import StyledTd from '../styleditems/resultPageItems/styledTd';

const Result = () => {

    const ss={
        display: 'flex',
        alignItems: 'flex-start',
        maxWidth: '1000px',
        margin: '0 auto',
    }

    const clearStorage = () => {
        localStorage.clear()
    }

    const keys=Object.keys(localStorage)
    const filtered = keys.map(item => 
        localStorage.getItem(item).split(',')
        )
    const storageToObject = filtered.map(item => ({mode: item[0], user: item[1], steps: item[2], correct: item[3], errors: item[4], total: item[5]}))

    const filteredDataLearn = storageToObject.filter(item => item.mode === MODE.LEARN)
    const filteredDataGame = storageToObject.filter(item => item.mode === MODE.GAME)

    return(
        <div style={style.section}>
            <div style={style.counterData}>
                <StyledSubmit onClick={clearStorage}>Clear Stat</StyledSubmit>
            </div>
            
            <div style={ss}>
                <StyledTable>
                <h5> {MODE.LEARN} Mode STAT: </h5>
                    <StyledTr>
                        <StyledTh>USER</StyledTh>
                        <StyledTh>STEPS</StyledTh>
                        <StyledTh>TOTAL</StyledTh>
                    </StyledTr>
                    {filteredDataLearn.map(item => {
                            return(
                            <StyledTr> 
                                <StyledTd>{item.user}</StyledTd>
                                <StyledTd>{item.steps}</StyledTd>
                                <StyledTd>{item.total} %</StyledTd>
                            </StyledTr>
                            )
                        })}

                </StyledTable>
                <StyledTable>
                    <h5> {MODE.GAME} Mode STAT:</h5>
                    <StyledTr>
                        <StyledTh>USER</StyledTh>
                        <StyledTh>CORRECT</StyledTh>
                        <StyledTh>ERRORS</StyledTh>
                        <StyledTh>TOTAL</StyledTh>
                    </StyledTr>
                    {filteredDataGame.map(item => {
                            return(
                            <StyledTr> 
                                <StyledTd>{item.user}</StyledTd>
                                <StyledTd>{item.correct}</StyledTd>
                                <StyledTd>{item.errors}</StyledTd>
                                <StyledTd>{item.total} %</StyledTd>
                            </StyledTr>
                            )
                    })}
                </StyledTable>         
            </div>
        </div>     
    )
}

export default Result;