function * fibonacci () {
  let a = 0
  let b = 1

  while (true) {
    const f = a
    a = b
    b = f + a
    const reset = yield f
    if (reset) a = 0, b = 1
  }
}

const fibo = fibonacci()
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)

console.log('***************')

const iterableFibo = {}
iterableFibo[Symbol.iterator] = fibonacci

let i = 0
for (let value of iterableFibo) {
  console.log(value)
  i++
  if(i > 20) break
}

console.log('***************')

console.log(fibo.next(true).value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
