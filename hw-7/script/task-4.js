let counterValue = 0;
const displayValue = document.querySelector("#value");
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener("click", () => {
    counterValue += 1;
    displayValue.textContent = counterValue;
});

decrement.addEventListener("click", () => {
    counterValue -= 1;
    displayValue.textContent = counterValue;
});