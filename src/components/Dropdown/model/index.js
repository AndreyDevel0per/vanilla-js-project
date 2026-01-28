export class DropdownModel {
  static selectors = {
    instance: "[data-js-dropdown]",
    button: "[data-js-button]",
    buttonIcon: "[data-js-button-icon]",
    wrapper: "[data-js-dropdown-wrapper]",
    input: "[data-js-dropdown-input]",
    label: "[data-js-dropdown-label]",
  };

  static classes = {
    isActiceIcon: "button__icon--isActive",
    isActiveWrapper: "dropdown__wrapper--isActive",
    visuallyHidden: "visuallyHidden",
  };

  constructor () {
    this.instance = document.querySelectorAll(DropdownModel.selectors.instance);

    if (this.instance) {
      this.#initAll();
    }
  }

  #initAll() {
    document.querySelectorAll(DropdownModel.selectors.instance).forEach(element => {
      new DropdownInstance(element);
    });
  }
}


class DropdownInstance {
  constructor(instanceElement) {
    this.instance = instanceElement;
    this.button = this.instance.querySelector(DropdownModel.selectors.button);
    this.buttonIcon = this.instance.querySelector(DropdownModel.selectors.buttonIcon);
    this.wrapper = this.instance.querySelector(DropdownModel.selectors.wrapper);
    this.input = this.instance.querySelector(DropdownModel.selectors.input);

    this.#bindEvents();
  }
  
  showFeatures() {
    this.buttonIcon.classList.toggle(DropdownModel.classes.isActiceIcon);
    this.wrapper.classList.toggle(DropdownModel.classes.isActiveWrapper);
  }

  showLabels(event) {
    const searchValue = event.target.value.toLowerCase().trim();
    const wrapper = event.target.closest(DropdownModel.selectors.wrapper);
    const labels = wrapper.querySelectorAll(DropdownModel.selectors.label);

    labels.forEach(label => {
      const labelText = label.textContent.toLowerCase();

      if (labelText.includes(searchValue)) {
        label.classList.remove(DropdownModel.classes.visuallyHidden);
      } else {
        label.classList.add(DropdownModel.classes.visuallyHidden);
      }
    })
  }

  #bindEvents() {
    if (this.button) {
      this.button.addEventListener("click", () => {
          this.showFeatures();
      })
    };

    if (this.input) {
      this.input.addEventListener("input", (event) => {
          this.showLabels(event);
      })
    };
  }
}