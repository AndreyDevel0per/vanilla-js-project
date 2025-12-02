import { BigCard } from "../components/BigCard/ui/BigCard";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CategoryCard } from "../components/CategoryCard";
import { Header } from "../components/Header";
import { IconArrowDown, IconCameras, IconComputers, IconGaming, IconHeadphones, IconPhones, IconSmartWatches } from "../components/Icons";

export const Home = () => {
  return `
      <div>
        ${Header()}
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
      <div style="display: grid; grid-template-columns: repeat(4 ,1fr);  gap: 2rem; padding-block: 8rem; padding-inline: 50rem">
        ${Card({ imageName: "Iphone14pro", description: "Apple iPhone 14 Pro Max 128GB Deep Purple", price: 900 })}
        ${Card({ imageName: "camera6k", description: "Blackmagic Pocket Cinema Camera 6k", price: 2535 })}
        ${Card({ imageName: "appleWatch", description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ", price: 399 })}
        ${Card({ imageName: "podsMax", description: "AirPods Max Silver Starlight Aluminium ", price: 549 })}
        ${Card({ imageName: "galaxyWatch6", description: "Samsung Galaxy Watch6 Classic 47mm Black", price: 369 })}
        ${Card({ imageName: "ZFold5", description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: 1799 })}
        ${Card({ imageName: "budsFE", description: "Galaxy Buds FE <br> Graphite", price: 99.99 })}
        ${Card({ imageName: "IPad9", description: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021", price: 398 })}
      </div>
      <div style="display: flex; justify-content: center; gap: 4rem;">
        ${CategoryCard({ categoryName: "Phones", icon: IconPhones })}
        ${CategoryCard({ categoryName: "Smart Watches", icon: IconSmartWatches })}
        ${CategoryCard({ categoryName: "Cameras", icon: IconCameras })}
        ${CategoryCard({ categoryName: "Headphones", icon: IconHeadphones })}
        ${CategoryCard({ categoryName: "Computers", icon: IconComputers })}
        ${CategoryCard({ categoryName: "Gaming", icon: IconGaming})}
      </div>
      <div>
        ${BigCard({ extraClasses: ["isGrayDark"], imageName: "Popular", height: 330, title: "Popular Products", description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."})}
      </div>
    `;
};
