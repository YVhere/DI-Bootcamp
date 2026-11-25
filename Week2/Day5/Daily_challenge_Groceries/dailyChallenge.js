let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Arrow function that console.logs the 3 fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

displayGroceries();
// pear
// apple
// banana


// 2. Arrow function cloneGroceries
const cloneGroceries = () => {

    // user is a copy of client
    let user = client;

    client = "Betty";
    console.log(client); // Betty
    console.log(user);   // John
    // Will we see the modification in user? NO.
    // Why? client is a string (a primitive type). Primitives are passed BY VALUE:
    // user got its own copy of "John", so changing client does not change user.


    // shopping is equal to groceries
    let shopping = groceries;

    shopping.totalPrice = "35$";
    console.log(shopping.totalPrice);  // 35$
    console.log(groceries.totalPrice); // 35$
    // Will we see the modification? YES.
    // Why? groceries is an object. Objects are passed BY REFERENCE:
    // shopping and groceries point to the SAME object in memory,
    // so a change made through one is seen through the other.

    shopping.other.paid = false;
    console.log(shopping.other.paid);  // false
    console.log(groceries.other.paid); // false
    // Will we see the modification? YES.
    // Why? Same reason: by reference. other is an object inside the same object,
    // so shopping.other and groceries.other are the same thing.
};

// 3. Invoke cloneGroceries
cloneGroceries();