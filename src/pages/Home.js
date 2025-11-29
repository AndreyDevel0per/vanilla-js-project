import { Button } from "../components/Button";
import { IconArrowDown } from "../components/Icons";

export const Home = () => {
  return `
      <div>
        <div>
          Home Page
        </div>
        <div style="display: flex; gap: 1rem;">
          ${Button({ text: "Buy Now" })}
          ${Button({ text: "Shop Now", extraClasses: ["isLight"] })}
          ${Button({ text: "View More", extraClasses: ["isLight"], icon: IconArrowDown })}
        </div>
        <a href="/products">Link</a>
      </div>
    `;
};
