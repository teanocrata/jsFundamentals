let gokuLive = 100
let supermanLive = 100

const MIN_POWER = 5
const MAX_POWER = 12

const bothAlive = () => gokuLive > 0 && supermanLive > 0
const kick = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

let round = 0

while (bothAlive()) {
  round += 1
  console.log(`Round ${round}`)

  const gokuKick = kick()
  const supermanKick = kick()

  if (gokuKick > supermanKick) {
    console.log(`Goku kicks superman with ${gokuKick}`)
    supermanLive -= gokuKick
    console.log(`Superman remains ${supermanLive} live`)
  } else {
    console.log(`Superman kicks Goku with ${supermanKick}`)
    gokuLive -= supermanKick
    console.log(`Goku remains ${gokuLive} live`)
  }
}

const gokuAlive = () => gokuLive > 0

if (gokuAlive()) {
  console.log(`Goku is alive, he remais ${gokuLive} live`)
} else {
  console.log(`Superman is alive, he remais ${supermanLive} live`)
}
