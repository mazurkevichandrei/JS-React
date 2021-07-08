import LIST_TYPES from './indexConst'

const methods = Object.getOwnPropertyNames(Array.prototype)
const mut =  ['pop', 'push', 'shift', 'unshift', 'splice']
const notMut = methods.filter(item => !mut.includes(item))

const methodsList = {
    'Mutating' : mut,
    'Non-Mutating': notMut,
    'Source': []
}

export default methodsList