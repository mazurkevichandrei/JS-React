import React, {useEffect} from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'
import StyledResetButton from './styleditems/StylerReset'
import Input from './Input'
//REDUX
import { useSelector } from 'react-redux';
import IncludeFilter from './const/includeFilter';
import CompareFilter from './const/compareFilter';

const  List = (props) => {
  
  const newList = useSelector((state) => state.methods);
  
  const [filteredDataToShow, setFilteredDataToShow] = useState(newList.value)
  const [filterValue, setFilterValue] = useState('')
  
  const filterData =  (evt) => {
    setFilterValue(evt.target.value)
    let filter = evt.target.value.toLowerCase()
    setFilteredDataToShow(IncludeFilter(newList.value, filter))
}
  
  const resetFilter = () => {
    setFilterValue('')
    setFilteredDataToShow(CompareFilter(newList.value, props.header))
  }
    
    const listTorender = filterValue !=='' ? filteredDataToShow : newList.value
    useEffect (
      ()=>
      {setFilteredDataToShow(IncludeFilter(newList.value,filterValue))},
        [newList.value,filterValue]
        )
  
    

  return (
    <StyledUl ismutable={props.ismutable} ismain={props.ismain}>
      <h2 style={style.h2}>{props.header}</h2>
      <h4 style={style.h4}>
        {CompareFilter(filteredDataToShow,props.header).length} from {CompareFilter(newList.value, props.header).length} contains '<span style={style.counter}>{filterValue}</span>'
      </h4>

      <Input action={filterData} value={filterValue}/>

    <StyledResetButton onClick={resetFilter}>RESET FILTER</StyledResetButton>
      { listTorender.filter(item => item.type===props.header).map(item => {
        return <ListItem 
        data = {item} 
        key = {item.id} 
        ismutable={props.ismutable} 
        ismain={props.ismain} 
        type={item.type} 
        methodType={props.header}/>
      })}
    </StyledUl>
  ); 
}

export default List;
