let age = [20,5,12,43,98,55];

//sum of all the numbers in the array
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum = sum + age[i];
}
console.log(sum);

//highest age in the array
let highest = age[0];
for (let a of age) {
    if (a > highest) {
        highest = a;
    }
}
console.log(highest);