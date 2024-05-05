"use strict";
// 32.  Checking Usernames:  Do the following to create a program that simulates how websites ensures that everyone
// has a unique usernames. 
// .Make a list of five or more usernames called current users. 
// . Make another list of five usernames called new_users. Make sure one or more of the new usernames are also in the 
// current_users list.
// . Loop through the new_users list to see if each new usernames has already been used. If it has, print a message
// that the person will need to enter a new usernames. If a username has not been used, print a message saying that the 
// username is available.
// . Make sure your comparison is case insensitive. If "john" has been used, "JOHN" should not be accepted.
// console.log("Task 1:")
let current_users = ["khan", "Imad", "mazhar", "Bilal", "Naeem"];
// console.log("Task 2:")
let new_users = ["Shahab", "Jabbar", "mazhar", "khan", "Muhammad"];
// console.log("Task 3:")
let current_users_lower = current_users.map(user => user.toLowerCase());
// console.log("Task 4:")
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user} that name is already taken.`);
    }
    else {
        console.log(`Yes ${new_user} this name is available.`);
    }
}
