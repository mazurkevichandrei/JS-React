import React from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import styled, {css} from "styled-components";
import Style from './style';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin: 5px;
  padding: 0;
  padding-left: 5px;
  border: 2px solid khaki;
  max-width: 400px;
  width: 100%;
    ${props => props.type === 'Mutable' && css`
    border: 2px solid green;
  `};
`;

function List(props) {
  const [filteredData, setFilteredData] = useState(props.data)
  const [filterValue, setFilterValue] = useState('')
  
  let filterData = (evt) => {
    setFilterValue(evt.target.value)
    let filter = evt.target.value
    setFilteredData(props.data.filter(item => item.name.includes(filter)))
  }
  
  let resetFilter = () => {
    setFilterValue('')
    setFilteredData(props.data)
  }

  return (
    <StyledUl type={props.header}>
    <h2>{props.header}</h2>
    <h3>{filteredData.length} from {(props.data).length} contains '<span style={Style.counter}>{filterValue}</span>'</h3>
    <input type='text' value = {filterValue}
    onChange={filterData}
    ></input>
    <button onClick={resetFilter}>Refresh</button>
      {filteredData.map(item => {
        return <ListItem data = {item} key = {item.key} type ={props.header}/>
      })}
    </StyledUl>
  ); 
}

export default List;
