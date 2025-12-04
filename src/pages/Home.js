import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { IconArrowDown } from "../components/Icons";
import { Product } from "../components/Product/ui/Product";

export const Home = () => {
  return `
      <div>
        ${Header()}
        <div>
          ${Product({ productImg: "AirPods", title: "Apple AirPods", titleMedium: "Max", description: "Computational audio. Listen, it's powerful", backColor: "grayLight" })}
          ${Product({ productImg: "VisionPro", title: "Apple Vision", titleMedium: "Pro", description: "An immersive way to experience entertainment", backColor: "grayDark" })}
          ${Product({ productImg: "PS5", title: "Playstation 5", description: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.", type: "medium", backColor: "white" })}
          ${Product({ productImg: "MacPro14", title: "Macbook", titleMedium: "Air", description: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.", type: "large", backColor: "grayLight" })}
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
