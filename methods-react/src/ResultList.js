import React, {useContext, useState, useEffect} from 'react';
import StyledResultList from './styleditems/resultList';
import StyledResultListItem from './styleditems/resultListItem'
import { useSelector } from 'react-redux';
import methodsList from './const/methodsListMain';
import CompareFilter from './const/compareFilter';
import {Context} from './context';
import MODE from './const/mode';

const ResultList = (props) => {
    const {setModeType, mode} = useContext(Context);

    const List = useSelector((state) => state.methods);
    const data = mode===MODE.GAME ? List.gameValue : List.value;
    
    const checkResult = (method, checkingType) => {
        const methodList = methodsList[props.check]
        const isCorrect =  methodList.includes(method, checkingType) ? true : false;
        return(
            <StyledResultListItem  isCorrect={isCorrect} ></StyledResultListItem>
        )
    }
    
    return (
        <StyledResultList>
            {
                CompareFilter(data, props.check).map(item => {
                    return (
                        checkResult(item.name, props.check)
                    )
                })
            }
        </StyledResultList>
    )
};

export default ResultList;