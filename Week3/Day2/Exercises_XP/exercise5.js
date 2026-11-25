class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Answer: option 2 will successfully extend the Dog class
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

const myDog = new Labrador("Rex", "big");
console.log(myDog);

