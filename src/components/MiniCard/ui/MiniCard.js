import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент миникарточки
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} icon Иконка
 * @param {String} title Заголовок
 * @param {String} description Описание
 * @return {String} HTML разметка миникарточки
 */
export const MiniCard = ({
  baseClass = "miniCard",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  icon = "",
  title = "",
  description = "",
} = {}) => {
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        ${icon && `<span class="${getCN(baseClass, "icon", extraClasses)}">${icon()}</span>`}
        <div class="${getCN(baseClass, "content", extraClasses)}">
            <span class="${getCN(baseClass, "title", extraClasses)}">${title}</span>
            <span class="${getCN(baseClass, "description", extraClasses)}">${description}</span>
        </div>
    </div>
  `;
};
