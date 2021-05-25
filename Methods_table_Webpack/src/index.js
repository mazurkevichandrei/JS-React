import renderElement from './renderElement';
import './main.css'
const methods = Object.getOwnPropertyNames(Array.prototype)
const mutable = ['pop', 'push', 'shift', 'unshift', 'splice'];
const unmutable = methods.filter(item => !mutable.includes(item))
const methodsElement = document.querySelector('#methods')

if (methodsElement) {
    const mutableElement = document.createElement('ul')
    const unmutableElement = document.createElement('ul')

    const mutableHeader = document.createElement('h2')
    mutableHeader.textContent = 'Mutable'
    const unmutableHeader = document.createElement('h2')
    unmutableHeader.textContent = 'Unmutable'

    mutableElement.append(mutableHeader)
    unmutableElement.append(unmutableHeader)

    methodsElement.append(mutableElement)
    methodsElement.append(unmutableElement)

    methods.map(item => {
        if (mutable.includes(item)) {
            renderElement(mutableElement,'mutable',item)
        } else {
            renderElement(unmutableElement,'unmutable',item)
        }
    })
}

const windowElement = document.querySelector('body')
const toolTipElement = document.createElement('div')
toolTipElement.classList.add('tool-tip')
windowElement.append(toolTipElement)
const itemsElements = document.querySelectorAll('li')

const showToolTip = function(evt){
    toolTipElement.textContent = `${evt.target.textContent} is ${evt.target.dataset.type} method`
    toolTipElement.style.visibility = 'visible'
}
const hideToolTip = function(){
    toolTipElement.style.visibility='hidden'
}
const positionToolTip = function(evt){
    toolTipElement.style.visibility = 'visible'
    toolTipElement.style.top = evt.clientY + 'px'
    toolTipElement.style.left = evt.clientX + 15 + 'px'
}
itemsElements.forEach(item => item.addEventListener('mouseenter',showToolTip))
itemsElements.forEach(item => item.addEventListener('mouseleave', hideToolTip))
itemsElements.forEach(item => item.addEventListener('mousemove', positionToolTip))