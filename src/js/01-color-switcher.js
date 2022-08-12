const start = document.querySelector("button[data-start]");
const stop = document.querySelector('button[data-stop] ');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;
start.addEventListener("click", onStart);
stop.addEventListener('click', onStop)


function onStart() {
  timerId = setInterval(() => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000)
  start.setAttribute("disabled", true)
}

function onStop() {
  clearInterval(timerId)
  start.removeAttribute("disabled")
}