const test = () => {
  const audio = document.getElementById("audio")
  audio.play()
console.log("TEST")
}

test()



// A function that adds and remove the class "active" on the section you click on.
const toogle = () => {
  document.documentElement.scrollTop = 0;
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.toggle("active")
  window.addEventListener('scroll', noscroll)
}

// const toogle1 = () => {
//   const easterEgg = document.getElementById("easter-egg")
//   easterEgg.classList.toggle("active-66")
// }

const closePopUp = () => {
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.remove("active")
  window.removeEventListener('scroll', noscroll)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const numberAgain = numbers.slice(12, 20)
// console.log(numbers)
// console.log(numberAgain)

const shuffle = (a) => {
    for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  } return a
}

// const random = (a) => {
//   const randomNumber = shuffle(numbers)
//   const emptyNumbers = randomNumber.slice(0, 11)
//   emptyNumbers.forEach((num) => {
//     document.getElementById(`hide-egg-${num}`).onclick = toogle1
//   })
//   randomNumber.forEach((num) => {
//     document.getElementById(`hide-egg-${num}`).onclick = toogle
//   })
// }

const random = (a) => {
  const randomNumber = shuffle(numbers)
  randomNumber.slice(0, 11).forEach((num) => {
    const test = document.getElementById(`hide-egg-${num}`)
    test.onclick = toogle
  })
}

const noscroll = () => {
  window.scrollTo(0, 0)
}

document.getElementById("close-pop-up").onclick = closePopUp
random()
