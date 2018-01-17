const birthYear = 1981
const birthMonth = 12
const birthDay = 19
const birthDate = new Date(birthYear, birthMonth - 1, birthDay)

console.log(birthDate)

const today = new Date()
console.log(today)

const timeElapsed = today - birthDate
console.log(`${Math.floor(timeElapsed)} miliseconds`)

const secondsElapsed = timeElapsed / 1000
console.log(`${Math.floor(secondsElapsed)} seconds`)

const minutesElapsed = secondsElapsed / 60
console.log(`${Math.floor(minutesElapsed)} minutes`)

const hoursElapsed = minutesElapsed / 60
console.log(`${Math.floor(hoursElapsed)} hours`)

const daysElapsed = hoursElapsed / 24
console.log(`${Math.floor(daysElapsed)} days`)

const yearsElapsed = daysElapsed / 365
console.log(`${Math.floor(yearsElapsed)} years aprox`)

const next = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
console.log(next)

const spanishWeekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
console.log(spanishWeekDays[next.getDay()])
