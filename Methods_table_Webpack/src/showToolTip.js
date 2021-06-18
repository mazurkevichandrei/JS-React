export default (evt) => {
    const toolTipElement = document.querySelector('.tool-tip')
    toolTipElement.textContent = `${evt.target.textContent} is ${evt.target.dataset.type} method`
    toolTipElement.style.visibility = 'visible'
}