const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

//     ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Нам нужно три ссылки: на две кнопки и на боди

const refs = {
    body: document.body,
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector ('[data-action="stop"]')
}
console.log(refs.body);
//Добавляем слушателя событий
refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

let intervalId = null;

//Случайный цвет из массива
// function onStartClick() {
//     intervalId = setInterval(() => {
//         refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
//     }, 1000);
//     refs.startBtn.disabled = true;
//     console.log("start");
// };

//Случайный цвет
function onStartClick() {
  intervalId = setInterval(() => {
      refs.body.style.backgroundColor = randomColor();
  }, 1000);
  refs.startBtn.disabled = true;
  console.log("start");
};

function onStopClick() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    console.log("stop");
};

//Добавим функцию выбора случайного цвета
function randomColor() {
  return `rgb(${randomIntegerFromInterval(0,255)}, 
  ${randomIntegerFromInterval(0,255)}, 
  ${randomIntegerFromInterval(0,255)})`
};

