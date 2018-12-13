import Slide from './modules/slide.js';
import Gallery from './modules/gallery.js';
window.myGallery = function(id, sets){
    const settings = sets;
    const models = [];
    const markup = `<div class="lg-img-wrap"><img class="lg-object lg-image" src=""></div>`;
    const itemsForSlider = Array.from(document.querySelector(`#${id}`).children);
    let gallery = null;
    
   function buildGallery(e){
    if (e.target.tagName === 'IMG' && e.target.parentElement.parentElement.parentElement.id === 'lightgallery' && !gallery){
        e.preventDefault();
        // Create n-th models
        for (let i = 0; i < itemsForSlider.length; i++){
            models.push(new Slide(itemsForSlider[i].getAttribute("data-src"), markup));
        };
        
        // Create Gallery
        gallery = new Gallery(models, settings);
     }

   };

    document.querySelector('#lightgallery').addEventListener('click', buildGallery);

};

