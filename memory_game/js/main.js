



let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1])
	{ alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

console.log("user flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}

flipCard(3);
flipCard(2);