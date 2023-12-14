const toggleNav = () => {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const btnIcon = document.querySelector(".icon-hamburger");
  const btnIconClose = document.querySelector(".icon-close");
  const mobileNav = document.querySelector(".mobile-navigation");
  const navMenu = document.querySelector(".mobile-navigation__menu");

  const showMenu = () => {
    btnIcon.classList.toggle("hidden");
    btnIconClose.classList.toggle("block");
    mobileNav.classList.toggle("block");
    navMenu.classList.add("nav-animation");
    const body = document.body;

    if (mobileNav.classList.contains("block")) {
      body.classList.add("fixed");
    } else {
      body.removeAttribute("class");
    }
  };

  toggleBtn.addEventListener("click", showMenu);
};

export default toggleNav;
