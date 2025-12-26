import "./styles/index.js";
import { Router } from "./lib/services/router.js";
import { Home } from "./pages/Home.js";
import { Products } from "./pages/Products.js";
import { routes } from "./config/constants.js";
import { NotFound } from "./pages/notFound.js";
import { Components } from "./pages/Components.js";
import { SliderModel } from "./components/Slider/index.js";
import { TabMenuModel } from "./components/TabMenu/index.js";
import { BurgerButtonModel } from "./components/BurgerButton/index.js";

new Router({
  [routes.home]: Home,
  [routes.products]: Products,
  [routes.notFound]: NotFound,
  [routes.components]: Components,
});

new SliderModel();
new TabMenuModel();
new BurgerButtonModel();