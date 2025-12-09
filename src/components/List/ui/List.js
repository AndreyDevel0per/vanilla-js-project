import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент листа
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {Array<String>} items Массив с текстом списка
 * @return {String} HTML разметка листа
 */
export const List = ({
  baseClass = "list",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  items =[],
} = {}) => {
  return `
    <ul class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        ${items.map(item => `
          <li class="${getCN(baseClass, "item")}">
              <a href="/" class="${getCN(baseClass, "link")}">
                ${item}
              </a>
          </li>
        `).join('')}
    </ul>
  `;
};