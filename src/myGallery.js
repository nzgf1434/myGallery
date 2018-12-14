import Slide from './modules/slide.js';
import Gallery from './modules/gallery.js';
import Markup from './modules/markup';
import Data from './modules/data';
window.myGallery = function(id, sets){
    const settings = sets;
    let models = [];
    const itemsForSlider = Array.from(document.querySelector(`#${id}`).children);
    let gallery = null;

    const markup = new Markup();
    const data = new Data();
        
   function buildGallery(e){
    if (e.target.tagName === 'IMG' && e.target.parentElement.parentElement.parentElement.id === 'lightgallery' && !document.body.classList.contains('lg-on')){
        e.preventDefault();
        // Create n-th models
        for (let i = 0; i < itemsForSlider.length; i++){
            models.push(new Slide(markup));
        };
        console.log(models);

        // Create Gallery
        gallery = new Gallery(models, markup, data, settings); // Нужно ли хранить ссылку на нее и где? 
        // Возможно при уничтожении галереи есть смысл в дальнейшем не строить ее заново, а брать по ссылке?
        document.body.classList.add('lg-on');  // Mark - Gallery exist
        models = [];
     }

   };

    document.querySelector('#lightgallery').addEventListener('click', buildGallery);

    // document.querySelector('.lg-outer').addEventListener('click', gallery.destroyGallery);


};

