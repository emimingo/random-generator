let inputMin = document.querySelector('#input-min');
let inputMax = document.querySelector('#input-max');
let btnGenerate = document.querySelector('#btn-generate');
let result = document.querySelector('.tag-result');

btnGenerate.addEventListener('click', () => {
    let min = +inputMin.value;
    let max = +inputMax.value;

    let isValid = checkInput(min, max);

    if(!isValid){
        showError();
        return;
    }
    let random = generateRandom(min, max);
    showRandom(random);
});

function checkInput(min, max){
    let isValidNumber = true;
    
    if(isNaN(min) || isNaN(max) || (min > max) || (min < 0) || (max < 0) || !Number.isInteger(min) || !Number.isInteger(max)){
        isValidNumber = false;
    }
    return isValidNumber; 
}

function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function showRandom(num){
    result.textContent = num;
}

function showError(){
    result.textContent = 'ERROR';
}
