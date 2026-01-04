import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Input } from "../../Input";

/**
 * Компонент интупа со значком поиска
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @param {String} icon Иконка
 * @return {String} HTML разметка интупа со значком поиска
 */
export const SearchInput = ({
  baseClass = "searchInput",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  icon = ""
} = {}) => {
  return `
  <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
    <span class="${getCN(baseClass, "svg")}">
        ${icon()}
    </span>
    ${Input({ placeholder: "Search", utilClasses: ["withLoop"] })}
  </div>  
  `;
};
