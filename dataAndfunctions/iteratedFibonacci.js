function fibonacci() {
  let a = 0, b = 1
  return {
    next: function (reset) {
      if (reset) a=0, b=1
      let f = a
      a = b
      b = f + a
      return { value: f, done: false}
    }
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
