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
 * @param {String} dropdownTitle Название drop дауна
 * @param {Array<{Object<{name: string, value: number}>}>} dropdownOptions Массив объектов названий и количества
 * @return {String} HTML разметка dropdown
 */
export const Dropdown = ({
  baseClass = "dropdown",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  dropdownTitle = "",
  dropdownOptions = [],
} = {}) => {
  const options = dropdownOptions.map((item) => 
    `
      <label class="${getCN(baseClass, "label")}" data-js-dropdown-label>
        <input type="checkbox" class="${getCN(baseClass, "checkbox")}">
        <span class="${getCN(baseClass, "text")}">${item.name}</span>
        <span class="${getCN(baseClass, "quantity")}">${item.quantity}</span>
      </label>
    `).join("")

    

  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" data-js-dropdown ${getGeneratedAttrs(extraAttrs)}>
      ${dropdownTitle && Button({ text: dropdownTitle, extraClasses: ["isBorderBottom"], icon: IconArrowClose })}
      <div class="${getCN(baseClass, "wrapper")}" data-js-dropdown-wrapper>
        ${dropdownOptions.length > 0
          ? `<input type="text" placeholder="Search" class="${getCN(baseClass, "input")}" data-js-dropdown-input>
              ${options}`
          : `<span class="${getCN(baseClass, "emptyMessage")}">There are no options to search</span>`
        }
      </div>
    </div>
  `;
};