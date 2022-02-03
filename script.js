class Slider {
    constructor(src) {
        this.src = src
    }

    static count = 0;

    addImg() {
        let getDivSlider = document.querySelector('.slider');
        getDivSlider.insertAdjacentHTML('beforeend', `<img src = ${this.src}> </img>`)
    }

    static sliderNext() {
        let getBtnNext = document.querySelector('.next');
        getBtnNext.addEventListener('click' , () => {
            let getDivSliderImg = document.querySelectorAll('.slider img');
            if( this.count == getDivSliderImg.length - 1) {
                for(let item of getDivSliderImg) {
                    item.style.marginLeft = 0 + 'px'
                }
                this.count = 0
            } else {
                getDivSliderImg[this.count].style.marginLeft = -250 + 'px'
                this.count += 1
            }
        })
    }

    static sliderPrev() {
        let getBtnPrev = document.querySelector('.prev');
        getBtnPrev.addEventListener('click', () => {
            let getDivSliderImg = document.querySelectorAll('.slider img');
            if (this.count == 0) {
                for(let item of getDivSliderImg) {
                    item.style.marginLeft = -250 + 'px'
                }
                getDivSliderImg[getDivSliderImg.length -1].style.marginLeft = 0 + 'px';
                this.count = getDivSliderImg.length - 1
            } else {
                getDivSliderImg[this.count -1].style.marginLeft = 0 + 'px';
                this.count -=1
            }
        })
    }
}

let slider = [
    new Slider('./img/1.jpg'),
    new Slider('./img/2.jpg'),
    new Slider('./img/3.jpg'),
    new Slider('./img/4.jpg'),
]


slider.forEach((item) => {
    item.addImg();
})

Slider.sliderNext();
Slider.sliderPrev();






