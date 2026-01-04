export class TabMenuModel {
  static selectors = {
    instance: "[data-js-tabmenu]",
    link: "[data-js-link]",
    tab: "[data-js-tab]",
  };

  static classes = {
    activeLink: "tabmenu__link--isActive",
    activeTab: "tabmenu__tab--isActive",
  };

  constructor() {
    this.instance = document.querySelector(TabMenuModel.selectors.instance);

    if (this.instance) {
      this.links = this.instance.querySelectorAll(TabMenuModel.selectors.link);
      this.tabs = this.instance.querySelectorAll(TabMenuModel.selectors.tab);

      this.#bindEvents();
    }
  }

  goNextTab(link, index) {
    this.links.forEach((l) =>
      l.classList.remove(TabMenuModel.classes.activeLink)
    );
    this.tabs.forEach((t) =>
      t.classList.remove(TabMenuModel.classes.activeTab)
    );

    link.classList.add(TabMenuModel.classes.activeLink);
    this.tabs[index].classList.add(TabMenuModel.classes.activeTab);
  }

  #bindEvents() {
    if (this.links) {
      this.links.forEach((link, index) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          this.goNextTab(link, index);
        });
      });
    }
  }
}
