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

function copyObjectJson(data, target) {
  const newObj = JSON.parse(JSON.stringify(data))
  Object.assign(target, newObj)
  return target
}
copyObjectJson(person, newPerson)

newPerson.name = 'Misha'
newPerson.age = 33
newPerson.adress.country = 'Poland'
newPerson.adress.city = 'Warshava'
newPerson.skills.push('SQL')

console.log(newPerson)
console.log(person)

console.log(JSON.stringify(person) === JSON.stringify(newPerson))