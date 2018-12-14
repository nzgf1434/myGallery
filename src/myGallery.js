import Slide from './modules/slide.js';
import Gallery from './modules/gallery.js';
window.myGallery = function(id, sets){
    const settings = sets;
    const models = [];
    const markup = `<div class="lg-img-wrap"><img class="lg-object lg-image" src=""></div>`;
    const itemsForSlider = Array.from(document.querySelector(`#${id}`).children);
    let gallery = null;
        
   function buildGallery(e){
    if (e.target.tagName === 'IMG' && e.target.parentElement.parentElement.parentElement.id === 'lightgallery' && !document.body.classList.contains('lg-on')){
        e.preventDefault();
        // Create n-th models
        for (let i = 0; i < itemsForSlider.length; i++){
            models.push(new Slide(itemsForSlider[i].getAttribute("data-src"), markup));
        };

        // Create Gallery
        gallery = new Gallery(models, settings); // Нужно ли хранить ссылку на нее и где? 
        // Возможно при уничтожении галереи есть смысл в дальнейшем не строить ее заново, а брать по ссылке?
        document.body.classList.add('lg-on');  // Mark - Gallery exist
     }

   };

    document.querySelector('#lightgallery').addEventListener('click', buildGallery);

    // document.querySelector('.lg-outer').addEventListener('click', gallery.destroyGallery);


};

