let inputText = document.getElementById('input_text');
let duplicate = document.getElementById('duplicateField');
inputText.addEventListener('input', () => {
    duplicate.innerHTML = inputText.value;
})

let buttonClear = document.getElementById('button_clear');

buttonClear.addEventListener('click', () => {
    console.log(inputText.value);
    inputText.value = "";
    duplicate.innerHTML = "";
})