const greetFamily = firstName => name => console.log(`Hi ${name} ${firstName}`)

const greetGomez = greetFamily('Gomez')

const greetPerez = (name) => {
  console.log(`Hi ${name} Perez`)
}

greetGomez('Ana')
greetGomez('Paula')
greetGomez('Gerardo')
greetGomez('Luisa')

greetPerez('Dario')
greetPerez('Paula')
greetPerez('Julieta')
