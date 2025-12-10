import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { Button } from "../../Button";

export const Banner = ({
  baseClass = "banner",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <div class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
        <div class="${getCN(baseClass, "container")}">
            <div class="${getCN(baseClass, "text")}">
                <span class="${getCN(baseClass, "uptitle")}">
                    Pro.Beyond.
                </span>
                <h2 class="${getCN(baseClass, "title")}">
                    IPhone 14 
                    <span class="${getCN(baseClass, "title", ["semiBold"])}">
                        Pro
                    </span>
                </h2>
                <span  class="${getCN(baseClass, "description")}">
                    Created to change everything for the better. For everyone
                </span>
                <span>
                    ${Button({ text: "Shop Now", extraClasses: ["isGrayDark"] })}
                </span>
            </div>
            <div class="${getCN(baseClass, "imgWrapper")}"> 
                <img src="../../../../assets/images/Iphone14PRO.png" class="${getCN(baseClass, "image")}">
            </div>
        </div>
    </div>
  `;
};
