import React, {useContext} from 'react';
import {Context} from './context';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import style from './style';
import StyledUl from './styleditems/styledUl'
import StyledResetButton from './styleditems/StylerReset'
// import StyledInput from './styleditems/styledInput'
import Input from './Input'

const  List = (props) => {
  let {allMethods} = useContext(Context)
  const [filteredData, setFilteredData] = useState(allMethods)
  const [filteredDataToShow, setFilteredDataToShow] = useState(allMethods)
  const [filterValue, setFilterValue] = useState('')
  
  const filterData = (evt) => {
    setFilterValue(evt.target.value)
    let filter = evt.target.value.toLowerCase()
    const runFilter = () => setFilteredData(allMethods.filter(item => item.name.toLowerCase().includes(filter)))
    setFilteredDataToShow(allMethods.filter(item => item.name.toLowerCase().includes(filter)))
    if (evt.target.value === '') {
        runFilter()
    } else {
        setTimeout(() => {
            if (filter === evt.target.value.toLowerCase()) {
                runFilter()
            }
        }, 2000)
    }
}
  
  const resetFilter = () => {
    setFilterValue('')
    setFilteredData(allMethods)
  }
  
  return (
    <StyledUl ismutable={props.ismutable} ismain={props.ismain}>
      <h2 style={style.h2}>{props.header}</h2>
      <h4 style={style.h4}>{filteredDataToShow.filter(item => item.type===props.header).length} from {(allMethods.filter(item => item.type===props.header)).length} contains '<span style={style.counter}>{filterValue}</span>'</h4>
    <Input action={filterData} value={filterValue}/>
    <StyledResetButton onClick={resetFilter}>RESET FILTER</StyledResetButton>
      {filteredData.filter(item => item.type===props.header).map(item => {
        return <ListItem data = {item} key = {item.id} ismutable={props.ismutable} ismain={props.ismain} type={item.type} methodType={props.header}/>
      })}
    </StyledUl>
  ); 
}

export default List;
