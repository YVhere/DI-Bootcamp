const family = {
    dad: "Alex",
    mom: "Karina",
    brother: "Oscar"
};

for ( const key in family) {
    console.log(key);
}

for (const key in family) {
    console.log(family[key]); //[] then it looks for propert of the key
}