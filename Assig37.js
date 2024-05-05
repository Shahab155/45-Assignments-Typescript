"use strict";
//37. Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love TypeScript. Make a large shirt
//  and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("task 1:");
function make_shirt1(shirtSize = "large", message = "I love typeScript") {
    console.log(`This is ${shirtSize} shirt, and the message written on it is ${message}.`);
}
make_shirt1();
console.log("task2:");
// Shirt of  medium size.
make_shirt1("Medium", "I love programming");
console.log("task3:"); // Shirt of small size with different message 
make_shirt1("small", "BABAR 56");
