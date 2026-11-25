// ===== Part 1: True or False =====
console.log([2] === [2]);
console.log({} === {});
// Answer: both are false.
// Why: arrays and objects are compared BY REFERENCE, not by content.
// Each [2] and each {} is a NEW separate object in memory,
// so they are two different things, even if they look the same.


// ===== Part 2: The value of number =====
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);
// Answer: object2.number is 4, object3.number is 4, object4.number is 5.
// Why: object1, object2 and object3 point to the SAME object (by reference),
// so changing object1.number to 4 changes it for all three.
// object4 is a NEW separate object, so it keeps its own number 5.


// ===== Part 3: Classes =====

// 1. Class Animal
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// 2. Class Mammal extends Animal, with a sound() method
class Mammal extends Animal {
    sound(animalSound) {
        return animalSound + " I'm a " + this.type + ", named " + this.name + " and I'm " + this.color;
    }
}

// 3. farmerCow object, an instance of Mammal
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));