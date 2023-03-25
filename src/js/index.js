// Click on urger menu
const toggleMenuHandler = () => {
  const burgerBtn = document.querySelector("#burger-btn");
  const burgerMenu = document.querySelector("#burger-menu");
  const body = document.querySelector("body");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("hidden");
    burgerMenu.classList.toggle("flex");
    body.classList.toggle("overflow-hidden");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.99) {
      burgerMenu.classList.add("hidden");
      burgerMenu.classList.remove("flex");
      burgerBtn.classList.remove("active");
      body.classList.remove("overflow-hidden");
    }
  });
};

toggleMenuHandler();

// Tabs
const toggleTabsGandler = (tabsTriggersClass, tabsContentClass) => {
  const tabsTriggers = document.querySelectorAll(tabsTriggersClass);
  const tabsContents = document.querySelectorAll(tabsContentClass);

  tabsContents.forEach((content) => {
    content.classList.add("hidden");
    tabsContents[0].classList.remove("hidden");
  });

  tabsTriggers.forEach((trigger, i) => {
    trigger.addEventListener("click", () => {
      tabsTriggers.forEach((item) => {
        item.classList.remove("active");
      });

      trigger.classList.add("active");

      tabsContents.forEach((content) => {
        content.classList.add("hidden");
      });

      tabsContents[i].classList.remove("hidden");
    });
  });
};

toggleTabsGandler(".tab-trigger", ".tab-content");
