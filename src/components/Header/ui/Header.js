import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { IconHeaderFavorite, IconHeaderProfile, IconHeaderCart, IconLogo } from "../../Icons";
import { Input } from "../../Input";
import { Button } from "../../Button";

/**
 * Компонент заголовка
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
      <span>
        ${IconLogo()}
      </span>
      ${Input({ placeholder: "Search"})}
        <nav class="${getCN(baseClass, "menu")}">
          <ul class="${getCN(baseClass, "list")}">
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", text: "Home", extraClasses: ["isNavElem"] })}
            </li>
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", text: "About", extraClasses: ["isNavElem"] })}
            </li>
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", text: " Contact Us", extraClasses: ["isNavElem"] })}
            </li>
            <li class="${getCN(baseClass, "item")}">
              ${Button({ type: "link", text: "Blog", extraClasses: ["isNavElem"] })}
            </li>
          </ul>
        </nav>
        <div class="${getCN(baseClass, "actions")}">
          ${Button({ type: "link", text: "", extraClasses: ["isHeaderIcon"], icon: IconHeaderFavorite })}
          ${Button({ type: "link", text: "", extraClasses: ["isHeaderIcon"], icon: IconHeaderCart })}
          ${Button({ type: "link", text: "", extraClasses: ["isHeaderIcon"], icon: IconHeaderProfile })}
        </div>
    </header>
  `;
};
