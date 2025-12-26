import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";

/**
 * Компонент бургер-кнопки
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка бургер-кнопки
 */
export const BurgerButton = ({
  baseClass = "burgerButton",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
  <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)} data-js-burgerButton>
    <button class="${getCN(baseClass, "button")}">
      <span class="${getCN(baseClass, "line")}"></span>
      <span class="${getCN(baseClass, "line")}"></span>
      <span class="${getCN(baseClass, "line")}"></span>
    </button>
    <nav class="${getCN(baseClass, "menu")}">
      <ul class="${getCN(baseClass, "list")}" data-js-burgerButton-list>
        <li class="${getCN(baseClass, "item")}">
          ${Button({ type: "link", href: "/", text: "Home", extraClasses: ["isLink", ""] })}
        </li>
        <li class="${getCN(baseClass, "item")}">
          ${Button({ type: "link", href: "/products", text: "About", extraClasses: ["isLink"] })}
        </li>
        <li class="${getCN(baseClass, "item")}">
          ${Button({ type: "link", href: "/components", text: " Contact Us", extraClasses: ["isLink"] })}
        </li>
        <li class="${getCN(baseClass, "item")}">
          ${Button({ type: "link", href: "/notFound", text: "Blog", extraClasses: ["isLink"] })}
        </li>
      </ul>
    </nav>
  </div>
  `
};