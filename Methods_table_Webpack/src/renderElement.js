export default (target,elementType,data) => {
    const element = document.createElement('li')
    element.dataset.type = elementType
    element.textContent = data
    target.append(element)
}