import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { IconArrowDown } from "../components/Icons";
import { SaleBanner } from "../components/SaleBanner/ui/SaleBanner";

export const Home = () => {
  return `
      <div>
        ${Header()}
        <div>
          ${SaleBanner()}
        </div>
        <a href="/products">Link</a>
      </div>
    `;
};
