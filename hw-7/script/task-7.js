const fontControl = document.querySelector("#font-size-control");
const transfomedText = document.querySelector("#text");

fontControl.addEventListener("input", size => {
    transfomedText.style.fontSize = `${size.target.value}px`;
});