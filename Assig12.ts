
// // 12.
// // Greetings: Start with the array you used in exersise 1, 
// but instead of just printing each person's name, print a message to them. The text of each message 
// should be the same, but each meassge should be  personalised with the person's name. 


let Friends:string[] = ["Sadar", "Mazhar" , "Salah","Shoaib","Hasam "]

for(let i=0 ; i<Friends.length ; i++){
   let message = " Asalam Alikum, How are You?"
    console.log( Friends[i] + " "+ message  )
}