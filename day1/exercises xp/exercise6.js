const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = "" //empty string 
for (const key in details) {
    sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim()); //removes last empty space at hte end

