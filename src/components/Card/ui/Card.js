import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";
import { IconHeaderFavorite } from "../../Icons";
/**
 * Компонент карты товара
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} imageName Наименование изображения
 * @param {String} description Описания товара
 * @param {Number} price Цена товара в долларах
 * @return {String} HTML разметка карты товара
 */
export const Card= ({
  baseClass = "card",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  imageName = "",
  description = "",
  price = 0,
} = {}) => {
    return`
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "favoriteField")}">
            ${Button({ type: "link", text: "", extraClasses: ["isIcon"], icon: IconHeaderFavorite })}
        </div>
        <div class="${getCN(baseClass, "imgWrapper")}">
            <img src="../../../../assets/images/${imageName}.jpg" class="${getCN(baseClass, "image")}">
        </div>
        <div class="${getCN(baseClass, "descriptionContainer")}">
            <span class="${getCN(baseClass, "description")}">${description}</span>
            <span class="${getCN(baseClass, "price")}">$${price}</span>
            ${Button({ text: "Buy Now" })}
        </div>
    </div>
    `
}