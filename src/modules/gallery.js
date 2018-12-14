export default class Gallery{
    constructor(arrSlides, settings){

        document.body.insertAdjacentHTML('beforeend', '<div class="lg-backdrop"></div>');

        this.controls = '<div class="lg-actions">' +
        '<div class="lg-prev lg-icon">' + settings.prevHtml + '</div>' +
        '<div class="lg-next lg-icon">' + settings.nextHtml + '</div>' +
        '</div>';

        this.subHtmlCont = '<div class="lg-sub-html"></div>';
             
        this.subHtmlCont = '<div class="lg-sub-html"></div>';

        this.template = '<div class="lg-outer"><div class="lg"><div class="lg-inner">' + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span><div id="lg-counter"><span id="lg-counter-current">1</span> / <span id="lg-counter-all">4</span></div></div>' +
        this.controls + this.subHtmlCont + '</div>' + '</div>';

        // Adding general gallery markup
        document.body.insertAdjacentHTML('beforeend', this.template);

        // Adding slides in general gallery markup
        let containerForSlides = document.querySelector('.lg-inner');
        arrSlides.map((item) => containerForSlides.appendChild(item.el));

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
            document.body.classList.remove('lg-on')
        }
       };
}