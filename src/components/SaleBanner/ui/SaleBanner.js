import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";

/**
 * Компонент кнопки
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка баннера распродажи
 */
export const SaleBanner = ({
  baseClass = "saleBanner",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "imgWrapper")}">
            <img src="../../../assets/images/saleBanner.jpg" alt="/" class="${getCN(baseClass, "image")}"></img>
        </div>
        <div class="${getCN(baseClass, "content")}">
            <div class="${getCN(baseClass, "contentWrapper")}">
                <h1 class="${getCN(baseClass, "title")}">Big Summer <span class="${getCN(baseClass, "title", ["medium"])}">Sale</span></h1>
                <span class="${getCN(baseClass, "description")}">Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
            </div>
            ${Button({  text: "Shop Now", extraClasses: ["isBackBlack"] })}
        </div>
    </div>
  `;
};
