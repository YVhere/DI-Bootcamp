class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// Answer: the output will be "object"
// Why: a class is a template for creating objects.
// new Person('John') creates a new object from this template,
// so member is an object -> typeof member is "object".