"use strict"

import { header, observerCounterItems, thanksSection, thanksTitle } from "./global.js";
import { clickActions } from "./events/click.js";
import { mouseEnterLeave } from "./events/mouse-move.js";
import { scrollActions, intersectionObserver, divideText } from "./events/scroll.js";


window.addEventListener("DOMContentLoaded", domLoaded);
window.addEventListener("load", pageLoaded);

function domLoaded(event) {
   divideText(thanksTitle, thanksSection)
}
function pageLoaded(event) {
   //ЗАДАЧА 2
   document.documentElement.classList.add('loaded')

   /*--------------ПОДІЇ-----------*/
   //ЗАДАЧА 1
   document.addEventListener("click", clickActions)
   /*--------------MOUSE MOVE-----------*/
   //ЗАДАЧА 3
   mouseMoveListener()
   /*------------------------------*/
   //ЗАДАЧА 4
   //зелені items - як діди робили, блакитні - Intersection Observer
   scrollActions()
   window.addEventListener('scroll', scrollActions)
   //ВАР 2 - Intersection Observer
   intersectionObserver(observerCounterItems)
   intersectionObserver(thanksSection)
   mouseMoveListener(header)
   /*------------------------------*/
}

function mouseMoveListener(element) {
   // const mouseMoveArray = [header]

   // if (Array.isArray(mouseMoveArray) && mouseMoveArray.length) {
   //    mouseMoveArray.forEach(element => {
         if (element) {
            element.addEventListener("mouseenter", mouseEnterLeave)
            element.addEventListener("mouseleave", mouseEnterLeave)
         }
   //    });
   // }
}





