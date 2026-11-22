const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();

let society = "";
for (let i = 0; i < names.length; i++) {
    society += names[i][0];
}
console.log(society);

//let societty = "" empty string
// for (const name of names.sort() { sort by alphabet
// society += name[0] empty string + first letter of the word
//}
//console.log(society)