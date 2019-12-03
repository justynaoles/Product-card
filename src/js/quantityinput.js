const itemsNumber = document.querySelectorAll('.quantity__input--input');
const btnIncrease = document.querySelectorAll('.js--inputIncrease');
const btnIncrease = document.querySelectorAll('.js--inputDecrease');

console.log(itemsNumber);

function increaseNumber(input) {

    const inputValue = input.value;

    console.log("wartość to: ", inputValue);
}

increaseNumber(itemsNumber);