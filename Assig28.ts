


// 28. Stage of life: Write an if-else chain that determines a person's stage of life. Set a value for the variable 
// age, and then.

// .if the person is at less than 2 years old, print a message that the petson is baby.

// .if the person is at least 2 years old but less than 4, print a message that the person is toddler.

// .if the person is at least is at  4 years old but less than 13, print a message that the person is kid.

// .if the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// .if the person is at least 20 years old but less than 65, print a message that the person is an adult.

// .if the person is age 65 or older, print a message that the person is an elder.

let Age:number = 100;
if(Age < 2){
    console.log("You are baby.")
}else if(Age >= 2 && Age < 4){
    console.log("You are a toddler.")
}else if(Age >=4 && Age < 13){
    console.log("You are a kid.")
}else if(Age >=13 && Age < 20){
    console.log("You are teenager.")
}else if(Age >= 20 && Age < 65){
    console.log("You are adult.")
}else {
    console.log("You are older person.")
}

