const credits = 23580;

const pricePerDroid = 300;

let droidAmmount = prompt("Введите число дроидов которое вы хотите купить !!");

if (droidAmmount === null) {
  console.log("Отменено пользователем!");
} else if (isNaN(droidAmmount)) {
  console.log("Введите числовое значение!!!!");
} else {
  let totalPrice = pricePerDroid * droidAmmount;
  let difference = credits - totalPrice;

  if (difference >= 0) {
    console.log(`Вы купили ${droidAmmount} дроидов, на счету осталось ${difference} кредитов.`);
  } else console.log("Недостаточно средств на счету!");
}