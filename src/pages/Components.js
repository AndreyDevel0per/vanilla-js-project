import { BurgerButton } from "../components/BurgerButton";
import { Button } from "../components/Button";
import { IconArrowDown } from "../components/Icons";

export const Components = () => {
  return `
      <div>
        <div>
          Components Page
        </div>
        <div style="display: flex; gap: 1rem;">
          ${BurgerButton()}
        </div>
        <a href="/">Go home</a>
      </div>
    `;
};
