import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { IconHeaderFavorite, IconHeaderProfile, IconHeaderCart, IconLogo, IconLoop } from "../../Icons";
import { Button } from "../../Button";
import { SearchInput } from "../../SearchInput";

/**
 * Компонент Header
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка заголовка магазина
 */
export const Header = ({
  baseClass = "header",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <header class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
      <div class="${getCN(baseClass, "logo")}">
        ${IconLogo()}
      </div>
      <div class="${getCN(baseClass, "search")}">
        ${SearchInput({ icon: IconLoop })}
      </div>
        <nav class="${getCN(baseClass, "menu")}">
          <ul class="${getCN(baseClass, "list")}">
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", href: "/", text: "Home", extraClasses: ["isLink"] })}
            </li>
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", href: "/", text: "About", extraClasses: ["isLink"] })}
            </li>
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", href: "/", text: " Contact Us", extraClasses: ["isLink"] })}
            </li>
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", href: "/", text: "Blog", extraClasses: ["isLink"] })}
            </li>
          </ul>
        </nav>
        <div class="${getCN(baseClass, "actions")}">
          ${Button({ type: "link", href: "/", text: "", extraClasses: ["isIcon"], icon: IconHeaderFavorite })}
          ${Button({ type: "link", href: "/", text: "", extraClasses: ["isIcon"], icon: IconHeaderCart })}
          ${Button({ type: "link", href: "/", text: "", extraClasses: ["isIcon"], icon: IconHeaderProfile })}
        </div>
        <div class="${getCN(baseClass, "burgerMenu")}">
          <button class="${getCN(baseClass, "burgerButton")}">
            <span class="${getCN(baseClass, "burgerLine")}"></span>
            <span class="${getCN(baseClass, "burgerLine")}"></span>
            <span class="${getCN(baseClass, "burgerLine")}"></span>
          </button>
        </div>
    </header>
  `;
};
