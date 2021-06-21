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

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
  const color = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[color];
};

let interval = null;

refs.startBtn.addEventListener("click", () => {
  interval ??= setInterval(() => setRandomColor(), 1000);
  refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  refs.startBtn.disabled = false;
});
