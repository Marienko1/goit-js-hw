"use strict";

const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы"
];

const listOfIngridients = document.querySelector("#ingredients");

ingredients.forEach(item => {
    let node = document.createElement("li");
    node.textContent = item;
    listOfIngridients.appendChild(node);
});