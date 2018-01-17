function greet (times, uppercase) {
  for (let i = 0; i < times; i += 1) {
    const str = `Hi ${this.name} ${this.firstName}`
    const greeting = uppercase ? str.toUpperCase() : str
    console.log(greeting)
  }
}

greet(3)

global.name = 'Sacha'
global.firstName = 'Lifszyc'

greet(4)

const sacha = {
  name: 'SachaB', firstName: 'LifszycB'
}

greet.call(sacha, 3)

greet.call(sacha, 3, true)
greet.apply(sacha, [3, false])
