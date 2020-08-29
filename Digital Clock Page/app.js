const MIN_DEG = 6
const HOUR_DEG = 30
const TOTAL_DEG = 360
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

setInterval(() => {
  let date = new Date()
  let hh = (date.getHours() * HOUR_DEG) % TOTAL_DEG
  let mm = (date.getMinutes() * MIN_DEG) % TOTAL_DEG
  let ss = (date.getSeconds() * MIN_DEG) % TOTAL_DEG

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
}, 1000)
