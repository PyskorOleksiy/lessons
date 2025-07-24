import { header, footer } from "./../global.js";


export function mouseEnterLeave({ target, type }) {
   if (target === header) {
      changeFooterBg(type)
   }
   /*else if (target === otherItem) {
      otherFunc(eventType)
   }*/
}

function changeFooterBg(eventType) {
   if (footer && footer.hasAttribute("data-bg")) {
      if (eventType === "mouseenter") {
         //!footer.hasAttribute("data-bg") ? footer.setAttribute("data-bg", "") : ""
         footer.style.backgroundColor = footer.dataset.bg
      }
      else {
         footer.style.backgroundColor = ""
      }
   }
}