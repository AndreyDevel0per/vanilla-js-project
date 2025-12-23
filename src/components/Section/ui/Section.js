import { getCN } from "../../../lib/utils/getCN.js";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs.js";

/**
 * Компонент секции страницы
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<{ name: string, value: any }>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} children Дочерние элементы
 * @param {String} title Текст заголовка
 * @return {String} HTML разметка секции
 */
export const Section = ({
  baseClass = "section",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  children = "",
  title,
} = {}) => {
  return `
    <section class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
      ${title ? `<h2 class="${getCN(baseClass, "title")}">${title}</h2>` : ""}
      <div class="${getCN(baseClass, "body")}">
        ${children}
      </div>
    </section>
  `;
};
