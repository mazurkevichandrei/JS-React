const copyJson = require('./copyJson');

let person = {
    name: 'Alex',
    age: 25,
    adress: {
        country: 'Belarus',
        city: 'Minsk'
    },
    skills: ['JS', 'Python', 'C++']
};

let newPerson = {};

test("copy object person to newPerson", () => {
    expect(copyJson(person, newPerson)).toBe(JSON.stringify(person));
});