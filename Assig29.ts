// 29. Favorite Fruit: Make an array of your favorite fruits,
//  and then write a series of independant if statements that 
//  check for certain fruits in your array.

let fruits: string[] = ["Apple", "Banana", "Cherry", "Mango", "Kiwi"];
console.log("Task 1:")
if (fruits[0] === "Apple") {
  console.log(true);
}
if (fruits[1] === "Banana") {
  console.log(true);
}
if (fruits[2] === "Cherry") {
  console.log(true);
}
if (fruits[3] === "Mango") {
  console.log(true);
}
if (fruits[4] === "Kiwi") {
  console.log(true);}

  // . Make a array of your three favorite fruits and call it favorite_fruits.

  console.log("Task 2:")
let favorite_fruits: string[] = ["Mango", "Kiwi", "Graps", "Japani"];

// .Write five if statements. Each should check whether a certain kind of
//  fruit is your array. If the fruit is in your array, the if block 
//  should print a statement, such as You really like bananas!

console.log("Task 3:")
if ("Kiwi" === favorite_fruits[1]) {
  console.log(`I love to eat ${favorite_fruits[1]}.`);
}
if (favorite_fruits[3] === "Japani") {
  console.log(`${favorite_fruits[3]} is one of my most favorite fruits.`);
}
if ("Mango" === favorite_fruits[0]) {
  console.log(`The king of all fruits is ${favorite_fruits[0]}.`);
}
if (favorite_fruits[2] === "Graps") {
  console.log(`I like to eat ${favorite_fruits[2]}.`);
}
if (favorite_fruits[0] === "Mango") {
  console.log(`${favorite_fruits[0]} come in summer season.`);
}
