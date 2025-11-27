import "./styles/index.js";
import { Router } from "./lib/services/router.js";
import { Home } from "./pages/Home.js";
import { Products } from "./pages/Products.js";
import { routes } from "./config/constants.js";
import { NotFound } from "./pages/notFound.js";

new Router({
  [routes.home]: Home,
  [routes.products]: Products,
  [routes.notFound]: NotFound,
});
