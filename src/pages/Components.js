import { Button } from "../components/Button";
import { IconArrowDown } from "../components/Icons";
import { Slider } from "../components/Slider";
import { Section } from "../components/Section/index.js";
import { Input } from "../components/Input/index.js";
import { SearchInput } from "../components/SearchInput/index.js";
import { IconLoop } from "../components/Icons";

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
        ${Section({
          title: "Input",
          children: `
            <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${Input({ isWithButton: true, placeholder: "Enter Card Number" })}
            ${Input({  placeholder: "Code" })}
            ${SearchInput({ icon: IconLoop })}
            `
        })}
      </main>
    `;
};
