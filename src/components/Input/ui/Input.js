import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент кнопки
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} type Тип интупа
 * @param {String} placeholder Содежимое заднего фона инпута
 * @return {String} HTML разметка кнопки
 */
export const Input = ({
  baseClass = "input",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  type = 'text',
  placeholder = '',
} = {}) => {
  return `
    <input type="${type}" placeholder="${placeholder}" class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
  `;
};
