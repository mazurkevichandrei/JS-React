import React from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'
import StyledResetButton from './styleditems/StylerReset'

function List(props) {
  const [filteredData, setFilteredData] = useState(props.data.filter(item => item.type===props.header))
  const [filterValue, setFilterValue] = useState('')
  
  const filterData = (evt) => {
    setFilterValue(evt.target.value)
    const filter = evt.target.value
    setFilteredData(props.data.filter(item => item.name.includes(filter)))
  }
  
  const resetFilter = () => {
    setFilterValue('')
    setFilteredData(props.data.filter(item => item.type===props.header))
  }


  // const dataToRender =() => props.data.filter(item => item.type===props.header)

  return (
    <StyledUl ismutable={props.ismutable} ismain={props.ismain}>
    <h2>{props.header}</h2>
    <h3>{filteredData.filter(item => item.type===props.header).length} from {(props.data.filter(item => item.type===props.header)).length} contains '<span style={style.counter}>{filterValue}</span>'</h3>
    <input type='text' value = {filterValue}
    onChange={filterData}
    ></input>
    <StyledResetButton onClick={resetFilter}>Reset Filter</StyledResetButton>
      {filteredData.filter(item => item.type===props.header).map(item => {
        return <ListItem data = {item} key = {item.name} ismutable={props.ismutable} ismain={props.ismain} type={item.type} methodType={props.header}/>
      })}
    </StyledUl>
  ); 
}

export default List;
