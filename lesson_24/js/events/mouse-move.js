import { header, footer } from "./../global.js";


export function mouseEnterLeave(event) {
   const target = event.target
   const eventType = event.type

   if (target === header) {
      changeFooterBg(eventType)
   }
   /*else if (target === otherItem) {
      otherFunc(eventType)
   }*/
}

function changeFooterBg(eventType) {
   if (footer) {
      if (eventType === "mouseenter") {
         !footer.hasAttribute("data-bg") ? footer.setAttribute("data-bg", "rgb(95, 40, 18)") : ""
         footer.style.backgroundColor = footer.dataset.bg
      }
      else {
         footer.style.backgroundColor = ""
      }
   }
}