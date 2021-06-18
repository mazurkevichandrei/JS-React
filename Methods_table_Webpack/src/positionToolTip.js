export default (evt) => {
    const toolTipElement = document.querySelector('.tool-tip')
    toolTipElement.style.visibility = 'visible'
    toolTipElement.style.top = evt.clientY + 'px'
    toolTipElement.style.left = evt.clientX + 15 + 'px'
}