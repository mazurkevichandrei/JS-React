import React, { createElement } from 'react';
import style from './style';

function ToolTip() {

    const removeTooltip = () => (document.querySelector('.tooltipEl')).remove()
    const addToolTip = (data,top, left) => {
        const el = document.createElement('div')
        el.classList.add('tooltipEl')
        el.textContent=data
        document.querySelector('body').append(el)
        el.style.visibility='visible';
        el.style.position='fixed';
        el.style.top = top - 40 + 'px';
        el.style.left = left + 5 + 'px'
    }
    const hideTooltip = () => (document.querySelector('.tooltipEl')).style.visibility='hidden'

    const createToolTipElement = () => {
        const element = document.querySelector('.tooltipEl')
        if(element === null){

            const el = document.createElement('div');
            el.classList.add('tooltipEl')
            document.querySelector('body').append(el)

            document.addEventListener('mouseover', showTooltip);           
        }
    }

    const showTooltip = (evt) => {
        const isTooltipElement = evt.target.dataset.type
        if(isTooltipElement==='tooltip'){  
            removeTooltip()
            const data =`${evt.target.textContent} is ${evt.target.getAttribute("methodName")} method`
            const {top ,left} = evt.target.getBoundingClientRect()
            addToolTip(data,top,left)
            evt.target.addEventListener('mouseout', hideTooltip);
        }
    }
    createToolTipElement()

    return(
        <div style={style.tooltip}>TEST</div>
    )
}

export default ToolTip