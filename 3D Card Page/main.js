const container = document.querySelector('.container')
const card = document.querySelector('.card')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

const RATIO = 25

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / RATIO
  let yAxis = (window.innerHeight / 2 - e.pageY) / RATIO

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

// Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'

  // Popout
  title.style.transform = 'translateZ(150px)'
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)'
  description.style.transform = 'translateZ(125px)'
  sizes.style.transform = 'translateZ(100px)'
  purchase.style.transform = 'translateZ(100px)'
})

// Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = `all 0.5s ease`
  card.style.transform = `rotateX(0deg) rotateY(0deg)`

  // Pop back
  title.style.transform = 'translateZ(0)'
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
  description.style.transform = 'translateZ(0px)'
  sizes.style.transform = 'translateZ(0px)'
  purchase.style.transform = 'translateZ(0px)'
})

// Select Size
const sizeButtons = Array.from(sizes.querySelectorAll('button'))

sizeButtons.forEach((button) => {
  button.onclick = () => {
    const activeElement = sizeButtons.find((each) =>
      each.classList.contains('active')
    )
    activeElement.classList.remove('active')
    button.classList.add('active')
  }
})
