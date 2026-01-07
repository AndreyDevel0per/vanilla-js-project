export class SliderModel {
  static selectors = {
    instance: "[data-js-slider]",
    container: "[data-js-slider-container]",
    wrapper: "[data-js-slider-wrapper]",
    slide: "[data-js-slider-slide]",
    buttonPrev: "[data-js-navigation-prev]",
    buttonNext: "[data-js-navigation-next]",
  };

  constructor(options = {}) {
    this.instance = document.querySelector(SliderModel.selectors.instance);

    this.config = {
      visibleSlides: options.visibleSlides || 6,
      containerWidth: options.containerWidth || 1120,
      ...options
    };

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
      this.containerWidth = this.config.containerWidth;
      this.visibleSlides = this.config.visibleSlides;
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
    this.container.style.width = `${this.containerWidth}px`;
  }

  #calculateSlideWidth() {
    // Ограничиваем visibleSlides количеством слайдов, если оно больше
    const actualVisibleSlides = Math.min(this.visibleSlides, this.slides.length);
    
    // Правильно рассчитываем максимальную ширину слайда
    const maxSlideWidth = this.containerWidth / actualVisibleSlides - this.gap * (actualVisibleSlides - 1) / actualVisibleSlides;

    this.slides.forEach((item) => {
      item.style.maxWidth = `${maxSlideWidth}px`;
      item.style.flex = `0 0 ${maxSlideWidth}px`; // Добавляем flex-basis
    });

    this.slideWidths = Array.from(this.slides).map(() => {
      return maxSlideWidth; // Используем одинаковую ширину для всех слайдов
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
    const maxPosition = this.#getMaxPosition();
    
    if (maxPosition <= 0) {
      return;
    }

    if (this.currentPosition >= maxPosition) {
      this.currentPosition = 0;
    } else {
      this.currentPosition++;
    }

    this.#applyTransform();
  }

  goPrevSlide() {
    const maxPosition = this.#getMaxPosition();
    
    if (maxPosition <= 0) {
      return;
    }

    if (this.currentPosition <= 0) {
      this.currentPosition = maxPosition;
    } else {
      this.currentPosition--;
    }

    this.#applyTransform();
  }

  #getMaxPosition() {
    // Используем Math.min чтобы visibleSlides не превышало количество слайдов
    const actualVisibleSlides = Math.min(this.visibleSlides, this.slides.length);
    
    if (this.slides.length <= actualVisibleSlides) {
      return 0;
    }

    return this.slides.length - actualVisibleSlides;
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