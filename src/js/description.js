const links = document.querySelectorAll('.ul__item');
const descriptions = document.querySelectorAll('.description__content');
const descriptionButton = document.querySelectorAll('.description_button');
const descriptionButtonArray = [...descriptionButton];
const descriptionsArray = [...descriptions];
const linksArray = [...links];


for (const button of descriptionButton) {

    button.addEventListener('click', function(e) {

        const currentBtn = e.target;
        const parentBtn = currentBtn.parentNode;
        const isActive = parentBtn.classList.contains('description__content_active');
        const parentBtnData = parentBtn.dataset.id;

        console.log(isActive, parentBtnData);

        //jesli nie ma klasy active:
        //1. wywalamy klase active kazdemu description__content
        //2. dajemy klase active parentBtn
        //3. ul__item wywalamy klase active
        //4. ul__item dajemy temu active ktory ma data-id === parentBtnData

        if(!isActive) {

            descriptionsArray.forEach(element=>{

                element.classList.remove('description__content_active');
            });

            parentBtn.classList.add('description__content_active');

            linksArray.forEach(element=>{


                const elementChildData = element.querySelector('.item__link').dataset.id;

                if( elementChildData === parentBtnData) {

                    element.classList.add('ul__item_active')
                }

                else {

                    element.classList.remove('ul__item_active');
                }

        
            });



        }
    })

}



for (const link of links) {

    link.addEventListener('click',function(e){

        e.preventDefault();
        const currentLink = e.target;
        const parentLink = currentLink.parentNode;
        const isActive = e.target.classList.contains('ul__item_active');
        const currentLinkData = e.target.dataset.id;

        if(!isActive) {


           linksArray.forEach(link =>{
               link.classList.remove('ul__item_active')
           });

           parentLink.classList.add('ul__item_active')

            for( let i =0; i<descriptionsArray.length; i++) {

    
                if( descriptionsArray[i].dataset.id === currentLinkData) {
    
                    descriptionsArray[i].classList.add('description__content_active')
                }
    
                else {
    
                    descriptionsArray[i].classList.remove('description__content_active')
                }
            }

        }

    })
}

