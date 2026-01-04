import { Button } from "../components/Button";
import { IconArrowDown,  IconArrowClose } from "../components/Icons";
import { Slider } from "../components/Slider";
import { Section } from "../components/Section/index.js";
import { Dropdown } from "../components/Dropdown/index.js";
import { Shop } from "../components/Shop/index.js";

export const Components = () => {
  return `
      <main>
        ${Section({
          title: "Buttons",
          children: `
            <div style="display: flex; gap: 1rem;">
              ${Button({ text: "Buy Now" })}
              ${Button({ text: "Shop Now", extraClasses: ["isLight"] })}
              ${Button({ text: "View More", extraClasses: ["isLight"], icon: IconArrowDown })}
              ${Button({ text: "Battery capacity", extraClasses: ["isBorderBottom"], icon: IconArrowClose })}
              ${Button({ text: "Brand", extraClasses: ["isBorderBottom"], icon: IconArrowClose })}
            </div>`,
        })}
        ${Section({
          title: "Slider",
          children: `
            ${Slider()}`,
        })}
        ${Section({
          title: "Dropdown",
          children: `
            ${Dropdown()}`,
        })}
        ${Section({
          title: "Shop",
          children: `
            ${Shop()}`,
        })}
      </main>
    `;
};
