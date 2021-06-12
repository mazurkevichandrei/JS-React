import React, {useContext} from 'react';
import {Context} from './context';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'
import StyledResetButton from './styleditems/StylerReset'
import StyledInput from './styleditems/styledInput'

function List(props) {
  let {allMethods} = useContext(Context)
  const [filteredData, setFilteredData] = useState(allMethods)
  const [filterValue, setFilterValue] = useState('')
  
  const filterData = (evt) => {
    setFilterValue(evt.target.value)
    const filter = evt.target.value.toLowerCase()
    setFilteredData(allMethods.filter(item => item.name.toLowerCase().includes(filter)))
  }
  
  const resetFilter = () => {
    setFilterValue('')
    setFilteredData(allMethods)
  }
  
  return (
    <StyledUl ismutable={props.ismutable} ismain={props.ismain}>
    <h2 style={style.h2}>{props.header}</h2>
    <h4 style={style.h4}>{filteredData.filter(item => item.type===props.header).length} from {(allMethods.filter(item => item.type===props.header)).length} contains '<span style={style.counter}>{filterValue}</span>'</h4>
    <StyledInput type='text' value = {filterValue}
    onChange={filterData}
    ></StyledInput>
    <StyledResetButton onClick={resetFilter}>RESET FILTER</StyledResetButton>
      {filteredData.filter(item => item.type===props.header).map(item => {
        return <ListItem data = {item} key = {item.id} ismutable={props.ismutable} ismain={props.ismain} type={item.type} methodType={props.header}/>
      })}
    </StyledUl>
  ); 
}

export default List;
