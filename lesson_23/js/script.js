"use strict"


//ЗАДАЧА №1

const body = document.body

//ЗАДАЧА №2

function addList(listItemsNumber = 1, parentEl) {
   if (parentEl && listItemsNumber > 0) {
      const list = document.createElement("ul")
      const mainScript = document.getElementById("main-script")
      parentEl.insertBefore(list, mainScript);
      
      for (let i = 0; i < listItemsNumber; ++i) {
         list.innerHTML += "<li></li>"
      }
   }
}

addList(8,body)

//ЗАДАЧА №3

body.classList.add("loaded")
body.classList.contains("loaded") ? body.style.color = body.dataset.color : ""

//ЗАДАЧА 4

const shitItems = document.querySelectorAll(".task-4>.item")

if (shitItems.length) {
   shitItems.forEach((item,index) => {
      item.classList.add("active")
      item.textContent = `Елемент №${index+1}`
   });
   /*for (let i = 0; i < items.length; ++i) {
      const item = items[i]
      item.classList.add("active")
      item.textContent = `Елемент №${i+1}`
   }*/
}

//ЗАДАЧА 5

const buttonYouth = document.querySelector(".button--youth")
scrollToBlock(buttonYouth)

function scrollToBlock(element) {
   element ? element.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth"
   }) : ""
}

//ЗАДАЧА 6

const links = document.querySelectorAll(".link")

if (links.length) {
   for (const link of links) {
      !link.hasAttribute("data-change-color") ? link.setAttribute("data-change-color", "100") : ""
      link.dataset.changeColor < 200 ? link.style.color = link.dataset.color : ""
   }
}



