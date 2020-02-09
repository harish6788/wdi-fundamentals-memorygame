console.log("up and running");



const cards = ["queen","queen","king","king"];
const cardsInPlay = [];


function chechForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match");
	}else {
		console.log("sorry try again");
	};
}


function flipCard(cardId){
	let cardOne = cards[0];
let cardTwo = cards[2];
console.log("user flipped" + " " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length < 2) {
		alert("click one more");
	}else{
		chechForMatch();
	};
}

    


