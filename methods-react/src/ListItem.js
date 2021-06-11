import React, {useContext} from 'react';
import {Context} from './context';
import StyledLi from './styleditems/styledLi';
import StyledButton from './styleditems/styledButton';
import style from './style';
import LIST_TYPES from './const/indexConst';



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
    const {changeMethodType} = useContext(Context)
    return(
        <StyledLi data-type = {props.type} ismutable={props.ismutable} ismain={props.ismain}>
            <StyledButton ismutable={props.ismutable} onClick={() => changeMethodType(LIST_TYPES.MUTATING, props.data.name)}>M</StyledButton>
                <span style={style.itemtext} data-type = {props.type} onMouseOver={ShowToolTip} onMouseOut={HideToolTip} onMouseMove={MoveToolTip} ismutable={props.ismutable} ismain={props.ismain}>
                    {props.data.name}
                    </span>
            <StyledButton ismutable={props.ismutable} onClick={() => changeMethodType(LIST_TYPES.NON_MUTATING, props.data.name)}>U</StyledButton>
        </StyledLi>   
    )
}

export default ListItem