export class BurgerButtonModel {
  static selectors = {
    instance: "[data-js-burgerButton]",
    list: "[data-js-burgerButton-list]",
  };

  static classes = {
    activeList: "burgerButton__list--isActive",
  };

  constructor() {
    this.instance = document.querySelector(
      BurgerButtonModel.selectors.instance
    );
    if (this.instance) {
      this.list = this.instance.querySelector(BurgerButtonModel.selectors.list);

      this.#bindEvents();
    }
  }

  toggleList() {
    this.list.classList.toggle(BurgerButtonModel.classes.activeList);
  }

  #bindEvents() {
    if (this.instance) {
      this.instance.addEventListener("click", () => {
        this.toggleList();
      });
    }
  }
}
