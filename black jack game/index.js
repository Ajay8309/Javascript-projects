
let cards=[]
let sum=0
let messageEl=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let cardEl=document.getElementById('card-el')


let player={
    Name:'Ajay',
    Chips:145
}

let playerEl=document.getElementById('player-el')
playerEl.textContent=player.Name+": $"+player.Chips
let hasblackjack=false
let IsAlive=false
let message=""


function startGame(){
    let firstcard=getRandomcard()
    let secondcard=getRandomcard()
    cards=[firstcard,secondcard]
     sum=firstcard+secondcard;
     let IsAlive=true

    renderGame()
}

function renderGame(){

    
if ( sum< 21 ){
    message="Do you want to draw a new card:"
    IsAlive=true
}else if(sum===21){
    message="Wooohoo! yo've got blackjack!"
    hasblackjack=true
}else{
    message="You're out of the game:"
    IsAlive=false
}
messageEl.textContent=message;
sumEl.textContent='Sum:'+ sum;  
cardEl.textContent='Cards:' 
for  (let i=0;i<cards.length;i++){

    cardEl.textContent+=cards[i] +" "     
}
}

function newcard(){

    if(IsAlive===true && hasblackjack===false){
    let thirdcard=getRandomcard()
    sum+=thirdcard;
    cards.push(thirdcard)
    sumEl.textContent='Sum:'+sum
    renderGame()
}
}

function getRandomcard(){
    let RandomNumber=Math.floor(Math.random()*13)+1;
    if(RandomNumber>10){
        return 10
    }else if(RandomNumber===1){
        return 11
    }else{
        return RandomNumber;
    }
}