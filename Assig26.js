"use strict";
// 26.Alien Colors #2:
//  Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alienColor = "Green";
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alienColor === "Green") {
    console.log("Congratulations! You earned 5 points.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
    console.log("Hurry! You have earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
if (alienColor === "Red") {
    console.log("Congratulations! you earned 5 points.");
}
else {
    console.log("Congratulation! You have earned 10 points.");
}
