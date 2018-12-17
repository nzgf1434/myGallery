export default class Engine{
    constructor(nodesForControl, indexCurrentSlide, dataObj){
        this.prevButton = document.querySelector('.lg-prev');
        this.nextButton = document.querySelector('.lg-next');
        this.index = indexCurrentSlide;
        this.data = dataObj;
        this.nodes = Array.from(nodesForControl);
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        this.prevButton.addEventListener('click', this.prevSlide.bind(this));
        this.subHeaderEl = document.querySelector('.lg-sub-html > h4');
        this.subTextEl = document.querySelector('.lg-sub-html > p');
        this.currentIndexEl = document.getElementById('lg-counter-current');
    }

    nextSlide(){
        let lastIndex = this.index;
        this.index = (this.index === this.nodes.length - 1) ? 0 : ++this.index;
        this.nodes[lastIndex].classList.toggle('show');
        this.nodes[lastIndex].classList.remove('lg-current');

        this.nodes[this.index].classList.add('lg-current');
        this.nodes[this.index].classList.toggle('show');
        this.currentIndexEl.textContent = this.index + 1;

        // Change subtitles
        this.subHeaderEl.textContent = this.data.slideText[this.index].header;
        this.subTextEl.textContent = this.data.slideText[this.index].text;


    };

    prevSlide(){
        this.currentIndexEl.textContent = (this.index === 0) ? this.nodes.length : this.index;
        let lastIndex = this.index;
        this.index = (this.index === 0) ? this.nodes.length - 1 : --this.index;
        this.nodes[lastIndex].classList.toggle('show');
        this.nodes[lastIndex].classList.remove('lg-current');

        this.nodes[this.index].classList.add('lg-current');
        this.nodes[this.index].classList.toggle('show');
        
        // Change subtitles
        this.subHeaderEl.textContent = this.data.slideText[this.index].header;
        this.subTextEl.textContent = this.data.slideText[this.index].text;
        
    }
}