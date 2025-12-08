import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";

/**
 * Компонент карточки продукта
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} productImg Название фото товара без расширения
 * @param {String} title Заголовок товара
 * @param {String} description Описание товара
 * @param {String} titleMedium Часть заголовок товара с font-weight:medium
 * @param {String} type Тип карточки (small/medium/large)
 * @param {String} backColor Цвет фона (white, grayLight, grayDark)
 * @return {String} HTML разметка карточки продукта
 */
export const Product = ({
  baseClass = "product",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  productImg = "",
  title = "",
  description = "",
  titleMedium = "",
  type = "small",
  backColor = "white",
} = {}) => {
  extraClasses = [...extraClasses, backColor, type]
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "imgWrapper", extraClasses)}">
            <img src="../../../assets/images/${productImg}.png" alt="/" class="${getCN(baseClass, "image")}"></img>
        </div>
        <div class="${getCN(baseClass, "content", extraClasses)}">
            <h2 class="${getCN(baseClass, "title", extraClasses)}">
                ${title} ${titleMedium ? `<span class="${getCN(baseClass, "title", ["med"])}">${titleMedium}</span>` : ""}
            </h2>
            <span class="${getCN(baseClass, "description")}">${description}</span>
            ${type === "large" ? Button({ text: "Shop Now", extraClasses: ["isLight"]}) : ""} 
        </div>
    </div>
  `;
};
