function copyObjectRecursion(data, target) {
    const newObj = {}
    for (let item in data) {
        if (typeof data[item] === 'object' && data[item].constructor.name !== 'Array') {
            newObj[item] = {}
            copyObjectRecursion(data[item], newObj[item])
        } else if (data[item].constructor.name === 'Array') {
            newObj[item] = []
            data[item].forEach(itemOfArr => newObj[item].push(itemOfArr))
        } else {
            newObj[item] = data[item]
        }
    }
    Object.assign(target, newObj)
    return JSON.stringify(target)
  }
  
  module.exports = copyObjectRecursion;