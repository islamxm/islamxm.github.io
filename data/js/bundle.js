!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./#src/js/script.js")}({"./#src/js/script.js":
/*!***************************!*\
  !*** ./#src/js/script.js ***!
  \***************************/
/*! no static exports found */function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header__auth_signup"),t=document.querySelector(".header__auth_signin"),n=document.querySelector("[data-signup]"),o=document.querySelector("[data-signin]"),r=document.querySelectorAll(".modal__close_btn"),s=document.querySelector(".mobile_menu"),c=document.querySelector(".burger_btn"),a=c.querySelectorAll("span");e.addEventListener("click",(function(e){e.preventDefault(),i()})),t.addEventListener("click",(function(e){e.preventDefault(),l()})),r.forEach((function(e){e.addEventListener("click",(function(){u()}))}));var i=function(){n.classList.remove("hide_modal"),n.classList.add("show_modal")},l=function(){o.classList.remove("hide_modal"),o.classList.add("show_modal")},u=function(){(n.classList.contains("show_modal")||o.classList.contains("show_modal"))&&(n.classList.remove("show_modal"),n.classList.add("hide_modal"),o.classList.remove("show_modal"),o.classList.add("hide_modal"))};c.addEventListener("click",(function(){d()}));var d=function(){s.classList.toggle("show_burger"),s.classList.contains("show_burger")?a.forEach((function(e,t){0==t&&(e.style.cssText="transform: rotate(45deg); top: calc(50% - 2px);"),1==t&&(e.style.cssText=e.style.cssText="opacity: 0"),2==t&&(e.style.cssText=e.style.cssText="transform: rotate(-45deg); bottom: calc(50% - 2px);")})):a.forEach((function(e,t){0==t&&(e.style.cssText="transform: rotate(0); "),1==t&&(e.style.cssText="opacity: 1;"),2==t&&(e.style.cssText="transform: rotate(0);")}))}}))}});
//# sourceMappingURL=bundle.js.map