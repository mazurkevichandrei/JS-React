let arr = ['nap', 'pan', 'apn', 'hi']

function filterArr(arr) {
    let data = []
    let result =[]
    arr.forEach((item) => data.push((item.split('').sort().join(''))))
    let mySet = new Set(data)
    mySet.forEach(item => result.push(item))
    return result
}

console.log(filterArr(arr))