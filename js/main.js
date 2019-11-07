"use strict";

const menuButton = document.querySelector(".nav-trigger");
const closeButton = document.querySelector(".nav-close");

const closeImage = "../images/ico-close.svg";
const menuImage = "../images/ico-menu.svg";

function makeSthMenuBtn() {
  console.log("Has pinchado para desplegar el menú");
}

function makeSthCloseBtn() {
  console.log("Has clickado el botón de cerrar");
}

menuButton.addEventListener("click", makeSthMenuBtn);
closeButton.addEventListener("click", makeSthCloseBtn);
