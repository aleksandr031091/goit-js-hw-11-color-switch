const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onBtnStart);
refs.stopBtn.addEventListener("click", onBtnRemove);

let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

function onBtnStart() {
  interval ??= setInterval(() => setRandomColor(), 1000);
  refs.startBtn.disabled = true;
}

function onBtnRemove() {
  clearInterval(interval);
  interval = null;
  refs.startBtn.disabled = false;
}
