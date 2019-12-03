

const url ='src/js/assets/chairs.json'
const owl = document.querySelector('.owl-carousel');
let colors;

fetch(url).then(data=> data.json()).then( data => {

    colors = data;

    console.log(colors[0].color)

    data.forEach(element => {
        
        const img = element.img;
        const owlItem = document.createElement('div');
        owlItem.classList.add('item');
        owlItem.style.backgroundImage="url("+img+")";


        owl.appendChild(owlItem);

    });

}).then( () => {

    $('.owl-carousel').owlCarousel({
 
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
    });

    const owlDots = [...document.querySelectorAll(".owl-dot span")];


    for (let i = 0; i<owlDots.length; i++) {

        owlDots[i].style.backgroundColor= colors[i].color;
    }

});

