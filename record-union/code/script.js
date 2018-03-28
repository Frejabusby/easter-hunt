const toogle = () => {
  document.documentElement.scrollTop = 0;
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.toggle("active")
  window.addEventListener('scroll', noscroll)
}

const closePopUp = () => {
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.remove("active")
  window.removeEventListener('scroll', noscroll)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const shuffle = (a) => {
    for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  } return a
}

const random = () => {
  const randomNumber = shuffle(numbers)
  randomNumber.slice(0, 12).forEach((num) => {
  document.getElementById(`hide-egg-${num}`).onclick = toogle
  })
}

const noscroll = () => {
  window.scrollTo(0, 0)
}

document.getElementById("close-pop-up").onclick = closePopUp
random()
