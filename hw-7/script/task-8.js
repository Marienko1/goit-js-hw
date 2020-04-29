let createBox = document.querySelector('button[data-action="render"]');
let removeBox = document.querySelector('button[data-action="destroy"]');
let ammount = document.querySelector('#controls > input');
let boxContainer = document.querySelector('#boxes');

function getRandomRGB() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

createBox.addEventListener("click", data => {
    data = ammount.value;
    let w = 30;
    let h = 30;
    for (let i = 0; i < data; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.display = 'block'
        newDiv.style.marginTop = '3px';
        newDiv.style.width = `${w}px`
        w = w + 10;
        newDiv.style.height = `${h}px`
        h = h + 10;
        newDiv.style.backgroundColor = getRandomRGB();
        boxContainer.appendChild(newDiv);
    }
});

removeBox.addEventListener("click", () => {
    let createdDiv = boxContainer.lastElementChild;
    while (createdDiv) {
        boxContainer.removeChild(createdDiv);
        createdDiv = boxContainer.lastElementChild;
    }
})