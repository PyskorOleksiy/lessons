/*FLS Course. Глава 23. DOMашня робота (перепрошую за брак фантазії, постарішав під кінець курсу😥)*/
"use strict"


//ЗАДАЧА №1

const body = document.body

//ЗАДАЧА №2

function addList(listItemsNumber = 1) {
   const list = document.createElement("ul")
   const mainScript = document.getElementById("main-script")
   body.insertBefore(list, mainScript);
   
   for (let i = 0; i < listItemsNumber; ++i) {
      list.innerHTML += "<li></li>"
   }
}

addList(8)

//ЗАДАЧА №3

body.classList.add("loaded")
body.classList.contains("loaded") ? body.style.color = body.dataset.color : ""

//ЗАДАЧА 4

const items = document.querySelectorAll(".task-4>.item")

if (items.length) {
   items.forEach((item,index) => {
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

const button = document.querySelector(".button--youth")
scrollToBlock(button)

function scrollToBlock(element) {
   element ? element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
      block: "center",
         //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
      inline: "nearest",
      behavior: "smooth"
   }) : ""
}

//ЗАДАЧА 6

const links = document.querySelectorAll(".link")

if (links.length) {
   for (const link of links) {
      link.dataset.changeColor < 200 ? link.style.color = link.dataset.color : ""
   }
}



