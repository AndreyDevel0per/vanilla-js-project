import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Foother";
import { IconArrowDown } from "../components/Icons";

export const Home = () => {
  return `
      <div>
        ${Footer()}
        <div>
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
