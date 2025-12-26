import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Card } from "../../Card";

/**
 * Компонент слайдера
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка слайдера
 */
export const TabMenu = ({
  baseClass = "tabmenu",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
    const firstCards = [
      { name: "Iphone14pro", description: "Apple iPhone 14 Pro Max 128GB Deep Purple", price: 900 },
      { name: "camera6k", description: "Blackmagic Pocket Cinema Camera 6k", price: 2535 },
      { name: "appleWatch", description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ", price: 399 },
      { name: "podsMax", description: "AirPods Max Silver Starlight Aluminium ", price: 549 },
      { name: "galaxyWatch6", description: "Samsung Galaxy Watch6 Classic 47mm Black", price: 369 },
      { name: "ZFold5", description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: 1799 },
      { name: "budsFE", description: "Galaxy Buds FE <br> Graphite", price: 99.99 },
      { name: "IPad9", description: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021", price: 398 },
    ];

    const secondCards = [
      { name: "Iphone14pro", description: "Apple iPhone 14 Pro Max 128GB Deep Purple", price: 900 },
      { name: "camera6k", description: "Blackmagic Pocket Cinema Camera 6k", price: 2535 },
    ];

    const thirdCards = [
      { name: "ZFold5", description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: 1799 },
      { name: "budsFE", description: "Galaxy Buds FE <br> Graphite", price: 99.99 },
      { name: "IPad9", description: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021", price: 398 },
    ];

    const firstCardsHTML = firstCards.map(card => 
      `<li class="${getCN(baseClass, "item")}" data-js-slider-slide>
        ${Card({ imageName: card.name, description: card.description, price: card.price })}
      </li>`
    ).join('');

    const secondCardsHTML = secondCards.map(card => 
      `<li class="${getCN(baseClass, "item")}" data-js-slider-slide>
        ${Card({ imageName: card.name, description: card.description, price: card.price })}
      </li>`
    ).join('');

    const thirdCardsHTML = thirdCards.map(card => 
      `<li class="${getCN(baseClass, "item")}" data-js-slider-slide>
        ${Card({ imageName: card.name, description: card.description, price: card.price })}
      </li>`
    ).join('');
    

    return `
        <div class="${getCN(baseClass, "", extraClasses, ["containerMedium"])}" data-js-tabmenu ${getGeneratedAttrs(extraAttrs)}>
          <div class="${getCN(baseClass, "navigation")}">
                <a href="#" class="${getCN(baseClass, "link", ["isActive"])}" data-js-link>New Arrival</a>
                <a href="#" class="${getCN(baseClass, "link")}" data-js-link>Bestseller</a>
                <a href="#" class="${getCN(baseClass, "link")}" data-js-link>Featured Products</a>
          </div>
          <div class="${getCN(baseClass, "windows")}">
            <div class="${getCN(baseClass, "tab", ["isActive"])}" data-js-tab>
              <ul class="${getCN(baseClass, "wrapper")}">
                ${firstCardsHTML}
              </ul>
            </div>
            <div class="${getCN(baseClass, "tab", "isActive")}" data-js-tab>
              <ul class="${getCN(baseClass, "wrapper")}">
                ${secondCardsHTML}
              </ul>
            </div>
            <div class="${getCN(baseClass, "tab", "isActive")}" data-js-tab>
              <ul class="${getCN(baseClass, "wrapper")}">
                ${thirdCardsHTML}
              </ul>
            </div>
          </div>
        </div>
    `
}