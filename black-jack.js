let  msgEl = document.querySelector("#msg-el");
let  sumEl = document.querySelector("#sum-el");
let  cardsEl = document.querySelector("#cards-el");
let isAlive = false;
let hasBlackJack = false;
let cards = [];
let sum = 0;
playerEl = document.getElementById("player-el");

let player = {
    name : "Shakthi",
    chips : 140
}
playerEl.textContent = player.name + " : $" + player.chips
function startGame()
{
    isAlive = true;
    hasBlackJack = false;
    let firstCard = randomCard();
    let secondCard = randomCard(firstCard);
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame()
{
    cardsEl.textContent = "Cards : ";
    sumEl.textContent = "Sum : " + sum;
    for(i=0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum<21)
    {
        message = "Wanna draw a new card ? :|"
    }
    else if(sum === 21)
    {
        message = "wohoo!! you won a black jack!! :)"
        hasBlackJack = true;
        player.chips++;
        playerEl.textContent = player.name + " : $" + player.chips;
    }
    else
    {
        message = "sry you're out of the game :("
        isAlive = false;
        player.chips--;
        playerEl.textContent = player.name + " : $ " + player.chips;
        // alert("GAME OVER!!");
    }
    msgEl.textContent = message;
}
function newCard()
{
    if (isAlive == true && hasBlackJack == false)
    {
        let card = randomCard(sum);
        sum += card;
        cards.push(card);
        renderGame();
    }
}
function randomCard(sum)
{
let randomCard = Math.floor( Math.random() * 13) +1;
if (randomCard > 10)
{
    return 10;
}
else if (randomCard === 1)
{
    if (sum > 10)
    {
        return 1;
    }
    else
    {
        return 11;
    }
}
else
{
    return randomCard
}
}


// let castle = {
//     nameCastle : "ArbnbCastle",
//     price : 190,
//     airConditioner : true,
//     tags : ["castle","bombay"]
// }
// console.log(castle["nameCastle"])