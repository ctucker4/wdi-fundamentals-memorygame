var cards = ["queen", "queen", 'king', 'king'];
var cardsInPlay = [];
cardsInPlay.push(cards[cardId]);

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId) {
	flipCard(O);
	flipCard(2);
console.log("User flipped" + cards[cardId]);
if (cardsInPlay.length === 2) {
	console.log('display')
} else if (cardsInPlay[0] === cardsInPlay[1]) { 
		console.log('You found a match!');
} else {
	alert('Sorry, try again');
checkForMatch();}
}





