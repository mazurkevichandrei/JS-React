import React from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'
import StyledResetButton from './styleditems/StylerReset'

function List(props) {
  const [filteredData, setFilteredData] = useState(props.data)
  const [filterValue, setFilterValue] = useState('')
  
  const filterData = (evt) => {
    setFilterValue(evt.target.value)
    const filter = evt.target.value
    setFilteredData(props.data.filter(item => item.name.includes(filter)))
  }
  
  const resetFilter = () => {
    setFilterValue('')
    setFilteredData(props.data)
  }

  return (
    <StyledUl ismutable={props.ismutable} ismain={props.ismain}>
    <h2>{props.header}</h2>
    <h3>{filteredData.length} from {(props.data).length} contains '<span style={style.counter}>{filterValue}</span>'</h3>
    <input type='text' value = {filterValue}
    onChange={filterData}
    ></input>
    <StyledResetButton onClick={resetFilter}>Reset Filter</StyledResetButton>
      {filteredData.map(item => {
        return <ListItem data = {item} key = {item.key} ismutable={props.ismutable} ismain={props.ismain} type={item.type}/>
      })}
    </StyledUl>
  ); 
}

export default List;
