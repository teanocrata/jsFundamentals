function Point (x, y) {
  this.x = x
  this.y = y
}

Point.prototype.moveX = function moveX (x) { this.x += x }
Point.prototype.moveY = function moveY (y) { this.y += y }
Point.prototype.distance = function distance (p) {
  const x = this.x - p.x
  const y = this.y - p.y

  return Math.sqrt(x * x + y * y)
}

const p1 = new Point(0, 4)
const p2 = new Point(3, 0)

console.log(p1.distance(p2))

console.log(p1.distance({ x: 20, y: -7 }))

console.log(`p1: {${p1.x}, ${p1.y}}`)
p1.moveX(10)
console.log(`moved 10 X p1:{${p1.x}, ${p1.y}}`)

console.log('Change p1 moveX prototype')
Object.getPrototypeOf(p1).moveX = function moveX () { this.x = 200 }

console.log(`p2: {${p2.x}, ${p2.y}}`)
p2.moveX(2)
console.log(`moved 2 X p2: {${p2.x}, ${p2.y}}`)

const PointB = {
  init (x, y) {
    this.x = x
    this.y = y
  },
  moveX (x) {
    this.x += x
  },
  moveY (y) {
    this.y += y
  },
  distance (p) {
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
  }
}

const p1B = Object.create(PointB)
p1B.init(0, 4)

const p2B = Object.create(PointB)
p2B.init(3, 0)

console.log(`p1B: {${p1B.x}, ${p1B.y}}`)
console.log(`p2B: {${p2B.x}, ${p2B.y}}`)

class PointC {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  moveX (x) {
    this.x += x
  }
  moveY (y) {
    this.y += y
  }
  distance (p) {
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
  }
}

const p1C = new PointC(0, 4)
const p2C = new PointC(3, 0)

console.log(p1C.distance(p2C))

console.log(p1C.distance({ x: 20, y: -7 }))
