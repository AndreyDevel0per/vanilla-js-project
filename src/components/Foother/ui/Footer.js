import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { List } from "../../List";
import { IconLogo, Icon404, IconFacebook, IconTiktok, IconInstagram } from "../../Icons";

/**
 * Компонент Footer
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка футера
 */
export const Footer = ({
  baseClass = "footer",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
  <footer class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
    <div class="${getCN(baseClass, "container")}">
      <div class="${getCN(baseClass, "infoWrapper")}">
        <a href="/" class="${getCN(baseClass, "logo")}">
          ${IconLogo()}
        </a>
        <span class="${getCN(baseClass, "text")}">
          We are a residential interior design firm located in Portland. Our boutique-studio offers more than
        </span>
      </div> 
      <div class="${getCN(baseClass, "lists")}">
        ${List({ items: ["Services", "Bonus program", "Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"] })}
        ${List({ items: ["Assistance to the buyer", "Find an order", "Terms of delivery", "Exchange and return of goods", "Guarantee", "Frequently asked questions", "Terms of use of the site"] })}
      </div>
    </div>
      <div class="${getCN(baseClass, "socials")}">
        <a href="/" class="${getCN(baseClass, "socialsItem")}">
          ${Icon404()}
        </a>
        <a href="/" class="${getCN(baseClass, "socialsItem")}">
          ${IconFacebook()}
        </a>
        <a href="/" class="${getCN(baseClass, "socialsItem")}">
          ${IconTiktok()}
        </a>
        <a href="/" class="${getCN(baseClass, "socialsItem")}">
          ${IconInstagram()}
        </a>
      </div>
  </footer>
  `;
};