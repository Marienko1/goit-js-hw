const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (let i = 0; i < allLogins.length; i++) {
    if (login === allLogins[i]) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (login === null) {
    return "Вы вышли из системы!!!";
  }
  if (isLoginValid(login) === false) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  if (isLoginUnique(allLogins, login) === false) {
    return "Такой логин уже используется!!!";
  } else allLogins.push(login);
  return `Логин ${login} успешно добавлен! Текущие действующие логины: ${allLogins}`;
};

console.log(addLogin(allLogins, "Ajax"));
console.log(addLogin(allLogins, "robotGoogles"));
console.log(addLogin(allLogins, "Zod"));
console.log(addLogin(allLogins, "jqueryisextremelyfast"));

// console.log(addLogin(allLogins, prompt("Введите логин ")));
