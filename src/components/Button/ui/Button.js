import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";

export const Button = ({
  baseClass = "button",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
  buttonText = "Default button",
} = {}) => {
  return `
      <button class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        ${buttonText}
      </button>
    `;
};
