// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//  return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
var magicians2 = ["Cris Allen", "Allen", "Deren Brown"];
show_magicians(magicians2);
function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' The great');
    }
    return greatmagicians;
}
var magicians3 = ["Cris Angle", "Allen", "Deren Brown"];
var greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);
