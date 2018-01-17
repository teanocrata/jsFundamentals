class Toggable {
  constructor (el) {
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick)
  }

  onClick () {
    console.log('This at onclick:', this)
    this.activated = !this.activated
    this.toggleText()
  }
  toggleText () {
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('button')

const myButton = new Toggable(button)
