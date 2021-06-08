import React from 'react';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import styled, {css} from "styled-components";

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
 
  return (
    <StyledUl type={props.header}>
    <h2>{props.header}</h2>
    <input type='text' value = {filterValue}
    onChange={filterData}
    ></input>
      {filteredData.map(item => {
        return <ListItem data = {item} key = {item.key} type ={props.header}/>
      })}
    </StyledUl>
  ); 
}

export default List;
