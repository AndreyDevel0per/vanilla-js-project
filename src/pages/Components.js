import { Button } from "../components/Button";
import { IconArrowDown } from "../components/Icons";
import { Slider } from "../components/Slider";
import { Section } from "../components/Section/index.js";

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
            </div>`,
        })}
        ${Section({
          title: "Slider",
          children: `
            ${Slider()}`,
        })}
      </main>
    `;
};
