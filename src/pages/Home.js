import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { IconArrowDown, IconBattery, IconCameraFront, IconCameraMain, IconChip, IconCpu, IconScreen, IconShop, IconVerify } from "../components/Icons";
import { IconTruck } from "../components/Icons/ui/IconTruck";
import { MiniCard } from "../components/MiniCard";

export const Home = () => {
  return `
      <div>
        ${Header()}
        <div>
          ${MiniCard({ icon: IconScreen, title: "Screen size", description: "6.7\""})}
          ${MiniCard({ icon: IconCpu, title: "CPU", description: "Apple A16 Bionic"})}
          ${MiniCard({ icon: IconChip, title: "Number of Cores", description: "6"})}
          ${MiniCard({ icon: IconCameraMain, title: "Main camera", description: "48-12 -12 MP"})}
          ${MiniCard({ icon: IconCameraFront, title: "Front-camera", description: "12 MP"})}
          ${MiniCard({ icon: IconBattery, title: "Battery capacity", description: "4323 mAh"})}
          ${MiniCard({ extraClasses: ["delivery"], icon: IconTruck, title: "Free Delivery", description: "1-2 day"})}
          ${MiniCard({ extraClasses: ["delivery"], icon: IconShop, title: "In Stock", description: "Today"})}
          ${MiniCard({ extraClasses: ["delivery"], icon: IconVerify, title: "Guaranteed", description: "1 year"})}
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
