import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";
import { IconArrowClose } from "../../Icons";

/**
 * Компонент dropdown
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка dropdown
 */
export const Dropdown = ({
  baseClass = "dropdown",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" data-js-dropdown ${getGeneratedAttrs(extraAttrs)}>
      ${Button({ text: "Brand", extraClasses: ["isBorderBottom"], icon: IconArrowClose })}
      <div class="${getCN(baseClass, "wrapper")}" data-js-dropdown-wrapper>
        <input type="text" placeholder="Search" class="${getCN(baseClass, "input")}" data-js-dropdown-input>
        <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
          <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
          <span class="${getCN(baseClass, "text")}">Apple</span>
          <span class="${getCN(baseClass, "quantity")}">110</span>
        </label>
        <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
          <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
          <span class="${getCN(baseClass, "text")}">Samsung</span>
          <span class="${getCN(baseClass, "quantity")}">125</span>
        </label>
        <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
          <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
          <span class="${getCN(baseClass, "text")}">Xiaomi</span>
          <span class="${getCN(baseClass, "quantity")}">68</span>
        </label>
      </div>

      ${Button({ text: "Battery capacity", extraClasses: ["isBorderBottom"], icon: IconArrowClose })}
      <div class="${getCN(baseClass, "wrapper")}" data-js-dropdown-wrapper>
        <input type="text" placeholder="Search" class="${getCN(baseClass, "input")}" data-js-dropdown-input>
        <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
          <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
          <span class="${getCN(baseClass, "text")}">3000-4000 мАч</span>
          <span class="${getCN(baseClass, "quantity")}">70</span>
        </label>
        <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
          <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
          <span class="${getCN(baseClass, "text")}">4500-5000 мАч</span>
          <span class="${getCN(baseClass, "quantity")}">112</span>
        </label>
        <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
          <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
          <span class="${getCN(baseClass, "text")}">6000 мАч</span>
          <span class="${getCN(baseClass, "quantity")}">61</span>
        </label>
      </div>
    </div>
  `;
};
