const freakom = (str) => {
  const reverse = str => str.split('').reverse().join('')
  const minMay = (str) => {
    let translation = ''
    let capitalize = true
    for (let i = 0; i < str.length; i += 1) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }
  if (str === reverse(str)) {
    return minMay(str)
  }

  let translation = str
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }
  if (translation.length >= 10) {
    const firstHalf = translation.slice(0, Math.round(translation.length) / 2)
    const secondHalf = translation.slice(Math.round(translation.length) / 2)
    translation = `${firstHalf}-${secondHalf}`
  }
  return translation
}

if (require.main === module) {
  console.log(freakom('Programar'))
  console.log(freakom('Zorro'))
  console.log(freakom('Zarpar'))
  console.log(freakom('abecedario'))
  console.log(freakom('sometemos'))
}

module.exports = { freakom }
