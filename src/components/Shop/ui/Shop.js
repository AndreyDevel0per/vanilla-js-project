import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент магазина
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка магазина
 */
export const Shop = ({
  baseClass = "shop",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  // const Cards = [
  //   { name: "Iphone14pro", description: "Apple iPhone 14 Pro Max 128GB Deep Purple", price: 900 },
  //   { name: "camera6k", description: "Blackmagic Pocket Cinema Camera 6k", price: 2535 },
  //   { name: "appleWatch", description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ", price: 399 },
  //   { name: "podsMax", description: "AirPods Max Silver Starlight Aluminium ", price: 549 },
  //   { name: "galaxyWatch6", description: "Samsung Galaxy Watch6 Classic 47mm Black", price: 369 },
  //   { name: "ZFold5", description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: 1799 },
  //   { name: "budsFE", description: "Galaxy Buds FE <br> Graphite", price: 99.99 },
  //   { name: "IPad9", description: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021", price: 398 },
  //   { name: "ZFold5", description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: 1799 },
  // ];

  // const CardsHTML = Cards.map(card => 
  //   `<li class="${getCN(baseClass, "item")}">
  //     ${Card({ imageName: card.name, description: card.description, price: card.price })}
  //   </li>`
  // ).join('');

  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" data-js-shop ${getGeneratedAttrs(extraAttrs)}>
      <div class="${getCN(baseClass, "container")}" data-js-shop-container>
        asdadsads
      </div>
      <div class="${getCN(baseClass, "pagination")}" data-js-shop-pagination>
      </div>
    </div>
  `;
};
