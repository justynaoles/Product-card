
const itemsNumber = document.querySelector('.quantity__input--input');
const btnIncrease = document.querySelector('.js--inputIncrease');
const btnDecrease = document.querySelector('.js--inputDecrease');
const maxValue = 5;
const minValue= 1;
const startPrice = document.querySelector('.summary__price--value').innerHTML;





function increaseNumber(input, max) {

    const inputValue = Number(input.value);

    if(inputValue  < max) {

        let finalPrice = Number(startPrice);
        finalPrice = finalPrice * (inputValue + 1);

        let formattedPrice = finalPrice.toString();
        let numberDecimal = formattedPrice.indexOf('.')
        let priceUpToDecimal = formattedPrice.slice(0,numberDecimal);
        let afterDecimal = formattedPrice.slice(numberDecimal+1);
        let roundedPrice;

        if(numberDecimal === -1) {

          roundedPrice = formattedPrice+".00";
        }

        else {

            if(afterDecimal.length < 2) {

                roundedPrice=priceUpToDecimal+"."+afterDecimal+"0"
    
            }
    
            else {
    
                roundedPrice = formattedPrice;
            }
        }


        document.querySelector('.summary__price--value').innerHTML = roundedPrice;
        const increasedValue = (inputValue + 1).toString()
        input.value = increasedValue;

    }

    else {

        alertWrongNumber();
    }
}

function decreaseNumber(input, max, min) {

    const currentPrice = Number(document.querySelector('.summary__price--value').innerHTML)
    const inputValue = Number(input.value);

    console.log(inputValue);

    if(inputValue  > min && inputValue <= max) {

        const decreasedValue = (inputValue - 1).toString()
        input.value = decreasedValue;
        const updatedPrice = currentPrice - startPrice;

        let formattedPrice = updatedPrice.toString();
        let numberDecimal = formattedPrice.indexOf('.')
        let priceUpToDecimal = formattedPrice.slice(0,numberDecimal);
        let afterDecimal = formattedPrice.slice(numberDecimal+1);
        let roundedPrice;

        if(numberDecimal === -1) {

          roundedPrice = formattedPrice+".00";
        }

        else {

            if(afterDecimal.length < 2) {

                roundedPrice=priceUpToDecimal+"."+afterDecimal+"0"
    
            }
    
            else {
    
                roundedPrice = formattedPrice;
            }
        }
      

        document.querySelector('.summary__price--value').innerHTML =roundedPrice;
    
    }


    else {

        alertWrongNumber();
    }
}

btnIncrease.addEventListener('click', function(){
    increaseNumber(itemsNumber,maxValue);
})

btnDecrease.addEventListener('click', function(){
    decreaseNumber(itemsNumber,maxValue,minValue);
})



function alertWrongNumber() {

    alert("Minimalna ilość to: "+minValue+", a maksymalna to: "+maxValue+". Użyj proszę liczby z tego zakresu :)")

    itemsNumber.value="1"
}

