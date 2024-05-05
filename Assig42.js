// // 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians2 = ["Cris Angel", "Deren Brown", "Deren Brown"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians2);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = ' The Great ' + magicians[i];
    }
}
make_great(magicians2);
show_magicians(magicians2);
