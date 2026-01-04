export class ShopModel {
  static selectors = {
    instance: "[data-js-shop]",
    container: "[data-js-slider-container]",
    pagination: "[data-js-shop-pagination]",
  };

  constructor() {
    this.instance = document.querySelector(ShopModel.selectors.instance);

    this.#bindEvents();
  }

  #bindEvents() {

  }
}
