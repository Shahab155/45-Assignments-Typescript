// 31. 
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var userNames = ["Sadar", "Mazhar", "Admin", "Shahab", "Muhammad"];
// . If the list is empty, print the message We need to find some users!
// task 1.:
for (var user in userNames) {
    if (user == "Admin") {
        console.log("Hello ".concat("Admin", " would you like to see status report today?"));
    }
    else {
        console.log("Hello ".concat(userNames[user], " thank you for logging in Again. "));
    }
}
console.log("As we can see that list is not empty." + "\n");
// Task 2:
// . Remove all of the usernames from your array, and make sure the correct message is printed. 
// Task 3:
var emptyUsers1 = [];
console.log("empty list ".concat(emptyUsers1, "[]"));
if (emptyUsers1.length === 0) {
    console.log("As our list of users is empty, so we need to find some users.");
}
