console.log("up and running");



const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length < 2){
	alert("flip one more");
}
else{
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match");
	}else {
		console.log("sorry try again");
	};
};