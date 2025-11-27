export class Router {
  static instance;
  static routes;

  static notFoundPage = "/notFound";

  static selectors = {
    app: "#app",
    link: 'a[href^="/"]',
  };

  constructor(routes) {
    if (Router.instance) return Router.instance;
    Router.routes = routes;
    this.#init();
    Router.instance = this;
  }

  #init() {
    this.#bindEvents();
    Router.render(window.location.pathname);
  }

  static render(path) {
    const component = this.routes[path] || this.routes[Router.notFoundPage];
    document.querySelector(Router.selectors.app).innerHTML = component();
  }

  static navigate(path) {
    window.history.pushState({ path }, "", path);
    Router.render(path);
  }

  #handleArrowsNavigation(e) {
    const path = e.state?.path || window.location.pathname;
    Router.render(path);
  }

  #handleLinksNavigation(e) {
    const link = e.target.closest(Router.selectors.link);
    if (link) {
      e.preventDefault();
      const { pathname } = new URL(link.href);
      Router.navigate(pathname);
    }
  }

  #bindEvents() {
    window.addEventListener("popstate", (e) => {
      this.#handleArrowsNavigation(e);
    });

    document.addEventListener("click", (e) => {
      this.#handleLinksNavigation(e);
    });
  }
}
