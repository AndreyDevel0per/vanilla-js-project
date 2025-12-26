import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { IconArrowLeft, IconArrowRight, IconPhones, IconSmartWatches, IconCameras, IconHeadphones, IconComputers, IconGaming } from "../../Icons";
import { CategoryCard } from "../../../components/CategoryCard";

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
    const categories = [
    { name: "Phones", icon: IconPhones },
    { name: "Smart Watches", icon: IconSmartWatches },
    { name: "Cameras", icon: IconCameras },
    { name: "Headphones", icon: IconHeadphones },
    { name: "Computers", icon: IconComputers },
    { name: "Gaming", icon: IconGaming },
    
    { name: "Phones", icon: IconPhones },
    { name: "Smart Watches", icon: IconSmartWatches },
    { name: "Cameras", icon: IconCameras },
  ];

  const cardsHTML = categories.map(category => 
    `<li class="${getCN(baseClass, "item")}" data-js-slider-slide>
      ${CategoryCard({ categoryName: category.name, icon: category.icon })}
    </li>`
  ).join('');

  return `
    <div class="${getCN(baseClass, "", extraClasses, ["containerLarge"])}" data-js-slider ${getGeneratedAttrs(extraAttrs)}>
      <div class="${getCN(baseClass, "navigation")}">
        <span div class="${getCN(baseClass, "name")}">Browse By Category</span>
        <div class="${getCN(baseClass, "buttons")}">
          <button class="${getCN(baseClass, "navigationItem", ["prev"])}" data-js-navigation-prev>${IconArrowLeft()}</button>
          <button class="${getCN(baseClass, "navigationItem", ["next"])}" data-js-navigation-next>${IconArrowRight()}</button>
        </div>
      </div>
      <div class="${getCN(baseClass, "container")}" data-js-slider-container>
        <ul class="${getCN(baseClass, "wrapper")}" data-js-slider-wrapper>
          ${cardsHTML}
        </ul>
      </div>
    </div>
  `;
};
