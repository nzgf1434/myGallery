export default class Gallery{
    constructor(arrSlides, markupObj, dataObj, settings){

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
        // Delete Gallery
        document.querySelector('.lg-outer').addEventListener('click', this.destroyGallery);
    }
    // В каком классе должен быть этот метод?
    destroyGallery(e){
        e.preventDefault();
        console.log(e.target);
        if (e.target.classList.contains('lg-img-wrap') | e.target.classList.contains('lg-close')){
            
            let elForDel1 = document.querySelector('.lg-outer');
            let elForDel2 = document.querySelector('.lg-backdrop');
            document.querySelector('.lg-outer').parentElement.removeChild(elForDel1);
            document.querySelector('.lg-backdrop').parentElement.removeChild(elForDel2);
            document.body.classList.remove('lg-on');
        }
       };
}