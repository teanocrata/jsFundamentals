class PersonB {
  constructor (name, friends = []) {
    this.name = name
    this.friends = friends
  }

  listFriends () {
    this.friends.forEach(function greetFriend (friend) {
      try {
        console.log(`Hi, my name is ${this.name} aad I'm friend of ${friend}`)
      } catch (e) {
        console.log(`Error: this is undefined at function scope`)
      }
    })
  }
}

const sachaB = new PersonB('Sacha', ['Pedro', 'Juan', 'Amaia'])
sachaB.listFriends()

class PersonC {
  constructor (name, friends = []) {
    this.name = name
    this.friends = friends
  }

  listFriends () {
    const _this = this
    this.friends.forEach(function greetFriend (friend) {
      console.log(`Hi, my name is ${_this.name} aad I'm friend of ${friend}`)
    })
  }
}

const sachaC = new PersonC('Sacha', ['Pedro', 'Juan', 'Amaia'])
sachaC.listFriends()

class PersonD {
  constructor (name, friends = []) {
    this.name = name
    this.friends = friends
  }

  listFriends () {
    this.friends.forEach(function greetFriend (friend) {
      console.log(`Hi, my name is ${this.name} aad I'm friend of ${friend}`)
    }.bind(this))
  }
}

const sachaD = new PersonD('Sacha', ['Pedro', 'Juan', 'Amaia'])
sachaD.listFriends()

class Person {
  constructor (name, friends = []) {
    this.name = name
    this.friends = friends
  }

  listFriends () {
    this.friends.forEach(friend => console.log(`Hi, my name is ${this.name} aad I'm friend of ${friend}`))
  }
}

const sacha = new Person('Sacha', ['Pedro', 'Juan', 'Amaia'])
sacha.listFriends()
