const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonStop.disabled = true;
console.log(buttonStart, buttonStop);

let timerId = 0;
function onStartClick() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  timerId = setInterval(changeBackground, 1000);
}
function onStopClick() {
  buttonStart.disabled = !true;
  buttonStop.disabled = !false;
  clearInterval(timerId);
}
buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);

function changeBackground() {
  document.body.style.backgroundColor = getRandomHexColor();
}
console.log(buttonStart.disabled);
