import { getCN } from "../../../lib/utils/getCN";
import { getGeneratedAttrs } from "../../../lib/utils/getGeneratedAttrs";
import { IconLogo } from "../../Icons";
import { Input } from "../../Input";

export const Header = ({
  baseClass = "header",
  extraClasses = [],
  utilClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <header class="${getCN(baseClass, "", extraClasses, utilClasses)}" ${getGeneratedAttrs(extraAttrs)}>
      <span>
        ${IconLogo()}
      </span>
      ${Input()}
      <div>
        <nav>
        </nav>
      </div>
    </header>
  `;
};
