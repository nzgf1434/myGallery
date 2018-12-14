export default class Engine{
    constructor(nodesForControl, indexCurrentSlide){
        this.prevButton = document.querySelector('.lg-prev');
        this.nextButton = document.querySelector('.lg-next');
        this.index = indexCurrentSlide;
        this.nodes = Array.from(nodesForControl);
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        this.prevButton.addEventListener('click', this.prevSlide.bind(this));
    }

    nextSlide(){
        let lastIndex = this.index;
        this.index = (this.index === this.nodes.length - 1) ? 0 : ++this.index;
        this.nodes[lastIndex].classList.toggle('show');
        this.nodes[lastIndex].classList.remove('lg-current');

        this.nodes[this.index].classList.add('lg-current');
        this.nodes[this.index].classList.toggle('show');
    };

    prevSlide(){
        let lastIndex = this.index;
        this.index = (this.index === 0) ? this.nodes.length - 1 : --this.index;
        this.nodes[lastIndex].classList.toggle('show');
        this.nodes[lastIndex].classList.remove('lg-current');

        this.nodes[this.index].classList.add('lg-current');
        this.nodes[this.index].classList.toggle('show');
    }
}