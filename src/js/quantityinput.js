
const itemsNumber = document.querySelector('.quantity__input--input');
const btnIncrease = document.querySelector('.js--inputIncrease');
const btnDecrease = document.querySelector('.js--inputDecrease');
const maxValue = 5;
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
}

function decreaseNumber(input) {

    const currentPrice = Number(document.querySelector('.summary__price--value').innerHTML)
    const inputValue = Number(input.value);

    if(inputValue  > 1) {

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
}

btnIncrease.addEventListener('click', function(){
    increaseNumber(itemsNumber,maxValue);
})

btnDecrease.addEventListener('click', function(){
    decreaseNumber(itemsNumber);
})

