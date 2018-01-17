const sum = (...numbers) => numbers.reduce((previous, current) => previous + current, 0)

console.log(sum(1, 2, 3))

const double = (...numbers) => numbers.map(item => item * 2)

console.log(double(1, 2, 3))

const pairs = (...numbers) => numbers.filter(item => item % 2 === 0)

console.log(pairs(1, 2, 3))
