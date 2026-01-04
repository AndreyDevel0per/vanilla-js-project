import "./styles/index.js";
import { Router } from "./lib/services/router.js";
import { Home } from "./pages/Home.js";
import { Products } from "./pages/Products.js";
import { routes } from "./config/constants.js";
import { NotFound } from "./pages/notFound.js";
import { SliderModel } from "./components/Slider/index.js";
import { Components } from "./pages/Components.js";
import { DropdownModel } from "./components/Dropdown/index.js";

new Router({
  [routes.home]: Home,
  [routes.components]: Components,
  [routes.products]: Products,
  [routes.notFound]: NotFound,
});

//TODO Нужно подумать как инициализировать модели. Сейчас это работает не правильно при смене страниц
new SliderModel();
new DropdownModel();
