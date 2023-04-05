const button = document.getElementById('button');
const display = document.getElementById('display')
let number = 0;

button.addEventListener('click', function () {
    number++;
    display.textContent = number;
})

// for button 2
const button2 = document.getElementById('button2');
const display2 = document.getElementById('display2')
let number2 = 0;

button2.addEventListener('click', function () {
    number2++;
    display2.textContent = number2;
})