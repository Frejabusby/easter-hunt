// A function that adds and remove the class "active" on the section you click on.
const toogle = () => {
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.toggle("active")
}

const closePopUp = () => {
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.remove("active")
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const shuffle = (a) => {
    for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  } return a
}

const random = (a) => {
  const xx = shuffle(numbers)
  console.log(xx)
  xx.slice(0, 11).forEach((num) => {
    document.getElementById(`hide-egg-${num}`).onclick = toogle
  })
}

document.getElementById("close-pop-up").onclick = closePopUp
random()
