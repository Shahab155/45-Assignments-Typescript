// 39.City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string,country:string):string{
 return `${city}  ${country}`
 
}
let city_country1 = city_country("1.Lahore, ","Pakistan")      
console.log(city_country1)

let city_country2 = city_country("2.Delhi, ","India")
console.log(city_country2)

let city_country3 = city_country("3.Madina, ","Saudi Arabia")
console.log(city_country3)