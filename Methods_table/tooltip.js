const methods = Object.getOwnPropertyNames(Array.prototype)
const mutable = ['pop', 'push', 'shift', 'unshift', 'splice'];
const unmutable = methods.filter(item => !mutable.includes(item))
const methodsElement = document.querySelector('#methods')

const renderElement = function(target,elementType,data){
    const element = document.createElement('li')
    element.dataset.type = elementType
    element.textContent = data
    target.append(element)
}

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