import React from 'react'
// import ToolTip from './ToolTip'
// import PropTypes from 'prop-types'

const styles = {
    li: {
        padding: '5px',
        margin: '5px 0',
        background: 'khaki',
        borderRadius: '3px',
        cursor: 'pointer'
    },
    tooltip: {
        visibility: 'hidden'
    }
}

function ShowToolTip(evt){
    const tt = document.querySelector('.toolTip')
    tt.textContent = `${evt.target.textContent} is ${evt.target.dataset.type} method`
    tt.style.visibility = 'visible'
}
function HideToolTip(){
    const tt = document.querySelector('.toolTip')
    tt.style.visibility = 'hidden'
}
function MoveToolTip(evt){
    const tt = document.querySelector('.toolTip')
    tt.style.visibility = 'visible'
    tt.style.top = evt.clientY + 'px'
    tt.style.left = evt.clientX + 15 + 'px'
}

function ListItem (props) {
    return(
        <li style={styles.li} data-type={props.type} onMouseOver={ShowToolTip} onMouseOut={HideToolTip} onMouseMove={MoveToolTip}
        >{props.data.name}</li>
    )
}

export default ListItem