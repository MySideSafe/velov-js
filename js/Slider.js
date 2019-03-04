class Slider {
    constructor(id, slides) {
        this.idSlider = id;
        this.slides = slides;

        this.domSlide = document.getElementById(this.idSlider);
        this.domSlider = this.domSlide.querySelector('figure img');
        this.domFigcaption = this.domSlide.querySelector('figure figcaption');
        this.domPrev = this.domSlide.querySelector('div .prevBtn i');
        this.domNext = this.domSlide.querySelector('div .nextBtn i');
        this.domPause = this.domSlide.querySelector('div .pauseBtn i');
        this.timer = null;
        this.imgNumber = 0;
        
    }


    /* Fonction bouton prev */
    prevImage() {
        this.imgNumber--;
        if (this.imgNumber < 0) {
            this.imgNumber = this.slides.length - 1;
        }
        this.domSlider.src = this.slides[this.imgNumber].image;
        this.domFigcaption.textContent = this.slides[this.imgNumber].figcaption;
    }

    /* fonction bouton next */
    nextImage() {
            this.imgNumber++;
            if (this.imgNumber > (this.slides.length - 1)) {
                this.imgNumber = 0;
            }
            this.domSlider.src = this.slides[this.imgNumber].image;
            this.domFigcaption.textContent = this.slides[this.imgNumber].figcaption;
        }
        /* Fonction clavier */
    keyboard(e) {
            switch (e.keyCode) {
            case 37: // left
                this.nextImage();
                break;
            case 39: // right
                this.prevImage();
                break;
            case 32: // space (or any key)
                this.setTimer();
                break;
            }
        }
        /* Fonction slider auto + bouton play / pause */
    playPause() {
        if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.domPause.className = "far fa-play-circle";
    } else {
        this.timer = setInterval(this.nextImage.bind(this), 2000);
        this.domPause.className = "far fa-stop-circle";
    }
    }
    
    listeners(){
    document.addEventListener('keydown', this.keyboard.bind(this));
    this.domPrev.addEventListener('click', this.prevImage.bind(this));
    this.domNext.addEventListener('click', this.nextImage.bind(this));
    this.domPause.addEventListener('click', this.playPause.bind(this));
    
    this.playPause();
    }
}

