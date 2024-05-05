// Magicians: Make a array of magician’s names. Pass the array
//  to a function called show_magicians(), 
// which prints the name of each magician in the array.
var namesOfMagicians = ["Cris Angel", "David Allen", "Deren Brown"];
function showMagicians() {
    for (var i = 0; i < namesOfMagicians.length; i++) {
        console.log(namesOfMagicians[i]);
    }
}
showMagicians();
