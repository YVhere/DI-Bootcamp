// ===================== #1 =====================
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();
// Prediction: alert shows "inside the funcOne function 3"
// Why: a starts as 5, 5 > 1 is true, so a changes to 3.

// #1.2 - What if a is declared with const instead of let?
// Prediction: ERROR -> "TypeError: Assignment to constant variable."
// Why: const cannot be changed, so the line a = 3 breaks.


// ===================== #2 =====================
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // Prediction: "inside the funcThree function 0"
funcTwo();   // changes the global a to 5 (no alert)
funcThree(); // Prediction: "inside the funcThree function 5"
// Why: a is global, so funcTwo changes the same a that funcThree reads.

// #2.2 - What if a is declared with const instead of let?
// Prediction: the first funcThree() shows 0,
// then funcTwo() gives "TypeError: Assignment to constant variable."
// and a stays 0.


// ===================== #3 =====================
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive();
// Prediction: "inside the funcFive function hello"
// Why: window.a creates a global variable a = "hello",
// so funcFive can see it.

// #3.2 - What if declared with const instead of let?
// Prediction: nothing changes, because here a is not declared
// with let or const at all, it's just a property of window.


// ===================== #4 =====================
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix();
// Prediction: "inside the funcSix function test"
// Why: inside the function there is a NEW local a = "test".
// The function uses its own a, and the global a stays 1.

// #4.2 - What if declared with const instead of let?
// Prediction: same result, "test". Nothing is reassigned,
// so const works fine.


// ===================== #5 =====================
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console:
// Prediction: "in the if block 5", then "outside of the if block 2"
// Why: let lives only inside its own { } block.
// The a = 5 inside the if is a different variable from the outer a = 2.

// #5.2 - What if declared with const instead of let?
// Prediction: same result: 5, then 2.
// Each const is created once and never changed.