import React from 'react';
import StyledLi from './styleditems/styledLi';
import StyledButton from './styleditems/styledButton';
import style from './style';



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

const testF = () =>{
    console.log('ok')
}

function ListItem (props) {
    return(
        <StyledLi data-type = {props.type} isMutable={props.isMutable} isMain={props.isMain}>
            <StyledButton onClick={testF}>M</StyledButton>
                <span style={style.itemtext} data-type = {props.type} onMouseOver={ShowToolTip} onMouseOut={HideToolTip} onMouseMove={MoveToolTip} isMutable={props.isMutable} isMain={props.isMain}>{props.data.name}</span>
            <StyledButton>U</StyledButton>
        </StyledLi>   
    )
}

export default ListItem