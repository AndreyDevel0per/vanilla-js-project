/**
 * Генерирует классы для компонентов
 * @param {String} baseClass Блок
 * @param {String} element Элемент
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @return {String} Строка классов формата "baseClass__element--extraClass utilClass"
 */
export const getCN = (
  baseClass = "",
  element = "",
  extraClasses = [],
  utilClasses = []
) => {
  let cssClass = `${baseClass}`;

  if (element) cssClass += `__${element}`;

  extraClasses.forEach((extraClass) => {
    cssClass += ` ${baseClass}${element ? "__" : ""}${element}--${extraClass}`;
  });

  utilClasses.forEach((utilClass) => {
    cssClass += ` ${utilClass}`;
  });

  return cssClass;
};
