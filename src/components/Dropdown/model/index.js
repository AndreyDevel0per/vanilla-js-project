export class DropdownModel {
  static selectors = {
    instance: "[data-js-dropdown]",
    button: "[data-js-button]",
    buttonIcon: "[data-js-button-icon]",
    wrapper: "[data-js-dropdown-wrapper]",
    input: "[data-js-dropdown-input]",
    label: "[data-js-dropdown-label]",
  };

  static classses = {
    isActiceIcon: "button__icon--isActive",
    isActiveWrapper: "dropdown__wrapper--isActive",
    visuallyHidden: "visuallyHidden",
  };

  constructor () {
    this.instance = document.querySelector(DropdownModel.selectors.instance);

    if (this.instance) {
      this.buttons = this.instance.querySelectorAll(DropdownModel.selectors.button);
      this.buttonIcons = this.instance.querySelectorAll(DropdownModel.selectors.buttonIcon);
      this.wrappers = this.instance.querySelectorAll(DropdownModel.selectors.wrapper);
      this.inputs = this.instance.querySelectorAll(DropdownModel.selectors.input);

      this.#bindEvents();
    }
  }

  showFeatures(index) {
    this.buttonIcons[index].classList.toggle(DropdownModel.classses.isActiceIcon);
    this.wrappers[index].classList.toggle(DropdownModel.classses.isActiveWrapper);
  }

  showLabels(event) {
    const searchValue = event.target.value.toLowerCase().trim();
    const wrapper = event.target.closest(DropdownModel.selectors.wrapper);
    const labels = wrapper.querySelectorAll(DropdownModel.selectors.label);

    labels.forEach(label => {
      const labelText = label.textContent.toLowerCase();

      if (labelText.includes(searchValue)) {
        label.classList.remove(DropdownModel.classses.visuallyHidden);
      } else {
        label.classList.add(DropdownModel.classses.visuallyHidden);
      }
    })
  }

  #bindEvents() {
    if (this.buttons) {
      this.buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          this.showFeatures(index);
        })
      })
    };

    if (this.inputs) {
      this.inputs.forEach(input => {
        input.addEventListener("input", (event) => {
          this.showLabels(event);
        })
      })
    };
  }
}
