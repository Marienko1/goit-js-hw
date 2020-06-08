const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
];


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');

start.addEventListener("click", () => {
    generateBck = setInterval(() => {
        let randomIndex = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = `${colors[randomIndex]}`;
        start.disabled = true;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(generateBck);
    start.disabled = false;
});