const form = document.querySelector('.product__form');
const btnSubmit = document.querySelector('.js--submitForm');


btnSubmit.addEventListener('click',function(e){

    e.preventDefault();
    const itemsNumber = document.querySelector('.quantity__input--input').value;
 
    console.log(itemsNumber)

    formValidation(itemsNumber,1,5)

});



function formValidation( inputValue, min, max){



    if(inputValue >= min && inputValue <= max) {

        const ver1 =" produkt.";
        const ver2 =" produkty.";
        const ver3= " produktów.";

        let finalVer;

        if (inputValue === 1) {

            finalVer = ver1;

        }

        else if (inputValue > 1 && inputValue <5) {

            finalVer = ver2;
        }

        else {

            finalVer = ver3;
        }

        alert("Dodałeś do koszyka: "+inputValue+finalVer)
        form.submit();
    }

    else {

       alertWrongNumber()

    }
}
