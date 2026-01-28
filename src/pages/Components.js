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
            ${Dropdown({
              dropdownTitle: "Brand",
              dropdownOptions: [
                { name: "Apple", quantity: 110 },
                { name: "Samsung", quantity: 125 },
                { name: "Xiaomi", quantity: 68 },
                { name: "Poco", quantity: 44 },
                { name: "OPPO", quantity: 36 },
                { name: "Honor", quantity: 10 },
                { name: "Motorola", quantity: 34 },
                { name: "Nokia", quantity: 22 },
                { name: "Realme", quantity: 35 }
              ],
            })}
            ${Dropdown({
              dropdownTitle: "Battery capacity",
              dropdownOptions: [
                { name: "Up to 3000 mAh", quantity: 25 },
                { name: "3001-4000 mAh", quantity: 42 },
                { name: "4001-5000 mAh", quantity: 68 },
                { name: "5001-6000 mAh", quantity: 34 },
                { name: "6000+ mAh", quantity: 12 }
              ],
            })}
            ${Dropdown({
              dropdownTitle: "Screen type",
              dropdownOptions: [
                { name: "IPS LCD", quantity: 55 },
                { name: "AMOLED", quantity: 78 },
                { name: "OLED", quantity: 45 },
                { name: "Super AMOLED", quantity: 62 },
                { name: "Retina", quantity: 23 }
              ],
            })}
            ${Dropdown({
              dropdownTitle: "Screen diagonal",
              dropdownOptions: [
                { name: "Up to 5.5\"", quantity: 18 },
                { name: "5.6\" - 6.0\"", quantity: 47 },
                { name: "6.1\" - 6.5\"", quantity: 89 },
                { name: "6.6\" - 7.0\"", quantity: 36 },
                { name: "7.0\"+", quantity: 14 }
              ],
            })}
            ${Dropdown({
              dropdownTitle: "Protection class",
              dropdownOptions: [
                { name: "IP54", quantity: 32 },
                { name: "IP67", quantity: 28 },
                { name: "IP68", quantity: 51 },
                { name: "MIL-STD-810H", quantity: 19 },
                { name: "No protection", quantity: 65 }
              ],
            })}
            ${Dropdown({
              dropdownTitle: "Built-in memory",
              dropdownOptions: [
                { name: "64 GB", quantity: 45 },
                { name: "128 GB", quantity: 78 },
                { name: "256 GB", quantity: 54 },
                { name: "512 GB", quantity: 32 },
                { name: "1 TB", quantity: 15 }
              ],
            })}
            `,
        })}
        ${Section({
          title: "Shop",
          children: `
            ${Shop()}`,
        })}
      </main>
    `;
};
