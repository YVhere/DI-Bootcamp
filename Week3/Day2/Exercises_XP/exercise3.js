const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Turn the users object into an array
const usersArray = Object.entries(users);
console.log(usersArray);

// 2. Multiply each user's ID by 2
const doubledIds = usersArray.map((user) => [user[0], user[1] * 2]);
console.log(doubledIds);