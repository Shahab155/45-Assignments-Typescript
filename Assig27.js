"use strict";
// 27. Alien Color #3: Turn your if-else chain from exercise 5-4 into an if-else chain.
// .if the alien is green, print a message that the player earned 5 points.
// .if the alien is yellow , print a message that the player earned 10 points.
// .if the alien is red, print a message that the player earned 15 points. 
// . Write three versions of this programs, making sure each message is printed for the appropriate 
// color alien.
// i.
console.log("1.When alien colour is Green.");
var alien_color = "Green";
if (alien_color == "Green") {
    console.log("You have earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You have earned 10 points.");
}
else if (alien_color == "red") {
    console.log("Congratulatin! You have earned 15 points.");
}
// ii 
console.log("When alien colour is red.");
var alien_color = "yellow";
if (alien_color == "Green") {
    console.log("You have earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! You have earned 10 points.");
}
else if (alien_color == "red") {
    console.log("2.You have earned 15 points.");
}
// iii.
console.log("When alien colour is yellow.");
var alien_color = "red";
if (alien_color == "yellow") {
    console.log("You have earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You have earned 10 points.");
}
else if (alien_color == "red") {
    console.log("3.Congratulations! You have earned 15 points.");
}
