const btnHamburger = document.querySelector("#btnHamburger")
const body = document.querySelector("body")
const header = document.querySelector("header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open")
    body.classList.remove("no-scroll")
    fadeElems.forEach((el) => {
      el.classList.remove("fade-in")
      el.classList.add("fade-out")
    })
  } else {
    header.classList.add("open")
    body.classList.add("no-scroll")
    fadeElems.forEach((el) => {
      el.classList.remove("fade-out")
      el.classList.add("fade-in")
    })
  }
})
