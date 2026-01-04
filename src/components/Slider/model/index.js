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

      this.currentPosition = 0;
      this.containerWidth = 1120;
      this.visibleSlides = 6;
      this.gap = parseInt(window.getComputedStyle(this.wrapper).gap) || 0;
      this.slideWidths = [];

      this.#init();
    }
  }

  #init() {
    this.#calculateContainerWidth();
    this.#calculateSlideWidth();
    this.#updateWrapperWidth();
    this.#applyTransform();
    this.#bindEvents();
  }

  #handleWindowResize() {
    this.#calculateContainerWidth();
    this.#calculateSlideWidth();
    this.#updateWrapperWidth();
    this.#applyTransform();
  }

  #calculateContainerWidth() {
    // this.containerWidth = this.container.offsetWidth;
    this.container.style.width = `${this.containerWidth}px`;
  }

  #calculateSlideWidth() {
    const maxSlideWidth =
      (this.containerWidth - this.gap * (this.visibleSlides - 1)) /
      this.visibleSlides;

    this.slides.forEach((item) => {
      item.style.maxWidth = `${maxSlideWidth}px`;
    });

    this.slideWidths = Array.from(this.slides).map((slide) => {
      return Math.min(slide.getBoundingClientRect().width, maxSlideWidth);
    });
  }

  #updateWrapperWidth() {
    const totalWidth =
      this.slideWidths.reduce((sum, width) => sum + width, 0) +
      this.gap * (this.slides.length - 1);
    this.wrapper.style.width = `${totalWidth}px`;
  }

  #applyTransform() {
    let offset = 0;
    for (let i = 0; i < this.currentPosition; i++) {
      offset += this.slideWidths[i] + this.gap;
    }

    this.wrapper.style.transform = `translateX(-${offset}px)`;
  }

  goNextSlide() {
    const maxPosition = Math.max(0, this.slides.length - this.visibleSlides);

    if (this.currentPosition >= maxPosition) {
      this.currentPosition = 0;
    } else {
      this.currentPosition++;
    }

    this.#applyTransform();
  }

  goPrevSlide() {
    const maxPosition = Math.max(0, this.slides.length - this.visibleSlides);

    if (this.currentPosition <= 0) {
      this.currentPosition = maxPosition;
    } else {
      this.currentPosition--;
    }

    this.#applyTransform();
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
