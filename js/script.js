const elButtonBtn = document.querySelector(".siteheader__button")

const elHeader = document.querySelector(".siteheader")

elButtonBtn.addEventListener("click", () => {
    elHeader.classList.toggle("siteheader--open")
  })