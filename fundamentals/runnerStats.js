const name = 'Sacha'
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const run = () => Math.round(Math.random() * 10 + 5)

let totalKms = 0
const { length } = days
for (let i = 0; i < length; i += 1) {
  const kms = run()
  totalKms += kms
  console.log(`Day ${i} is ${days[i]} and ${name} runned ${kms} kms`)
}
console.log(`Mean: ${(totalKms / length).toFixed(2)} kms`)
