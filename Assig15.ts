
// 15. Changing Guest List: You just heard that one of your guests can't make the dinner, so you need to send out
// a new set of invitaions. You'll have to think of someone else to invite.

let   guests:string[]= ["Muhammad","Mazhar","Sadar","Mujtaba","Fayyaz"]

// i.
//  Start with your program from exercise 14. Add a print statement at the end of your program stating the name 
// of the guest who can't make it.
console.log(guests[4] + " can not attend dinner party.")

// ii. Modify your list, replacing the name of the guest who can't make it with the name of the new person you are
// inviting.

guests.splice(4,5 ,"Shoaib Khan")



console.log(guests[0] + " We have arranged a dinner party in your honour, Must Come please.")
console.log(guests[1] + " We have arranged a dinner party in your honour, Must Come please.") 
console.log(guests[2] + " We have arranged a dinner party in your honour, Must Come please.") 
console.log(guests[3] + " We have arranged a dinner party in your honour, Must Come please.") 
console.log(guests[4] + " We have arranged a dinner party in your honour, Must Come please.") 
