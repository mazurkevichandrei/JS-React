import React from 'react';
import styled, {css} from "styled-components";

const StyledLi = styled.li`
    padding: 5px;
    margin: 5px 0;
    background: khaki;
    border-radius: 3px;
    cursor: pointer;
    ${props => props.isMutable && css`
    background: green;
    color: white;
  `};
`;

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
        <StyledLi data-type = {props.type} onMouseOver={ShowToolTip} onMouseOut={HideToolTip} onMouseMove={MoveToolTip} isMutable={props.isMutable}>{props.data.name}</StyledLi>
    )
}

export default ListItem