import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент кнопки
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} text Текст кнопки
 * @param {String} type Тип кнопки (button/link)
 * @param {String} href Ссылка для типа link
 * @param {Function} icon Изображение
 * @return {String} HTML разметка кнопки
 */
export const Button = ({
  baseClass = "button",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  text = "Default text",
  type = "",
  href = "",
  icon = "",
} = {}) => {
  return type === "link"
    ? `
      <a role="button" href="${href}" class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <span class="${getCN(baseClass, "label")}">${text}</span>
        ${icon && `<span class="${getCN(baseClass, "icon")}">${icon()}</span>`}
      </a>
    `
    : `
      <button class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <span class="${getCN(baseClass, "label", utilClasses)}">${text}</span>
        ${icon && `<span class="${getCN(baseClass, "icon")}">${icon()}</span>`}
      </button>
    `;
};
