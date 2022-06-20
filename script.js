const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((i) => {
      i.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((i, index) => {
    i.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
