const { expect } = require('chai')
const { freakom } = require('../fundamentals/freakom.js')

describe('#freakom', () => {
  it('If word ends with "ar", should remove it', () => {
    expect(freakom('Programar')).to.equal('Program')
  })

  it('If word starts with "Z", should add pe at end', () => {
    expect(freakom('Zorro')).to.equal('Zorrope')
  })

  it('If word starts with "Z" and ends with ar, should add pe at end and remove last ar ', () => {
    expect(freakom('Zarpar')).to.equal('Zarppe')
  })

  it('If word has more than 100 chars, should split it with a "-"', () => {
    expect(freakom('abecedario')).to.equal('abece-dario')
  })

  it('If word is a palindrome, should intersperse uppercase and lowercase chars', () => {
    expect(freakom('sometemos')).to.equal('SoMeTeMoS')
  })
})
