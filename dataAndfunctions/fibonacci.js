const assert = require('assert')

let recursiveCounter = 0
function recursiveFibonacci (num) {
  if (num <= 0) {
    throw new Error('num > 0')
  }

  if (num === 1) return 0
  if (num === 2) return 1

  recursiveCounter += 1

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
}

let nemoizedCounter = 0

function nemoizedFibonacci (num, storage = {}) {
  if (num <= 0) {
    throw new Error('num > 0')
  }
  if (storage[num]) return storage[num]
  if (num === 1) return 0
  if (num === 2) return 1
  nemoizedCounter += 1
  storage[num] = nemoizedFibonacci(num - 1, storage) + nemoizedFibonacci(num - 2, storage)
  return storage[num]
}

assert.equal(nemoizedFibonacci(1), 0)
assert.equal(nemoizedFibonacci(2), 1)
assert.equal(nemoizedFibonacci(3), 1)
assert.equal(nemoizedFibonacci(4), 2)
assert.equal(nemoizedFibonacci(5), 3)
assert.equal(nemoizedFibonacci(6), 5)
assert.equal(nemoizedFibonacci(7), 8)
assert.equal(nemoizedFibonacci(8), 13)
assert.equal(nemoizedFibonacci(9), 21)
assert.equal(nemoizedFibonacci(10), 34)

assert.equal(recursiveFibonacci(1), 0)
assert.equal(recursiveFibonacci(2), 1)
assert.equal(recursiveFibonacci(3), 1)
assert.equal(recursiveFibonacci(4), 2)
assert.equal(recursiveFibonacci(5), 3)
assert.equal(recursiveFibonacci(6), 5)
assert.equal(recursiveFibonacci(7), 8)
assert.equal(recursiveFibonacci(8), 13)
assert.equal(recursiveFibonacci(9), 21)
assert.equal(recursiveFibonacci(10), 34)

console.log(`20 -> ${nemoizedFibonacci(20)} in ${nemoizedCounter} iterations\n`)
console.log(`20 -> ${recursiveFibonacci(20)} in ${recursiveCounter} iterations\n`)
