import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";
/**
 * Компонент кнопки
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} imageName Наименвание изображения
 * @param {String} title Заголовок товара
 * @param {String} description Описания товара
 * @return {String} HTML разметка подробной карты товара
 */
export const BigCard= ({
  baseClass = "bigCard",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  imageName = "",
  height = 0,
  title= "",
  description = "",
}) => {
    return`
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "imgWrapper")}">
            <img width="360" height="${height}px" src="../../../../assets/images/${imageName}.png" class="${getCN(baseClass, "image")}">
        </div>
        <div class="${getCN(baseClass, "descriptionWrapper")}">
            <span class="${extraClasses === "isGrayDark" ? getCN(baseClass, "title") : getCN(baseClass, "title", ["white"])}">${title}</span>
            <span class="${getCN(baseClass, "description")}">${description}</span>
            ${extraClasses === "isGrayDark" ? Button({  text: "Shop Now", extraClasses: ["isLight"] }) : Button({  text: "Shop Now", extraClasses: ["isBackBlack"] })}
        </div>
    </div>
    `
}