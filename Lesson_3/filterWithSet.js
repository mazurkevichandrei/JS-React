let arr = ['nap', 'pan', 'apn', 'hi']

function filterArr(arr) {
    let result = []

    arr.forEach((item) => result.push((item.split('').sort().join(''))))
    let mySet = new Set(result)
    return mySet
}

console.log(filterArr(arr))