const starWars7 = 'Star Wars: The Force Awakens'
const pgStarWars7 = 13

const nameSacha = 'Sacha'
const ageSacha = 26

const nameSanti = 'Santi'
const ageSanti = 12

const canWatchStarWars = (name, age, isWithAdult) => {
  if (age >= pgStarWars7) {
    console.log(`${name} can view "${starWars7}"`)
  } else if (isWithAdult) {
    console.log(`Even is ${age} years old, ${name} can view "${starWars7}" because is with adult`)
  } else {
    console.log(`${name} can not view "${starWars7}".
      Is ${age} years olg and the content is not suitable under ${pgStarWars7} years`)
  }
}

canWatchStarWars(nameSacha, ageSacha)
canWatchStarWars(nameSanti, ageSanti)
canWatchStarWars(nameSanti, ageSanti, true)
