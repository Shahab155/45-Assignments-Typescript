// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//  return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to each magician’s name.


function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {  
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }      
}

// const magicians2: string[] = ["Cris Allen", "Allen" , "Deren Brown"];
// show_magicians(magicians2)  

function make_great2(magicians: string[]): string[] {
    const greatmagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' The great');
    } 
    return greatmagicians;
}

const magicians3: string[] = ["Cris Angle","Allen","Deren Brown"];
const greatmagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);