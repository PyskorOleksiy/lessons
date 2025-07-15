import { counterItems, observerCounterItems } from "./../global.js";


export function scrollActions(event) {
   counter()
}

function calcThresholdHeight(element) {
   const elementThresholdHeight = -element.getBoundingClientRect().height * getThreshold(element)
   const elementTopCoord = element.getBoundingClientRect().top

   return (elementTopCoord - window.innerHeight <= elementThresholdHeight && elementTopCoord > 0) || (-element.getBoundingClientRect().bottom <= elementThresholdHeight && elementTopCoord < 0)
}

function getThreshold(element) {
   const threshold = +element.dataset.threshold || 0.2
   const elementThresholdHeight = element.getBoundingClientRect().height * threshold

   if (elementThresholdHeight > window.innerHeight) {
      return window.innerHeight * threshold / element.getBoundingClientRect().height
   }
   return threshold
   //return +element.dataset.threshold || 0.2
}

function counter() {
   if (counterItems.length) {
      counterItems.forEach(element => {
         if (!element.classList.contains("active") && calcThresholdHeight(element)) {
            element.classList.add("active")
            counterAction(element, "counter activated")
         }
      });
   }
}

export function intersectionObserver() {
   if (observerCounterItems.length) {
      observerCounterItems.forEach(element => {
         const options = {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: getThreshold(element),
         }

         const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  counterAction(element, "observer counter activated");
                  observer.unobserve(element);
               }
            });
         }, options);
   
         observer.observe(element);
      });
   }
}

function counterAction(element, message) {
   console.log(message)
   const numberEl = element.querySelector('.item__number')
   if (numberEl) {
      let number = +numberEl.textContent

      if (isFinite(number)) {
         let delay = +numberEl.dataset.delay || 1
         delay *= 1000
         setTimeout(changeNumber, delay, delay, numberEl, ++number)
      }
   }
}

function changeNumber(delay, element, number) {
   element.textContent = number
   setTimeout(changeNumber, delay, delay, element, ++number)
}