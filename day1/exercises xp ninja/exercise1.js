let person1 = {
    fullName: "John Doe",
    mass: 90,
    height: 1.90,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

let person2 = {
    fullName: "John Smith",
    mass: 70,
    height: 2.05,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};


function compareBMI(p1, p2) {
let bmi1 = p1.calcBMI();
let bmi2 = p2.calcBMI();

if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the largest BMI: " + bmi1.toFixed(2));
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the largest BMI: " + bmi2);
  } else {
    console.log("Both have the same BMI: " + bmi1);
  }
}

compareBMI(person1, person2);