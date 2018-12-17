export default class Gallery{
    constructor(arrSlides, markupObj, dataObj, index, settings){
        this.index = index;

        // Hide slides from html
        document.querySelector('#lightgallery').style.display = 'none';
        // Create Gallery DOM-elements
        document.body.insertAdjacentHTML('beforeend', markupObj.markup.divBackdrop);
        document.body.insertAdjacentHTML('beforeend', markupObj.markup.generalGalleryMarkup);
        
        // Adding slides in general gallery markup
        let containerForSlides = document.querySelector('.lg-inner');
        arrSlides.map((item) => containerForSlides.appendChild(item.el));
        // Setting src for img
        let arrImg = document.querySelectorAll('.lg-img-wrap > img');
        for (let i = 0; i < arrImg.length; i++){
            arrImg[i].setAttribute('src', dataObj.src[i]);
        };

        // Set slide-counter first slide
        document.getElementById('lg-counter-current').textContent = this.index + 1;

        // Mark and show first slide
        let el = document.querySelectorAll('.lg-item')[this.index];
        el.classList.add('lg-current');
        el.classList.toggle('show');

        document.querySelector('.lg-sub-html').insertAdjacentHTML('afterbegin', dataObj.subStructure);
        document.querySelector('.lg-sub-html > h4').textContent = dataObj.slideText[this.index].header;
        document.querySelector('.lg-sub-html > p').textContent = dataObj.slideText[this.index].text;
        
         // Mark - Gallery exist
         document.body.classList.add('lg-on'); 

        // Delete Gallery
        document.querySelector('.lg-outer').addEventListener('click', this.destroyGallery);
    }
    
    destroyGallery(e){
        e.preventDefault();
        if (e.target.classList.contains('lg-img-wrap') | e.target.classList.contains('lg-close')){
            let elForDel1 = document.querySelector('.lg-outer');
            let elForDel2 = document.querySelector('.lg-backdrop');
            document.querySelector('.lg-outer').parentElement.removeChild(elForDel1);
            document.querySelector('.lg-backdrop').parentElement.removeChild(elForDel2);
            document.body.classList.remove('lg-on');
            document.querySelector('#lightgallery').style.display = 'block';
        };
        
    };

    getSlides(){
        return document.querySelectorAll('.lg-item');
    }
    
}