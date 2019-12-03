
const itemsNumber = document.querySelector('.quantity__input--input');
const btnIncrease = document.querySelector('.js--inputIncrease');
const btnDecrease = document.querySelector('.js--inputDecrease');
const maxValue = 5;


function increaseNumber(input, max) {

    const inputValue = Number(input.value);

    if(inputValue  < max) {

        const increasedValue = (inputValue + 1).toString()
        input.value = increasedValue;
    }
}

function decreaseNumber(input) {

    const inputValue = Number(input.value);

    if(inputValue  > 0) {

        const increasedValue = (inputValue - 1).toString()
        input.value = increasedValue;
    }
}

btnIncrease.addEventListener('click', function(){
    increaseNumber(itemsNumber,maxValue);
})

btnDecrease.addEventListener('click', function(){
    decreaseNumber(itemsNumber);
})

