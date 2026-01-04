import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";
/**
 * Компонент подробной карты
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} imagePath Путь до изображения
 * @param {String} title Заголовок товара
 * @param {String} description Описания товара
 * @return {String} HTML разметка подробной карты товара
 */
export const BigCard = ({
  baseClass = "bigCard",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  imagePath = "",
  title = "",
  description = "",
}) => {
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "imgWrapper")}">
            <img src="${imagePath}" class="${getCN(baseClass, "image")}">
        </div>
        <div class="${getCN(baseClass, "descriptionWrapper")}">
            <span class="${getCN(baseClass, "title", extraClasses)}">${title}</span>
            <span class="${getCN(baseClass, "description")}">${description}</span>
            ${Button({ text: "Shop Now", extraClasses: [...extraClasses, "isLight"] })}
        </div>
    </div>
    `;
};
