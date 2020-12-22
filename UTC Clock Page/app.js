const clock = document.querySelector('.clock h1')
const select = document.querySelector('select')
const button = document.querySelector('button')
const flag = document.querySelector('.flag')
const dateSpan = document.querySelector('.date')

let is24 = true
let utc = 8
let date = new Date()

for (let i = -11; i < 13; i++) {
  const option = document.createElement('option')
  option.value = i
  option.text = `UTC${i ? (i > 0 ? '+' + i : i) : ''}`

  if (i === 8) {
    option.selected = true
  }

  select.appendChild(option)
}

const paddingWith0 = (str) => ('00' + str).slice(-2)

const setClock = () => {
  date = new Date()

  // Offset according to tz
  date.setHours(date.getHours() - 8 + utc)

  let hours = date.getHours()

  // Morning or evening
  flag.innerHTML = !is24 ? (hours >= 12 ? 'PM' : 'AM') : ''

  // Date
  dateSpan.innerHTML = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`

  // Format if in 12h mode
  !is24 && hours > 12 && (hours %= 12)

  clock.innerHTML =
    `${paddingWith0(hours)}:` +
    `${paddingWith0(date.getMinutes())}:` +
    `${paddingWith0(date.getSeconds())}`
}

setInterval(() => {
  setClock()
}, 1000)

button.onclick = () => {
  is24 = !is24
  setClock()
  button.blur()
}

document.onkeyup = (e) => {
  if (e.code === 'Space') {
    is24 = !is24
    setClock()
  }
}

select.onchange = (e) => {
  utc = +e.target.value
  setClock()
  select.blur()
}

setClock()
