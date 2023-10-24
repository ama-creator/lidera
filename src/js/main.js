window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY >= 120) header.classList = "header header-scrolled";
  if (window.scrollY < 120) header.classList = "header";
});

// navigation
const handleNavLink = (link, event) => {
  event.preventDefault();
  const headerHeight = 122;

  let href = link.getAttribute("href").substring(1);

  const scrollTarget = document.getElementById(href);

  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
    top: elementPosition - headerHeight,
    behavior: "smooth",
  });
};

// open / close menu
const handleToggleMenu = () => {
  const btnMenu = document.querySelector(".ham");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  header.addEventListener("click", (event) => {
    if (event.target === btnMenu) {
      btnMenu.classList.toggle("active");
      nav.classList.toggle("nav--active");
    }

    if (event.target.classList.contains("nav__link")) {
      document
        ?.querySelector(".nav__link--active")
        ?.classList.remove("nav__link--active");
      event.target.classList.add("nav__link--active");
    }
    if (event.target.classList.contains("nav__btn")) {
      document
        .querySelector(".nav__link--active")
        .classList.remove("nav__link--active");
    }

    if (event.target.classList.contains("link")) {
      btnMenu.classList.remove("active");
      nav.classList.remove("nav--active");

      handleNavLink(event.target, event);
    }
    // if (handlerLang) {
    //   navList.classList.remove("nav_active");

    //   event.preventDefault();
    //   handleLang(handlerLang, event);
    // }
  });
};
handleToggleMenu();
