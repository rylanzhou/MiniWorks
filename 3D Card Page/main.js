const qs = document.querySelector
const qsa = document.querySelectorAll

const container = qs('.container')
const card = qs('.card')
const title = qs('.title')
const sneaker = qs('.sneaker')
const purchase = qs('.purchase')
const description = qs('.info h3')
const sizes = qs('.sizes')
const sizeButtons = qsa('.sizes button')

sizeButtons.forEach((button) => {
  button.onclick = () => {
    const activeElement = qs('button.active')
    if (activeElement) {
      activeElement.classList.remove('active')
    }
    button.classList.add('active')
  }
})

const RATIO = 25

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / RATIO
  let yAxis = (window.innerHeight / 2 - e.pageY) / RATIO

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

// Animate In
container.addEventListener('mouseenter', () => {
  card.style.transition = 'none'

  // Popout
  title.style.transform = 'translateZ(150px)'
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)'
  description.style.transform = 'translateZ(125px)'
  sizes.style.transform = 'translateZ(100px)'
  purchase.style.transform = 'translateZ(100px)'
})

// Animate Out
container.addEventListener('mouseleave', () => {
  card.style.transition = `all 0.5s ease`
  card.style.transform = `rotateX(0deg) rotateY(0deg)`

  // Pop back
  title.style.transform = 'translateZ(0)'
  sneaker.style.transform = 'translateZ(0) rotateZ(0)'
  description.style.transform = 'translateZ(0)'
  sizes.style.transform = 'translateZ(0)'
  purchase.style.transform = 'translateZ(0)'
})
