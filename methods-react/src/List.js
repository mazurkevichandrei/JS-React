import React, {useContext, useEffect} from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'
import StyledResetButton from './styleditems/StylerReset';
import StyledInputContainer from './styleditems/StyledInputContainer';
import Input from './Input'
//REDUX
import { useSelector } from 'react-redux';
import IncludeFilter from './const/includeFilter';
import CompareFilter from './const/compareFilter';
import MODE from './const/mode';
import methodsList from './const/methodsListMain';
import StyledResultListItem from './styleditems/resultListItem'

const  List = (props) => {

    const ss={
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row'
    }
   
    const checkResult = (method) => {
      const methodList = methodsList[props.header]
      const isCorrect1 =  methodList.includes(method) ? true : false;
      return(
          <StyledResultListItem  isCorrect={isCorrect1} isHidden={props.checkHidden} isRender={props.ismain}></StyledResultListItem>
      )
  }

  const newList = useSelector((state) => state.methods);
  
  const data = props.mode === MODE.LEARN ? newList.value : newList.gameValue

  const [filteredDataToShow, setFilteredDataToShow] = useState(data)
  const [filterValue, setFilterValue] = useState('')
  
  const filterData =  (evt) => {
    setFilterValue(evt.target.value)
    let filter = evt.target.value.toLowerCase()
    setFilteredDataToShow(IncludeFilter(data, filter))
}
  
    const isShowResetButton = filterValue ? false : true;

    const resetFilter = () => {
      setFilterValue('')
      setFilteredDataToShow(CompareFilter(data, props.header))
    }
    
    const listTorender = filterValue !=='' ? filteredDataToShow : data
    useEffect (
      ()=>
      {setFilteredDataToShow(IncludeFilter(data,filterValue))},
        [data,filterValue]
        )
  
  return (
    <StyledUl ismutable={props.ismutable} ismain={props.ismain}>
      <h2 style={style.h2}>{props.header}</h2>
      <h4 style={style.h4}>
        {CompareFilter(filteredDataToShow,props.header).length} from {CompareFilter(data, props.header).length} contains '<span style={style.counter}>{filterValue}</span>'
      </h4>
      <StyledInputContainer>
        <Input action={filterData} value={filterValue}/>
        <StyledResetButton onClick={resetFilter} isShow={isShowResetButton}></StyledResetButton>
      </StyledInputContainer>
      
      { listTorender.filter(item => item.type===props.header).map(item => {
        return (<div style={ss}><ListItem 
        data = {item} 
        key = {item.id} 
        ismutable={props.ismutable} 
        ismain={props.ismain} 
        type={item.type} 
        methodType={props.header}
        mode={props.mode}
        isDisabledMove={props.isDisabledMove}/>
        {checkResult(item.name)}
        </div>
        )
      })}
    </StyledUl>
  ); 
}

export default List;
