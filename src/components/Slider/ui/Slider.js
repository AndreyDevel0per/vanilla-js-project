import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

/**
 * Компонент слайдера
 * @param {String} baseClass Базовый класс
 * @param {Array<String>} extraClasses Массив с модификаторами
 * @param {Array<String>} utilClasses Массив с утилитарными классами
 * @param {Array<String>} extraAttrs Массив с дополнительными атрибутами
 * @return {String} HTML разметка слайдера
 */
export const Slider = ({
  baseClass = "slider",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" data-js-slider ${getGeneratedAttrs(extraAttrs)}>
      <div class="${getCN(baseClass, "container")}" data-js-slider-container>
        <ul class="${getCN(baseClass, "wrapper")}" data-js-slider-wrapper>
          <li class="${getCN(baseClass, "slide")}" data-js-slider-slide>
            <div class="${getCN(baseClass, "item")}">1</div>
          </li>
          <li class="${getCN(baseClass, "slide")}" data-js-slider-slide>
            <div class="${getCN(baseClass, "item")}">2</div>
          </li>
          <li class="${getCN(baseClass, "slide")}" data-js-slider-slide>
            <div class="${getCN(baseClass, "item")}">3</div>
          </li>
          <li class="${getCN(baseClass, "slide")}" data-js-slider-slide>
            <div class="${getCN(baseClass, "item")}">4</div>
          </li>
          <li class="${getCN(baseClass, "slide")}" data-js-slider-slide>
            <div class="${getCN(baseClass, "item")}">5</div>
          </li>
        </ul>
      </div>
      <div class="${getCN(baseClass, "navigation")}">
        <button class="${getCN(baseClass, "navigationItem", ["prev"])}" data-js-navigation-prev>Prev</button>
        <button class="${getCN(baseClass, "navigationItem", ["next"])}" data-js-navigation-next>Next</button>
      </div>
    </div>
  `;
};
