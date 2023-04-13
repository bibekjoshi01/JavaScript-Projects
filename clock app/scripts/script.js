const tabBtns = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

function showTabContent(tabName) {
  tabContent.forEach((tab) => {
    if (tab.getAttribute("id") === tabName) {
      tab.classList.remove("hidden");
    } else {
      tab.classList.add("hidden");
    }
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab");
    showTabContent(tabName);
    tabBtns.forEach((tab) => {
      if (tab === btn) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
});


