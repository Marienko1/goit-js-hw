let input;
let numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  if (input === null) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    break;
  }
  input = Number(input);
  numbers.push(input);
}

console.log(`Общая сумма чисел равна ${total}`);