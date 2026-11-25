const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. map(): array with a welcome message for each user
const welcomeStudents = users.map((user) => "Hello " + user.firstName);
console.log(welcomeStudents);
// ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael",
//  "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. filter(): only the Full Stack Residents
const fullStackResidents = users.filter((user) => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// [ { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//   { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//   { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' } ]

// 3. Bonus: filter + map chained -> only the lastName of the Full Stack Residents
const residentsLastNames = users
    .filter((user) => user.role === 'Full Stack Resident')
    .map((user) => user.lastName);
console.log(residentsLastNames);
// ['Bouley', 'Alnaji', 'Hajek']