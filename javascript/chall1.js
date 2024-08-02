// write code that reeturns a random letter frm your name
const name = 'Ozioma';
console.log(name.charAt(Math.floor(Math.random() * name.length)));

// if statement
let soup = "chicken noodle soup";
let reply;

if (soup) {
    reply = "Here's your order of ${soup}";
} else {
    reply = "There is no soup";
}

// switch statements: rock, paper, scissors
let player = "rock";
let computer = "rock";


switch (player) {
    case computer:
        console.log("It's a tie!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
    case "scissors":
        if (computer === "rock") {
            console.log("computer wins!");
        } else {
            console.log("Player wins!");
        }
        breaki;
    default:
        console.log("invalid move!");
}