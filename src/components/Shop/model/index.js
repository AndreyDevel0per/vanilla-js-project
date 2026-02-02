import { IconArrowPrev, IconArrowNext } from "../../Icons";

export class ShopModel {
  static selectors = {
    instance: "[data-js-shop]",
    container: "[data-js-shop-container]",
    pagination: "[data-js-shop-pagination]",
  };

  static classes = {
    isActiveShopButton: "shop__paginationButton--isActive",
    shopButton: "shop__paginationButton",
    shopItem: "shop__item",
  }

  static errors = {
    errorLoad: "Ошибка загрузки",
  }

  static elements = {
    button: "button",
  }

  static URL = "https://dc4b0f545fe29518.mokky.dev/goods";

  constructor(itemsPerPage) {
    this.instance = document.querySelector(ShopModel.selectors.instance);
    if (this.instance) {
      this.container = this.instance.querySelector(ShopModel.selectors.container);
      this.paginationContainer = this.instance.querySelector(ShopModel.selectors.pagination);

      this.goods = [];
      this.currentPage = 1;
      this.totalPages = 1;
      this.itemsPerPage = itemsPerPage || 9;

      this.#loadGoods();
    }
  }

  #loadGoods() {
    fetch(ShopModel.URL)
      .then(response => {
        if (!response) {
          throw new Error(ShopModel.errors.errorLoad);
        }
        return response.json();
      })
      .then(goods => {
        this.goods = goods;
        this.totalPages = Math.ceil(this.goods.length / this.itemsPerPage);
        this.#renderGoods();
        this.#renderPagination();
      })
      .catch(error => {
        console.error(ShopModel.errors.errorLoad, error)
      });
  }

  #renderGoods() {
    if (!this.container) return 

    const currentGoods = this.#getGoodsForCurrentPage();
    this.container.innerHTML = "";

    currentGoods.forEach((good) => {
      const goodElement = this.#createGoodElement(good)
      this.container.appendChild(goodElement)
    })
    
  }

  #renderPagination() {
    if (!this.paginationContainer || this.totalPages <= 1) return

    this.paginationContainer.innerHTML = "";

    for (let i = 1; i <= this.totalPages; i++) {
      const button = document.createElement(ShopModel.elements.button);
      button.className = `${ShopModel.classes.shopButton} ${i === this.currentPage ? ShopModel.classes.isActiveShopButton : ""}`;
      button.textContent = i;
      
      button.addEventListener('click', () => {
        this.#goToPage(i);
      });

      this.paginationContainer.appendChild(button);
    }

    const prevButton = document.createElement(ShopModel.elements.button);
    prevButton.innerHTML = IconArrowPrev();
    prevButton.style.marginRight = "1rem"
    prevButton.addEventListener('click', () => {
      this.#goToPage(this.currentPage - 1);
    });

    const nextButton = document.createElement(ShopModel.elements.button);
    nextButton.innerHTML = IconArrowNext();
    nextButton.style.marginLeft = "1rem"
    nextButton.addEventListener('click', () => {
      this.#goToPage(this.currentPage + 1);
    });

    this.paginationContainer.prepend(prevButton);
    this.paginationContainer.appendChild(nextButton);
  }

  #getGoodsForCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.goods.slice(startIndex, endIndex);
  }

  #createGoodElement(good) {
    const div = document.createElement('div');
    div.className = ShopModel.classes.shopItem;
    div.innerHTML = `
      <h3>${good.name || " "}</h3>
      <p>Цена: ${good.price || 0} $</p>
      ${good.image ? `<img src="${good.image}" alt="${good.name}" style="max-width: 200px;">` : ''}
    `;
    return div;
  }

  #goToPage(page) {
    if (page === this.currentPage) return;

    if (page < 1) {
      page = this.totalPages;
    } else if (page > this.totalPages) {
      page = 1;
    }

    this.currentPage = page;
    this.#renderGoods();
    this.#renderPagination();
    
    window.scrollTo({
      top: this.container.offsetTop - 100,
      behavior: 'smooth'
    });
  }
}
