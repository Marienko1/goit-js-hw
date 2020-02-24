const total = 100;
const ordered = 50; //prompt("введите кол-во товара");

let available = total - ordered;

if (available > 0) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else console.log("На складе недостаточно твоаров!");