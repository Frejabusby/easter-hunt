// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  const easterEgg = document.getElementById("easter-egg")
  easterEgg.classList.toggle("active")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("hide-egg-1").onclick = toggle
document.getElementById("hide-egg-2").onclick = toggle
document.getElementById("hide-egg-3").onclick = toggle
