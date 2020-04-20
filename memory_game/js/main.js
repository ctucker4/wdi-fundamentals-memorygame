console.log ("up and running!");

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
}
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
console.log("User flipped" + cards[cardId].rank);

console.log(cards.cardImage);
console.log(cards.suit);

if(cardsInPlay.length === 2 && 
	cardsInPlay[0] === cardsInPlay[1]) { 
		alert('You found a match!');
} else {
		alert('Sorry, try again')
	}

flipCard(O);
flipCard(1);
checkForMatch();}






