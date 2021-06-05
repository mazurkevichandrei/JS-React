import React from 'react'
//import PropTypes from 'prop-types'
import './App.css';
import ListItem from './ListItem'

const styles = {
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    listStyle: 'none',
    margin: '5px',
    padding: '0',
    paddingLeft: '5px',
    border: '1px solid green',
    maxWidth: '300px',
    width: '100%'
  }
}

function List(props) {

  return (
    <ul style={styles.ul}>
    <h2>{props.header}</h2>
      {props.data.map(item => {
        return <ListItem data = {item} key = {item.key}/>
      })}
    </ul>
  ); 
}

export default List;
