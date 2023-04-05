const button = document.getElementById('button');
const display = document.getElementById('display')
let number = 0;

button.addEventListener('click', function () {
    number++;
    display.textContent = number;
})