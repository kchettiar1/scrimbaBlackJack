//! 1. Create two variables, firstCard and secondCard. 
//! Set their values to a random number between 2-11

let firstCard = 11;
let secondCard = 11;

//! 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;

console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw a new card? 😀");
} else if (sum === 21) {
  console.log("Congratulations, BlackJack! 🥳");
} else {
  console.log("Sorry, try again! 😭");
}

