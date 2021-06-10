import React from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'

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
    <StyledUl isMutable={props.isMutable} isMain={props.isMain}>
    <h2>{props.header}</h2>
    <h3>{filteredData.length} from {(props.data).length} contains '<span style={style.counter}>{filterValue}</span>'</h3>
    <input type='text' value = {filterValue}
    onChange={filterData}
    ></input>
    <button onClick={resetFilter}>Reset Filter</button>
      {filteredData.map(item => {
        return <ListItem data = {item} key = {item.key} isMutable={props.isMutable} isMain={props.isMain} type={item.type}/>
      })}
    </StyledUl>
  ); 
}

export default List;
