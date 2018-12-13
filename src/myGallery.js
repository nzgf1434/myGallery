import Slide from './modules/slide.js';
window.myGallery = function(id, settings){
    
    const models = [];
    const itemsForSlider = Array.from(document.querySelector(`#${id}`).children);
    for (let i = 0; i < itemsForSlider.length; i++){
        models.push(new Slide(itemsForSlider[i].getAttribute("data-src"), i));
    };

    console.log(models);
};

