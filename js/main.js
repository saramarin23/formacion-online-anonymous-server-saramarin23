"use strict";

const menuButton = document.querySelector(".nav-trigger");
const navMenu = document.querySelector(".nav");
const closeButton = document.querySelector(".nav-close");
const navTrigger = document.querySelector(".nav-trigger");

function makeSthMenuBtn() {
  console.log("Has pinchado para desplegar el menú");
  navMenu.classList.remove("js-hidden");
  menuButton.classList.add("js-hidden");
  closeButton.classList.remove("js-hidden");
}

function makeSthCloseBtn() {
  console.log("Has clickado el botón de cerrar");
  navMenu.classList.add("js-hidden");
  closeButton.classList.remove("js-hidden");
  navTrigger.classList.remove("js-hidden");
}

menuButton.addEventListener("click", makeSthMenuBtn);
closeButton.addEventListener("click", makeSthCloseBtn);
