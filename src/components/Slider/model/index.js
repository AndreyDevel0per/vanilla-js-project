export class SliderModel {
  static selectors = {
    instance: "[data-js-slider]",
    container: "[data-js-slider-container]",
    wrapper: "[data-js-slider-wrapper]",
    slide: "[data-js-slider-slide]",
    buttonPrev: "[data-js-navigation-prev]",
    buttonNext: "[data-js-navigation-next]",
  };

  constructor() {
    this.instance = document.querySelector(SliderModel.selectors.instance);

    if (this.instance) {
      this.container = this.instance.querySelector(
        SliderModel.selectors.container
      );
      this.wrapper = this.instance.querySelector(SliderModel.selectors.wrapper);
      this.slides = this.instance.querySelectorAll(SliderModel.selectors.slide);
      this.buttonPrev = this.instance.querySelector(
        SliderModel.selectors.buttonPrev
      );
      this.buttonNext = this.instance.querySelector(
        SliderModel.selectors.buttonNext
      );

      this.count = 0;
      this.width;

      this.#init();
    }
  }

  #init() {
    this.#calculateWidth();
    this.rollSlider();
    this.#bindEvents();
  }

  #handleWindowResize() {
    this.#calculateWidth();
    this.rollSlider();
  }

  #calculateWidth() {
    this.width = this.container.offsetWidth;
    this.wrapper.style.width = this.width * this.slides.length + "px";
    this.slides.forEach((item) => {
      item.style.width = this.width + "px";
    });
  }

  rollSlider() {
    this.wrapper.style.transform = `translateX(-${this.count * this.width}px)`;
  }

  goNextSlide() {
    this.count++;

    if (this.count >= this.slides.length) {
      this.count = 0;
    }

    this.rollSlider();
  }

  goPrevSlide() {
    this.count--;

    if (this.count < 0) {
      this.count = this.slides.length - 1;
    }

    this.rollSlider();
  }

  #bindEvents() {
    window.addEventListener("resize", () => {
      this.#handleWindowResize();
    });

    if (this.buttonNext) {
      this.buttonNext.addEventListener("click", () => {
        this.goNextSlide();
      });
    }

    if (this.buttonPrev) {
      this.buttonPrev.addEventListener("click", () => {
        this.goPrevSlide();
      });
    }
  }
}
