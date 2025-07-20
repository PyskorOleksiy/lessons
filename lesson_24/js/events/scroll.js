import { counterItems } from "./../global.js";


export function scrollActions(event) {
   counter(counterItems)
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

function counter(counterElement) {
   if (counterElement.length) {
      counterElement.forEach(element => {
         if (!element.classList.contains("active") && calcThresholdHeight(element)) {
            element.classList.add("active")
            counterAction(element, "counter activated")
         }
      });
   }
}

export function intersectionObserver(observedElement) {
   if (observedElement.length) {
      observedElement.forEach(element => {
         createObserverObj(element)
      });
   }
   else {
      createObserverObj(observedElement)
   }
}
function createObserverObj(element) {
   const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: getThreshold(element),
   }

   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         const target = entry.target
         if (entry.isIntersecting) {
            if (target.closest('.counter')) {
               counterAction(target, "observer counter activated");  
            }
            else {
               target.classList.add('active')
            }
            target.hasAttribute('data-unobserve') ? observer.unobserve(target) : ""
         }
         else if (!target.hasAttribute('data-unobserve')) {
            target.classList.remove('active')
         }
      });
   }, options);

   observer.observe(element);
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

export function divideText(splitElement, observedBlock) {
   //const splitElement = document.querySelector('.thanks__title')
   //console.log(element.textContent)

   if (observedBlock && splitElement) {
      //const thanksSectionHeight = thanksSection.getBoundingClientRect().height
      let elementTextContent = splitElement.textContent

      if (elementTextContent.trim().length > 0) {

         // let rotate = +element.dataset.rotate || 35
         // let translateX = 0 
         // let translateY = 0
         splitElement.innerHTML = ""

         for (let i = 0; i < elementTextContent.length; ++i) {            
            splitElement.innerHTML += `<span>${elementTextContent[i]}</span>`
            const letter = splitElement.querySelector(`:scope >span:nth-of-type(${i+1})`)

            const directionX = Math.random() > 0.5 ? 1 : -1;
            const directionY = Math.random() > 0.5 ? 1 : -1;

            const offsetX = 100 + Math.random() * 100; // 100vw - 200vw
            const offsetY = 100 + Math.random() * 100; // 100vh - 200vh

            const randomX = directionX * offsetX + 'vw';
            const randomY = directionY * offsetY + 'vh';
            const randomRotate = (Math.random() * 2880 - 1440) + 'deg';

            letter.style.setProperty('--translateX', randomX);
            letter.style.setProperty('--translateY', randomY);
            letter.style.setProperty('--rotate', randomRotate);
         }
      }
   }
}