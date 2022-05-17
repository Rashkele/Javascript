/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

const namesArray = users.map(
  (user) => user.name
);
console.log(namesArray);

const ageArray = users.map(
  (user) => user.age
);
// let userAverageAge = ageArray.reduce((prev, next) => {
//   return (prev + next) / ageArray.length;
// }, 0);
// console.log(userAverageAge);

// let userAverageAge = ageArray.reduce((prev, next) => {
//   return (prev + next) / ageArray.length;
// }, 0);
// console.log(userAverageAge);

// const grades = [80, 77, 88, 95, 68];
function getAvg(ageArray) {
  const total = ageArray.reduce((acc, c) => acc + c, 0);
  return total / ageArray.length;
}
const averageAge = getAvg(ageArray);
console.log(averageAge);