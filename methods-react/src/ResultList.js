import React from 'react';
import StyledResultList from './styleditems/resultList';
import StyledResultListItem from './styleditems/resultListItem'
import { useSelector } from 'react-redux';
import methodsList from './const/methodsListMain';
import CompareFilter from './const/compareFilter';

const ResultList = (props) => {

    const List = useSelector((state) => state.methods);
    const data = List.gameValue
    const checkResult = (method, checkingType) => {
        const methodList = methodsList[props.header]
        const isCorrect =  methodList.includes(method, checkingType) ? true : false;
        return(
            <StyledResultListItem  isCorrect={isCorrect}></StyledResultListItem>
        )
    }
    
    return (
        <StyledResultList>
            {
                CompareFilter(data, props.header).map(item => {
                    // checkResult(item.name, props.header)
                    return (
                        checkResult(item.name, props.header)
                    )
                })
            }
        </StyledResultList>
    )
};

export default ResultList;