// Theme Changer Code 
const firstThemeBtn = document.querySelector('#first');
const secondThemeBtn = document.querySelector('#second');
const thirdThemeBtn = document.querySelector('#third');
const ballBtn = document.querySelector('.ball');

firstThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '5px';
    document.querySelector('body').classList.remove('Theme2');
    document.querySelector('body').classList.remove('Theme3');
})

secondThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '33px';
    document.querySelector('body').classList.remove('Theme1');
    document.querySelector('body').classList.remove('Theme3');
    document.querySelector('body').classList.add('Theme2');
})

thirdThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '55px';
    document.querySelector('body').classList.remove('Theme1');
    document.querySelector('body').classList.remove('Theme2');
    document.querySelector('body').classList.add('Theme3');
})



// Calculation Code 
let output = document.getElementById('output');

function appendNumber(number) {
    output.value += number;
}

function deleteNumber() {
    output.value = output.value.slice(0, -1);
}

function reset() {
    output.value = '';
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}
