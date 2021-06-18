import renderTable from './renderTable';
//import renderElement from './renderElement';
import showToolTip from './showToolTip';
import hideToolTip from './hideToolTip';
import positionToolTip from './positionToolTip';

import './main.css';

const methodsElement = document.querySelector('#methods')

if (methodsElement) {
    renderTable()
}

const windowElement = document.querySelector('body')
const toolTipElement = document.createElement('div')
toolTipElement.classList.add('tool-tip')
windowElement.append(toolTipElement)
const itemsElements = document.querySelectorAll('li')

itemsElements.forEach(item => item.addEventListener('mouseenter',showToolTip))
itemsElements.forEach(item => item.addEventListener('mouseleave', hideToolTip))
itemsElements.forEach(item => item.addEventListener('mousemove', positionToolTip))