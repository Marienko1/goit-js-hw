const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", text => {
    output.textContent = text.target.value;
    if (text.target.value == "") {
        output.textContent = "незнакомец";
    }
});