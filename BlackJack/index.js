
let hasBlackJack=false
let isAlive=false
let message=""
let cards=[]
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("card-el")

let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startgame(){ 
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function getRandomCard(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
} 


function rendergame(){

if(sum<=20){
  message="Do you want to draw a new card? "
}
else if(sum===21){
   message="Wohoo! You've got Blackjack! "
    hasBlackJack=true
}
else {
    message="You're out of the game! "
    isAlive=false
}
messageEl.textContent=message
sumEl.textContent=  "Sum:" +sum
cardEl.textContent="Cards:"

for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
}
}

function newcard() {
    if (isAlive === true && hasBlackJack === false){
    console.log("Drawing new card")
    let card=getRandomCard()
    sum +=card
    cards.push(card)
    rendergame()
    }
}
