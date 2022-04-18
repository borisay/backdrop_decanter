import "../sass/style.scss";
window.addEventListener("load",()=>{
  const mainItems = document.querySelectorAll(".su-main-nav li");
  mainItems.forEach((item) => {
    if (item.classList.contains("active")){
      item.classList.add("su-main-nav__item--current");
    }
  });
  const secItems = document.querySelectorAll(".su-secondary-nav__menu li a");
  secItems.forEach((item) => {
    // if (item.classList.contains("active-trail")){
      item.classList.add("su-secondary-nav__link");
    // }
  });
})

