// 40. Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object 
// containing these two pieces of information. Use the function to make three dictionaries representing
// different albums. Print each return value to show that Objects are storing the album information correctly. 
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//  Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(artistName, tittle) {
    var dictionarires = {
        artistName: artistName.charAt(0).toUpperCase() + artistName.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)
    };
    return dictionarires;
}
var album = makeAlbum("Atif Aslam", "Tere sang yara");
console.log(album);
album = makeAlbum("Ali Zafar", "Bola Batiyan");
console.log(album);
album = makeAlbum("Arjeet Singh", "O Mahi");
console.log(album);
