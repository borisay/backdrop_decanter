import "../sass/style.scss";
window.addEventListener("load",()=>{
  const mainItems = document.querySelector(".block-system-main-menu > .block-content");
  console.log(mainItems);
  if(window.outerWidth<767){
    mainItems.classList.add("su-main-nav");
  }
  window.addEventListener("resize",()=>{
    if(window.outerWidth<767){
      mainItems.classList.add("su-main-nav");
    } else{
      mainItems.classList.remove("su-main-nav");
    }
  })

  const secItems = document.querySelectorAll(".su-secondary-nav__menu li a");
  secItems.forEach((item) => {
    // if (item.classList.contains("active-trail")){
      item.classList.add("su-secondary-nav__link");
    // }
  });
})

