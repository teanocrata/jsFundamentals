function greet (name, firstName) {
  console.log(`Hello ${name} ${firstName}`)
}

greet('Sacha', 'Lifszyc')

const greetSachas = greet.bind(null, 'Sacha')

greetSachas('Lifszyc')
greetSachas('Other')
