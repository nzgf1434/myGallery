import Slide from './modules/slide.js';
import Gallery from './modules/gallery.js';
import Markup from './modules/markup';
import Data from './modules/data';
import Engine from './modules/engine';
window.myGallery = function(id, sets){
    const settings = sets;
    let models = [];
    const itemsForSlider = Array.from(document.querySelector(`#${id}`).children);
    let gallery = null;
    let firstClickedSlideIndex = null;
    const markup = new Markup();
    const data = new Data();
        
   function buildGallery(e){
    if (e.target.tagName === 'IMG' && e.target.parentElement.parentElement.parentElement.id === 'lightgallery' && !document.body.classList.contains('lg-on')){
        e.preventDefault();
        // Create n-th models
        for (let i = 0; i < itemsForSlider.length; i++){
            models.push(new Slide(markup));
        };

        // Put index of clicked img to gallery
        Array.from(document.querySelectorAll('#lightgallery > li')).map((item, index) => {
            if (item.children[0].children[0].getAttribute('src') === e.target.getAttribute('src')){
                firstClickedSlideIndex = index;
            }
        });

         // Create Gallery
         gallery = new Gallery(models, markup, data, firstClickedSlideIndex, settings); 
      
         // Create Engine for Gallery
        let engine = new Engine(gallery.getSlides(), gallery.index, data);


        // Prevent adding doubled elements for next Gallery start
        models = [];     
        // gallery.index = 0; // Возможно это д.б. в DestroyGallery()
     }

   };

    document.querySelector('#lightgallery').addEventListener('click', buildGallery);

    // document.querySelector('.lg-outer').addEventListener('click', gallery.destroyGallery);
   

};

