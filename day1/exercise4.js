// exercise 4 building management
// 1.1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 1.2
console.log(building.numberOfFloors);
// 1.3
// console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
console.log("Floor 1 has " + building.numberOfAptByFloor.firstFloor + " apts")
console.log("Floor 3 has " + building.numberOfAptByFloor.thirdFloor + " apts")

// 1.4 thru the index
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

//1.5 rent comparison
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);