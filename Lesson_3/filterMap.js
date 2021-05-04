let arr = ['nap', 'pan', 'apn', 'hi']

function filterArr(arr) {
    let data = []
    let result = []
    let myMap = new Map()
    arr.forEach(item => data.push(item.split('').sort().join('')))
    for(let item of data){
      myMap.set(item,item)
    }
    for (let value of myMap.values()){
      result.push(value)
    }
    return result
}
console.log(filterArr(arr))