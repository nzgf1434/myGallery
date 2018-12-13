export default class Slide{
    constructor(src, index){
        this.src = src;
        this.index = index;
        this.markup = `<div class="lg-item lg-item${this.index}"><div class="lg-img-wrap">::before<img class="lg-object lg-image" src="${this.src}"></div></div>`;
    }
    showSlide(){
        document.querySelector(`.lg-item${this.index}`).classList.toggle('.show');
    }
}