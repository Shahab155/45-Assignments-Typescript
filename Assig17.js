"use strict";
// 17. SHRINKING GUEST LIST: You just found out that your new dinner table won't arrive in time for the dinner, and
// you have space for only two guests.
// . Start with your program from exersize 16. Add a new line that prints a message saying that you
// can invite only two people for dinner.
console.log("I can invite only two persons for dinner.");
let guests = ["Muhammad", "Mazhar", "Sadar", "Mujtaba", "Fayyaz"];
// .Remove guests from your list one at a time untill only two names remain in your list. Each time you pop a
// name from your list, print a message to that person letting them know your're sorry you can't invite
// them to dinner.
let removed_guest = guests.pop();
let removed_guest1 = guests.pop();
let removed_guest2 = guests.pop();
console.log(removed_guest + " Sorry, you are not invited to dinner.");
console.log(removed_guest1 + " Sorry, you are not invited to dinner.");
console.log(removed_guest2 + " Sorry, you are not invited to dinner.");
// .Print a message to each of the two people still on your list, letting them know they're still invited.
console.log(guests[0] + " You are still invited for dinner to night.");
console.log(guests[1] + " You are still invited for dinner to night.");
// .Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
// have an empty list at the end of your program.
let guests_at_the_end = [];
console.log(guests_at_the_end);
