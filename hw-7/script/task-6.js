const validation = document.querySelector("#validation-input");

validation.addEventListener("focusout", () => {
    if (validation.value.length != validation.dataset.length) {
        validation.className = "invalid";
    } else {
        validation.className = "valid";
    }
});