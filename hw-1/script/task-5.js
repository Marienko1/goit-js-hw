let country = prompt("Введите страну доставки");
let price;
let yourCountry;
if (country === null) {
  alert("Отменено пользователем!");
} else {
  let covertedCountry=country.toLowerCase();

  switch (covertedCountry) {
    case "китай":
      yourCountry = "Китай";
      price = 100;
      break;

    case "чили":
      yourCountry = "Чили";
      price = 250;
      break;

    case "австралия":
      yourCountry = "Австралию";
      price = 170;
      break;

    case "индия":
      yourCountry = "Индию";
      price = 80;
      break;

    case "ямайка":
      yourCountry = "Ямайку";
      price = 120;
      break;
    default:
      yourCountry = false;
      price = false;
  }

  if (yourCountry) {
    alert(`Доставка в ${yourCountry} будет стоить ${price} кредитов`);
  } else alert("В вашей стране доставка не доступна");
}