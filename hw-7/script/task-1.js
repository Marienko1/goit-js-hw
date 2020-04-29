let category = document.querySelectorAll("li.item");

console.log(`В списке ${category.length} категории.`);

function printTitleAndLenght(item) {
    console.log(`Категория:${item.querySelector("h2").innerHTML}`);
    console.log(
        `Количество элементов: ${item.querySelectorAll("ul > li").length}`
    );
}

category.forEach(printTitleAndLenght);