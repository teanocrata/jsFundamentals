let isabel = { name: 'Isabel', firstName: 'Muñoz', age: 36 }
let anotherIsabel = isabel
console.log(`anotherIsabel === isabel -> ${anotherIsabel === isabel}`)
anotherIsabel.age = 27
console.log(`anotherIsabel (modified) === isabel -> ${anotherIsabel === isabel}`)
console.log(`isabel: ${JSON.stringify(isabel)}`)
console.log(`anotherIsabel: ${JSON.stringify(anotherIsabel)}`)
let counter = 0

function birthday (person) {
  counter++
  person.age++
}

console.log(counter)

birthday(isabel)

console.log(`isabel: ${JSON.stringify(isabel)}`)
console.log(`anotherIsabel: ${JSON.stringify(anotherIsabel)}`)
console.log(counter)

const inmutableBirthday = person => ({ ...person, age: person.age + 1 })

inmutableBirthday(isabel)
console.log(`isabel: ${JSON.stringify(isabel)}`)
console.log(`anotherIsabel.age: ${JSON.stringify(anotherIsabel)}`)

console.log(`inmutableBirthday(isabel): ${JSON.stringify(inmutableBirthday(isabel))}`)
console.log(`isabel: ${JSON.stringify(isabel)}`)
console.log(`anotherIsabel: ${JSON.stringify(anotherIsabel)}`)
