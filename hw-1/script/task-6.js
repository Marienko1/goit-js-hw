  let input;

let total = 0;

while (true) {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
}

alert(`Общая сумма чисел равна ${total}`);