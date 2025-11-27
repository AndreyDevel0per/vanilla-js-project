import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

export const Button = ({
  baseClass = "button",
  buttonText = "Default button",
  // extraClasses = [],
  extraAttrs = [],
  utilClasses = [],
} = {}) => {
  return `
      <button class="${baseClass} ${utilClasses.join(" ")}" ${getGeneratedAttrs(extraAttrs)}>
        ${buttonText}
      </button>
    `;
};
