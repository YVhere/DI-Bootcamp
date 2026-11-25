// Clean a string: lowercase, remove spaces, sort the letters
const cleanString = (str) => {
    return str
        .toLowerCase()
        .split("")
        .filter((letter) => letter !== " ")
        .sort()
        .join("");
};

// Returns true if str1 is an anagram of str2, else false
const isAnagram = (str1, str2) => {
    return cleanString(str1) === cleanString(str2);
};

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram("Hello", "World"));