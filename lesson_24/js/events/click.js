export function clickActions(event) {
   const pokerCard = event.target.closest('.poker-cards>.item')

   if (pokerCard) {
      pokerCard.classList.toggle("active")
   }
}