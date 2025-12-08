import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент карты-категории
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} icon Иконка
 * @param {String} categoryName Наименование категории капрточки
 * @return {String} HTML разметка карты-категории товара
 */
export const CategoryCard= ({
  baseClass = "categoryCard",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  icon = "",
  categoryName = "",
} = {}) => {
    return`
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "productWrapper")}">
            ${categoryName && `<span class="${getCN(baseClass, "icon")}">${icon()}</span>`}
            ${categoryName && `<span class="${getCN(baseClass, "name")}">${categoryName}</span>`}
        </div>
    </div>
    `
}