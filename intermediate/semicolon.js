const name = 'Sacha'

function greet () {
  console.log(`Hi ${name}`)
}

greet()

// IIFE: Inmediatly Invoked Function Expression
//Need semicolon!!!
;(function greetB () {
  console.log(`Hi ${name}`)
})()

//Need semicolon!!!
;['monday', 'tuesday'].forEach(day => console.log(day))
