
let cards = [
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
}, 
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds"
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

function flipCard(cardId){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1])
	{ alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

console.log("user flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}

flipCard(3);
flipCard(2);