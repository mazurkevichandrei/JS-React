let person = {
    name: 'Alex',
    age: 25,
    adress: {
        country: 'Belarus',
        city: 'Minsk'
    },
    skills: ['JS', 'Python', 'C++']
}

let newPerson = {}

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
    return target
}
copyObjectRecursion(person, newPerson)

newPerson.name = 'Misha'
newPerson.age = 33
newPerson.adress.country = 'Poland'
newPerson.adress.city = 'Warshava'
newPerson.skills.push('SQL')

console.log(newPerson)
console.log(person)

console.log(JSON.stringify(person) === JSON.stringify(newPerson))