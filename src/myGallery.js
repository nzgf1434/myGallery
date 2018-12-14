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

    const markup = new Markup();
    const data = new Data();
        
   function buildGallery(e){
    if (e.target.tagName === 'IMG' && e.target.parentElement.parentElement.parentElement.id === 'lightgallery' && !document.body.classList.contains('lg-on')){
        e.preventDefault();
        // Create n-th models
        for (let i = 0; i < itemsForSlider.length; i++){
            models.push(new Slide(markup));
        };

        // Create Gallery
        gallery = new Gallery(models, markup, data, settings); // Нужно ли хранить ссылку на нее и где? 
        // Возможно при уничтожении галереи есть смысл в дальнейшем не строить ее заново, а брать по ссылке?

        // Mark - Gallery exist
        document.body.classList.add('lg-on');  

        // Put index of clicked img to gallery
        Array.from(document.querySelectorAll('#lightgallery > li')).map((item, index) => {
            if (item.children[0].children[0].getAttribute('src') === e.target.getAttribute('src')){
                gallery.index = index;
                let el = document.querySelectorAll('.lg-item')[index];
                el.classList.add('lg-current');
                el.classList.toggle('show');
            }
        });

        let engine = new Engine(gallery.getSlides(), gallery.index);


        // Prevent adding doubled el-s for next Gallery start
        models = [];     // Возможно это д.б. в DestroyGallery()
        gallery.index = 0; // Возможно это д.б. в DestroyGallery()
     }

   };

    document.querySelector('#lightgallery').addEventListener('click', buildGallery);

    // document.querySelector('.lg-outer').addEventListener('click', gallery.destroyGallery);
   

};

