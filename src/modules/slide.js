export default class Slide{
    constructor(markupObj){
        this.el = document.createElement('div');
        this.el.classList = 'lg-item';
        this.el.insertAdjacentHTML('afterBegin', markupObj.markup.slideMarkup);
    }
}