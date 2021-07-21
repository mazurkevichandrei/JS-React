import React, { useState, useContext } from 'react';
import {Context} from '../context';
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
import StyledSection from '../styleditems/styledSection';
import StyledCounterSection from '../styleditems/styledCounterSection';
import StyledCounterSectionItem from '../styleditems/styledCounterSectionItem';
import StyledMainArea from '../styleditems/styledMainArea';
import StyledTableName from '../styleditems/resultPageItems/styledTableName';

const Result = () => {
    const {positionFixed} = useContext(Context)
    const ss={
        display: 'flex',
        alignItems: 'flex-start',
        maxWidth: '1000px',
        margin: '0 auto',
    }

    const clearStorage = () => {
        localStorage.clear()
        setFilteredDataLearn([])
        setFilteredDataGame([])
    }

    const keys=Object.keys(localStorage)
    const filtered = keys.map(item => 
        localStorage.getItem(item).split(',')
        )
    const storageToObject = filtered.map(item => ({mode: item[0], user: item[1], steps: item[2], correct: item[3], errors: item[4], total: item[5]}))

    const [filteredDataLearn, setFilteredDataLearn] = useState(storageToObject.filter(item => item.mode === MODE.LEARN))
    const [filteredDataGame, setFilteredDataGame] = useState(storageToObject.filter(item => item.mode === MODE.GAME))

    return(
        <div style={style.section}>
            <StyledSection isPositionFixed={positionFixed}>
                <StyledCounterSection>
                    <StyledCounterSectionItem>
                        <StyledSubmit onClick={clearStorage}>Clear Stat</StyledSubmit>
                    </StyledCounterSectionItem>
                    <StyledCounterSectionItem>
                        <h5>HISTORY</h5>
                    </StyledCounterSectionItem>
                </StyledCounterSection>
            </StyledSection>
            <StyledMainArea>
                <StyledTable>
                    <StyledTableName> {MODE.LEARN} Mode STAT: </StyledTableName>
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
                    <StyledTableName> {MODE.GAME} Mode STAT:</StyledTableName>
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
            </StyledMainArea>
        </div>     
    )
}

export default Result;