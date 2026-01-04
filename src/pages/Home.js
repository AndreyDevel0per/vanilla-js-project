import { BigCard } from "../components/BigCard/ui/BigCard";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TabMenu } from "../components/TabMenu";

export const Home = () => {
  const bigCards = [
    {
      extraClasses: "",
      imagePath: "../../../../assets/images/Popular.png",
      title: "Popular Products",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    },
    {
      extraClasses: ["isGhostWhite"],
      imagePath: "../../../../assets/images/IpadPro.png",
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    },
    {
      extraClasses: ["isGrayLight"],
      imagePath: "../../../../assets/images/SamsungGalaxy.png",
      title: "Samsung Galaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    },
    {
      extraClasses: ["isGrayDark"],
      imagePath: "../../../../assets/images/MacbookPro.png",
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    },
  ];

  const discountCards = [
    {
      name: "Iphone14proGold",
      description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      price: 1437,
    },
    {
      name: "podsMax",
      description: "AirPods Max Silver Starlight Aluminium ",
      price: 549,
    },
    {
      name: "appleWatch",
      description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
      price: 399,
    },
    {
      name: "Iphone14proGold1TB",
      description: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: 1499,
    },
  ];

  const bigCardsHTML = bigCards
    .map(
      (bigCard) =>
        `${BigCard({ extraClasses: bigCard.extraClasses, imagePath: bigCard.imagePath, title: bigCard.title, description: bigCard.description })}`
    )
    .join("");

  const discountCardsHTML = discountCards
    .map(
      (card) =>
        `${Card({ imageName: card.name, description: card.description, price: card.price })}`
    )
    .join("");

  return `
      <div>
        <div>
          ${Header({})}
        </div>
        <div>
          ${Slider()}
        </div>
        <div>
          ${TabMenu()}
        </div>
      </div>
      <div class="bigCards">
        ${bigCardsHTML}
      </div>
      <div class="discount containerLarge">
        <span class="discointText">Discounts up to -50%</span>
        <div class="discountContent">
          ${discountCardsHTML}
        </div>
      </div>
    `;
};
