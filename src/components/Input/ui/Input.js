import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";

/**
 * Компонент интупа
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {Boolean} isWithButton Есть ли кнопка apply
 * @param {String} type Тип интупа
 * @param {String} placeholder Содежимое плейсхолдера
 * @return {String} HTML разметка интупа
 */
//TODO Убрать wrapper ???
export const Input = ({
  baseClass = "input",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  isWithButton = false,
  type = "text",
  placeholder = "",
} = {}) => {
  return isWithButton
    ? `
  <div class="${getCN(baseClass, "wrapper")}">
    <input type="${type}" placeholder="${placeholder}" class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
    <span class="${getCN(baseClass, "buttonWrapper")}">
      ${Button({ text: "Apply", extraClasses: ["isLight", "isApply"], utilClasses: ["smallText"] })}
    </span>
  </div>
  `
    : `
  <div class="${getCN(baseClass, "wrapper", utilClasses)}">
    <input type="${type}" placeholder="${placeholder}" class="${getCN(baseClass, "", utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
  </div>
  `;
};
