// // 3.Name Cases: Store a person's name in a variable, and then print that person's name in 
// lowercase, uppercase, and titlecase.
var personName = "Mazhar khan";
// In lowerCase. 
personName = personName.toLowerCase();
console.log("LowerCase: ", "".concat(personName));
// In upperCase
personName = personName.toUpperCase();
console.log("UpperCase: ".concat(personName));
// In tittleCase
// step1
var words = personName.split(" ");
// step2
var titleCase = "";
//  step3
for (var i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("tittleCase: ".concat(titleCase));
