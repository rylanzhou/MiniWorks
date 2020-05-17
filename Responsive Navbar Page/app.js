/* eslint-disable no-param-reassign */
const navSlide = () => {
  const burger = document.querySelector('.burger')
  const navLinksGroup = document.querySelector('.nav-link')
  const navLinks = document.querySelectorAll('.nav-link li')

  burger.addEventListener('click', () => {
    // Links panel animation
    navLinksGroup.classList.toggle('nav-active')

    // Links animation
    navLinks.forEach((link, index) => {
      if (!link.style.animation) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`
      } else {
        link.style.animation = ''
      }
    })

    // Burger
    burger.classList.toggle('toggle')
  })
}

navSlide()
