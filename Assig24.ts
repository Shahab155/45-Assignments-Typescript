
// 24.More Conditional Tests: You don't have to limit the number of tests you create to 10.
//  If you want to try more comparisions, write tests. 
//  Have at least one True and one False result for each of the following.

// . Tests for equality and inequality with strings.

// Test1
// for equality:
let myName:string = "Shahab"
console.log("If  fname==='Shahab'? , predict true." )
console.log(fname==="Shahab")

// for inquality
let Caste:string = "Bhutto"
console.log("If Caste==='Bhutto'?, I predict false. ")
console.log(Caste !== "Bhutto")

// .Tests using the lower case function.
// for equality:
let myName1:string = "SHAHAB"
let lowerCase = myName.toLowerCase()
console.log("If myName === `shahab`, I predict true.")
console.log(lowerCase === "shahab")

// for inquality:
console.log("If myName ===`SHAHAB`, I predict false.")
console.log(myName !== "SHAHAB")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to.

// i.For Equality and inequality
let a = 21
console.log("Check a === 21 than answer is true" )
console.log(a===21)

console.log("If a==! 21 than I pridict is false  " )
console.log(a!==21)

// ii. For greater than and less than
let z= 22
let b =12
let c =20
console.log("Is z> b , than I predict answer true.")
console.log(z>b)

console.log("If z<b, than I predict answer false. ")
console.log(z<b)

// iii. greater than or equal to

console.log("If z>=b , than I predict anwer is true.")
console.log(z>=b)
console.log("If b>=z , than I predict anwer is false.")
console.log(b>=z)

// iv. For less than or equal to
console.log("If c<=z, than I predict answer is true. ")
console.log(c<=z) 

console.log("If c<=b, than I predict answer is false. ")
console.log(c<=b)

// .Tests using "and" and "or" operators.

// i.For And operation
let Name1= "Khan"
let password = 12345678
console.log("If Name1 == 'Khan' && password ==12345678 | than I predict answer true." )
console.log(Name1== "Khan"&& password == 12345678 )

console.log("Check If  Name1 == 'KHAN' && password == 12345678 , I predict answer False.")
console.log(Name1 =="KHAN" && password ==12345678)

// ii. For Or operation
let Country = "Pakistan"
let province = "Sindh"
console.log("Check if country =='Pakistan'| province == 'Panjab' , than I predict answer true." )
console.log(Country== "Pakistan" || province == "Panjab")

console.log("Check if Country == 'India' || province == 'Islamabad' ,  I predit answer false.")
console.log(Country == "India " ||province == "Islamabad")

// .Tests weather an item is in a array.
let arry1 = ["khan","Pakistan" , "Man"]
console.log("If arry[1] == 'Pakistan' , than I predict answer true.")
console.log(arry1[1] == "Pakistan" )

// .Test weather an item is not in a array 
let arry2 = ["khan","Pakistan" , "Man"]
console.log("Check: arry[2] == 'Women', than I predict answer false. ")
console.log(arry2[2] == "Women")
// // 3.Name Cases: Store a person's name in a variable, and then print that person's name in 
// lowercase, uppercase, and titlecase.

var personName:string = "Mazhar khan";

// In lowerCase. 
personName = personName.toLowerCase()
console.log("LowerCase:","" .concat(personName) )

// In upperCase
 personName = personName.toUpperCase();
 console.log("UpperCase:" .concat(personName));

// In tittleCase

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

var personName: string = "Mazhar khan";
personName = toTitleCase(personName);

console.log("TitleCase: ".concat(personName));