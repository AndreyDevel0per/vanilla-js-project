import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Card } from "../../Card";

/**
 * Компонент табов
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {Array<String>} links Массив вкладок
 * @param {Array<Object>} content Массив элементов для отображения на вкладках
 * @return {String} HTML разметка табов
 */
export const TabMenu = ({
  baseClass = "tabmenu",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  links = [],
  content = [],

} = {}) => {

  const linksHTML = links
    .map(
      (tab, index) => 
        `<a href="#" class="${getCN(baseClass, "link", index === 0? ["isActive"] : "")}" data-js-link>
        ${tab}
      </a>`
    )
    .join("");

  const tabsHTML = content
    .map((cardsArray, index) => {
      const cardsHTML = cardsArray
        .map(card => {
          const cardHTML = Card({ 
            imageName: card.name, 
            description: card.description, 
            price: card.price 
          });
        return `<li class="${getCN(baseClass, "item")}" data-js-slider-slide>${cardHTML}</li>`;
      })
      .join('');
    
    return `
      <div class="${getCN(baseClass, "tab", index === 0 ? ["isActive"] : [])}" data-js-tab>
        <ul class="${getCN(baseClass, "wrapper")}">
          ${cardsHTML}
        </ul>
      </div>
    `;
  })
  .join('');

  return `
        <div class="${getCN(baseClass, "", extraClasses, ["containerMedium"])}" data-js-tabmenu ${getGeneratedAttrs(extraAttrs)}>
          <div class="${getCN(baseClass, "navigation")}">
            ${linksHTML}
          </div>
          <div class="${getCN(baseClass, "windows")}">
            ${tabsHTML}
          </div>
        </div>
    `;
};