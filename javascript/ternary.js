// ternary operators

// Ternary operators are a shorthand way of writing if-else statements. They are also known as conditional operators. The syntax of a ternary operator is as follows:

// condition ? expression1 : expression2;

// If the condition is true, the expression1 is executed; otherwise, the expression2 is executed. Here is an example of a ternary operator:

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);


// User input

const yourAge = prompt("Enter your age: ");
const canYouVote = yourAge >= 18 ? "Yes" : "No";
console.log(yourAge ?? "You did not enter your name.");
console.log(canYouVote);

let playGame = confirm("Do you want to play a game? (y/n)");
if (playGame) {
    // implement rock paper scissors game interatcitvely for playerOne and computer
    let playerOne = prompt("Enter your move: ");
    let computer = Math.floor(Math.random() * 3 + 1);
    let computerMove = computer === 1 ? "rock" : computer === 2 ? "paper" : "scissors";
    
    let result = 
    playerOne === computerMove
    ? "It's a tie!"
    : playerOne === "rock" && computerMove === "paper"
    ? "Computer wins!"
    : playerOne === "rock" && computerMove === "scissors"
    ? "Player wins!"
    : playerOne === "paper" && computerMove === "rock"
    ? "Player wins!"
    : playerOne === "paper" && computerMove === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computerMove === "rock"
    ? "Computer wins!"
    : playerOne === "scissors" && computerMove === "paper"
    ? "Player wins!"
    : "Invalid move!";
    console.log(result);
    


} else {
    console.log("Maybe next time.");
}
