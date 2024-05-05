"use strict";
// 34. Pizzas: Think of at least three kinds of kinds of your favorite pizza. Store these pizza names in array, and 
// then use a for loop to print the name of each pizza. 
let pizzas = ["Fajita", "pepperoni", "Cheese lover pizza", "Tikka Pizza"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// .Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let j = 0; j < pizzas.length; j++) {
    console.log("I have always love to eat " + pizzas[j] + ".");
}
// . Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should 
// consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I like pizza. There are many kinds of flavours in pizzas, but I love Fajita, Cheez lover and Tikka pizza. ");
