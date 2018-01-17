const name = 'Sacha'

function greet () {
  console.log(`Hi ${name}`)
}

greet()

const nameB = 'Sacha'

function greetB (nameB) {
  console.log(`Hi ${nameB}`)
}

greetB()
greetB(nameB)
greetB('Louis')

const nameC = 'Sacha'

function greetC () {
  if (true) {
    var nameC = 'Eric'
  }
  console.log(`Hi ${nameC}`)
}

greetC()
console.log(`nameC: ${nameC}`)

function greet10 () {
  for (var i = 0; i < 10; i += 1) {
    console.log(`Hi ${nameC}`)
  }
  console.log(`i is ${i}`)
}

greet10()

function greet10B () {
  for (let i = 0; i < 10; i += 1) {
    console.log(`Hi ${nameC}`)
  }
  console.log(`i is ${i}`)
}

try {
  greet10B()
} catch (e) {
  console.log('Unable to do it with let')
}

console.log(`nameC: ${nameC}`)
