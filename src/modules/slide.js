export default class Slide{
    constructor(src, markup){
        this.src = src;
        this.markup = markup;
        this.el = document.createElement('div');
        this.el.classList = 'lg-item';
        
        this.el.insertAdjacentHTML('afterBegin', markup);
        this.el.firstElementChild.firstElementChild.setAttribute('src', this.src);


    }
    // showSlide(){
    //     document.querySelector(`.lg-item${this.index}`).classList.toggle('.show');
    // }
}